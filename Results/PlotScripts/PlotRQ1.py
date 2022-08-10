import argparse
import os.path
import re
import shutil
import statistics
import csv
from collections import defaultdict

import numpy as np
import pandas as pd

from statistics import mean
from matplotlib import pyplot as plt
from scipy.stats import mannwhitneyu

from PlotHelperFunctions import axis_styling, set_box_color, add_box_value_labels, \
    vargha_delaney

global data_path
global plot_path

global project_names
global config_names
global time_line_start
global time_line_end
global time_line_step

# Highest achieved values
global coverage
global score
global playtime

# Timeline values
global coverage_time
global score_time
global playtime_time

# Misc
global colors
global log_file


def command_line_interface():
    parser = argparse.ArgumentParser(prog='plotSurpriseAdequacy',
                                     description='PLots Test Generation results from a .csv file')

    # Arguments
    parser.add_argument('data_path', metavar='data_path', type=str,
                        help='The path to the csv file from which data should be plotted.')

    parser.add_argument('plot_path', metavar='plot_path', type=str,
                        help="The directory in which the plots should be saved in. Will be created if necessary.")

    arguments = parser.parse_args()
    global data_path
    data_path = arguments.data_path

    # Add path discriminator if it's missing.
    global plot_path
    plot_path = arguments.plot_path
    if plot_path[-1] != '/':
        plot_path += '/'

    # Clean Plot directory.
    if os.path.isdir(plot_path):
        shutil.rmtree(plot_path, ignore_errors=True)
    os.mkdir(plot_path)

    # Set Plot values
    global colors
    colors = ['royalblue', 'darkorange']

    # Open PlotLog file
    global log_file
    log_file = open(plot_path + "/RQ1-PlotLog.txt", "w")


def collect_data():
    # Align rows to match the header
    with open(data_path) as inf:
        reader = csv.reader(inf.readlines())

    with open(data_path, 'w') as outfile:
        writer = csv.writer(outfile)
        header = next(reader)
        writer.writerow(header)
        for line in reader:
            if len(line) > len(header):
                writer.writerow(line[0:len(header)])
            else:
                writer.writerow(line)
        writer.writerows(reader)

    data = pd.read_csv(data_path, engine='python')
    data.sort_values(by=['projectName', 'configName'], inplace=True)
    data.to_csv(data_path, index=False)

    global time_line_start
    global time_line_end
    global time_line_step
    header = list(data.columns.values)
    header_timeline = header[header.index('0'):]
    time_line_start = float(header_timeline[0])
    time_line_end = float(header_timeline[-1])
    time_line_step = float(header_timeline[1])

    global project_names
    global config_names
    project_names = sorted(set(data['projectName'].tolist()))
    config_names = sorted(
        set([re.sub('-repetition-[0-9]*.json', '', c).removesuffix('.json') for c in data['configName']]), reverse=True)

    # Highest achieved values
    global coverage
    global score
    global playtime
    coverage = defaultdict(list)
    score = defaultdict(list)
    playtime = defaultdict(list)

    # Timeline values
    global coverage_time
    global score_time
    global playtime_time
    coverage_time = defaultdict(list)
    score_time = defaultdict(list)
    playtime_time = defaultdict(list)

    log_file.write("Project results: \n\n")
    for project in project_names:
        project_data = data.loc[data['projectName'] == project]
        for config in config_names:
            project_config_data = project_data.loc[project_data['configName'].str.contains(config)]
            project_name = project.removesuffix(".sb3")

            # Extract highest achieved values
            coverage[(project, config)] = [cov * 100 for cov in project_config_data["bestCoverage"].tolist()]
            score[(project, config)] = project_config_data["score"].tolist()
            playtime[(project, config)] = project_config_data["playTime"].tolist()

            # Print mean project values to PlotLog
            log_file.write(f'{project_name}-{config} MeanCoverage: {mean(coverage[(project, config)])}\n')
            log_file.write(f'{project_name}-{config} MeanScore: {mean(score[(project, config)])}\n')
            log_file.write(f'{project_name}-{config} MeanPlayTime: {mean(playtime[(project, config)])}\n')

            # Extract Timeline values
            block_count = project_config_data["fitnessFunctionCount"].tolist()[0]
            for time in header_timeline:
                coverage_samples = []
                score_samples = []
                playtime_samples = []

                # The values are organised as a tuple: [coverage | score | playtime]
                for tuple_value in project_config_data[time]:
                    values = tuple_value.split('|')
                    coverage_samples.append(float(values[0]) / block_count)
                    score_samples.append(float(values[2]))
                    playtime_samples.append(float(values[3]))

                coverage_time[(project, config)].append(mean(coverage_samples))
                score_time[(project, config)].append(mean(score_samples))
                playtime_time[(project, config)].append(mean(playtime_samples))

    # Print mean values across all projects to PlotLog
    log_file.write("\n")
    for data, name in zip([coverage, score, playtime], ['Coverage', 'Score', 'PlayTime']):
        data_random = [mean(data[key]) for key in data.keys() if key[1] == config_names[0]]
        data_neat = [mean(data[key]) for key in data.keys() if key[1] == config_names[1]]
        log_file.write(f'All Projects Mean {name} Random: {mean(data_random)}\n')
        log_file.write(f'All Projects Mean {name} Neatest: {mean(data_neat)}\n\n')

    # Extract fully covered programs within first hour
    for c in config_names:
        full = 0
        for p in project_names:
            ninety_found = False
            for i, val in enumerate(coverage_time[(p, c)]):
                if val == 1 and not ninety_found and i <= 60:
                    full += 1
                    break
        log_file.write(f'Number of programs covered within first hour {c}: {full}\n')


def grouped_bar_plot(data: dict, y_label: str, title: str, y_log=False):
    # Create directory if it's missing.
    bar_plot_path = plot_path + "BarPlots/"
    if not os.path.isdir(bar_plot_path):
        os.mkdir(bar_plot_path)

    random_data = []
    neat_data = []
    labels = []
    for project in project_names:
        if (project, config_names[0]) in data and (project, config_names[1]) in data:
            random_data.append(round(mean(data[(project, config_names[0])]), 2))
            neat_data.append(round(mean(data[project, config_names[1]]), 2))
            labels.append(project.removesuffix('.sb3'))

    x = np.arange(len(labels)) * 5
    width = 1.5

    fig, ax = plt.subplots()
    fig.set_size_inches(40, 10.5)
    ax.bar(x - width / 2, random_data, width, label=config_names[0], color=colors[0])
    ax.bar(x + width / 2, neat_data, width, label=config_names[1], color=colors[1])

    if y_log:
        ax.set_yscale('log')
        y_label += ' [Log]'

    plt.legend(bbox_to_anchor=(0, 1.02, 1, 0.2), loc="lower right", borderaxespad=0, ncol=2)
    ax.set_ylabel(y_label, fontsize=17)
    ax.set_xticks(x, labels)
    plt.xticks(rotation=90)

    axis_styling(ax)
    fig.tight_layout()
    plt.savefig(bar_plot_path + title + '.pdf')


def box_plot(data: dict, y_label: str, title: str, y_log=False):
    # Create directory if it's missing.
    box_plot_path = plot_path + "BoxPlots/"
    if not os.path.isdir(box_plot_path):
        os.mkdir(box_plot_path)

    labels = []
    random_data = []
    neat_data = []
    for project in project_names:
        if (project, config_names[0]) in data and (project, config_names[1]) in data:
            random_data.append(mean(data[(project, config_names[0])]))
            neat_data.append(mean(data[project, config_names[1]]))
            labels.append(project.removesuffix('.sb3'))

    fig, ax = plt.subplots()
    for n, d in enumerate([random_data, neat_data]):
        outlier = dict(marker='.', markerfacecolor=colors[n], markeredgecolor=colors[n], markersize=5)
        bp = plt.boxplot(d, positions=[n], flierprops=outlier, widths=0.4)
        set_box_color(bp, colors[n])
        add_box_value_labels(bp, ax, ['medians'])

    if y_log:
        ax.set_yscale('log')
        y_label += ' [Log]'

    ax.set_xticklabels([config_names[0], config_names[1]])
    ax.set_ylabel(y_label, fontsize=17)
    axis_styling(ax)
    fig.tight_layout()
    plt.savefig(box_plot_path + title + '.pdf')
    plt.close()


def box_plot_vd(data: dict, y_label: str, title: str):
    # Create directory if it's missing.
    box_plot_path = plot_path + "BoxPlots/"
    if not os.path.isdir(box_plot_path):
        os.mkdir(box_plot_path)

    labels = []
    vd_data = []
    for project in project_names:
        if (project, config_names[0]) in data and (project, config_names[1]) in data:
            project_name = project.removesuffix(".sb3")
            random = data[(project, config_names[0])]
            neat = data[(project, config_names[1])]
            vd = vargha_delaney(neat, random)
            mann_whitney_u = mannwhitneyu(neat, random)
            p_val = mann_whitney_u.pvalue
            significant = True if p_val < 0.05 else False
            vd_data.append(vd)

            labels.append(project.removesuffix('.sb3'))
            log_file.write(f'{project_name}-{title.removesuffix("VD")}: {vd}; {significant}\n')
            log_file.write(f'{project_name}-{title.removesuffix("VD")} p-value: {p_val}\n')

    log_file.write(f'\n{title.removesuffix("VD")} VD Mean over all Projects: {mean(vd_data)}\n\n')

    # Define median color
    median = statistics.median(vd_data)
    if median > 0.5:
        median_color = 'forestgreen'
    elif median == 0.5:
        median_color = 'black'
    else:
        median_color = 'darkred'

    fig, ax = plt.subplots()
    outlier = dict(marker='.', markersize=5)
    median = dict(linestyle='-', linewidth=1.5, color=median_color)
    bp = plt.boxplot(vd_data, flierprops=outlier, medianprops=median, widths=0.4)
    add_box_value_labels(bp, ax, ['medians', 'whiskers'])

    ax.set_xticklabels(['Neatest vs. Random'])
    ax.set_ylabel(y_label, fontsize=17)
    axis_styling(ax)
    fig.tight_layout()
    plt.savefig(box_plot_path + title + '.pdf')
    plt.close()


def time_line(data: dict, y_label: str, title: str, project=''):
    # Create directory if it's missing.
    time_plot_path = plot_path + "TimeLine/"
    if not os.path.isdir(time_plot_path):
        os.mkdir(time_plot_path)

    if project != '':
        time_plot_path += 'Projects/'
        if not os.path.isdir(time_plot_path):
            os.mkdir(time_plot_path)

    x = np.arange(time_line_start / 60000, (time_line_end + 1) / 60000, time_line_step / 60000)
    value_length = len(next(iter(data.values())))
    random_data = []
    neat_data = []
    for time in range(0, value_length):
        time_stamp_random = []
        time_stamp_neat = []
        if time == 0:
            random_data.append(0)
            neat_data.append(0)
        else:
            for project in project_names:
                if (project, config_names[0]) in data and (project, config_names[1]) in data:
                    time_stamp_random.append(data[(project, config_names[0])][time])
                    time_stamp_neat.append(data[(project, config_names[1])][time])
            random_data.append(mean(time_stamp_random))
            neat_data.append(mean(time_stamp_neat))

    fig, ax = plt.subplots()
    line_styles = [(0, (5, 1)), 'solid']
    configs = ["Random", "Neatest"]
    ninety_value = [0, 0]
    ninety_five_value = [0, 0]
    for n, d in enumerate([random_data, neat_data]):
        ax.plot(x, d, color=colors[n], label=configs[n], ls=line_styles[n])
        for index, val in enumerate(d):
            if val > 0.9 and ninety_value[n] == 0:
                ninety_value[n] = index
            if val > 0.95 and ninety_five_value[n] == 0:
                ninety_five_value[n] = index
                break

    if "Coverage" in title:
        for n, values in enumerate(zip(ninety_value, ninety_five_value)):
            if values[0] > 0:
                ax.plot(values[0], 0.9, color=colors[n], marker='v', markersize=10)
                ax.vlines(values[0], ymin=0, ymax=0.9, color=colors[n], linestyles=(0, (1, 10)))
            if values[1] > 0:
                ax.plot(values[1], 0.95, color=colors[n], marker='^', markersize=10)
                ax.vlines(values[1], ymin=0, ymax=0.95, color=colors[n], linestyles=(0, (1, 10)))

    ax.legend(borderaxespad=0, ncol=1, fontsize=17, loc='lower right')
    ax.set_ylabel(y_label, labelpad=10, fontsize=17)
    ax.set_xlabel('Time in Minutes', fontsize=17)

    axis_styling(ax)
    fig.tight_layout()
    plt.savefig(time_plot_path + title + ".pdf")
    plt.close()


def project_time_lines(data: dict, y_label: str, title: str):
    time_plot_path = plot_path + "TimeLine/Projects/"
    if not os.path.isdir(time_plot_path):
        os.mkdir(time_plot_path)
    for project in project_names:
        if (project, config_names[0]) in data and (project, config_names[1]) in data:
            d = {(project, config_names[0]): data[(project, config_names[0])],
                 (project, config_names[1]): data[(project, config_names[1])]}
            project_name = project.removesuffix('.sb3')
            time_line(d, y_label, project_name + '-' + title, project_name)


def create_bar_plots():
    grouped_bar_plot(coverage, 'Coverage in %', 'Coverage')
    grouped_bar_plot(score, "Achieved Score", "Score", True)
    grouped_bar_plot(playtime, 'Time Played in s', 'Playtime')


def create_box_plots():
    box_plot(coverage, 'Coverage in %', 'Coverage')
    box_plot(score, 'Achieved Score', 'Score', True)
    box_plot(playtime, 'Time Played in s', 'Playtime')

    log_file.write("\n\nVargha and Delaney values:\n")
    box_plot_vd(coverage, 'Vargha and Delaney', 'CoverageVD')
    box_plot_vd(score, 'Vargha and Delaney', 'ScoreVD')
    box_plot_vd(playtime, 'Vargha and Delaney', 'PlaytimeVD')


def create_time_line_plots():
    time_line(coverage_time, 'Coverage in %', 'Coverage')
    time_line(score_time, 'Achieved Score', 'Score')
    time_line(playtime_time, 'Time Played in s', 'Playtime')
    project_time_lines(coverage_time, 'Coverage in %', 'Coverage')
    project_time_lines(score_time, 'Achieved Score', 'Score')
    project_time_lines(playtime_time, 'Time Played in s', 'Playtime')


def main():
    command_line_interface()
    collect_data()
    create_bar_plots()
    create_box_plots()
    create_time_line_plots()


if __name__ == '__main__':
    main()
    log_file.close()
