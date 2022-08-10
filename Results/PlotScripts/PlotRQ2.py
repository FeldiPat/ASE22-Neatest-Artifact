import argparse
import math
import os.path
import shutil
import statistics
from collections import defaultdict

import numpy as np
import pandas as pd

from statistics import mean
from matplotlib import pyplot as plt
from scipy.stats import mannwhitneyu

from PlotHelperFunctions import add_box_value_labels, set_box_color, vargha_delaney, axis_styling

global dynamic_data
global static_data
global plot_path
global project_names

# Highest achieved values
global coverage

# Timeline values
global coverage_time

# Misc
global colors
global log_file


def command_line_interface():
    parser = argparse.ArgumentParser(prog='plotSurpriseAdequacy',
                                     description='PLots Test Generation results from a .csv file')

    # Arguments
    parser.add_argument('static_data', metavar='static_data', type=str,
                        help='The path to the csv file from which the static test suite data should be plotted.')

    parser.add_argument('dynamic_data', metavar='dynamic_data', type=str,
                        help='The path to the csv file from which the dynamic test suite data should be plotted.')

    parser.add_argument('plot_path', metavar='plot_path', type=str,
                        help="The directory in which the plots should be saved in. Will be created if necessary.")

    arguments = parser.parse_args()
    global static_data
    static_data = arguments.static_data

    arguments = parser.parse_args()
    global dynamic_data
    dynamic_data = arguments.dynamic_data

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
    log_file = open(plot_path + "/RQ2-PlotLog.txt", "w")


def collect_data():
    dynamic_df = pd.read_csv(dynamic_data, engine='python')
    dynamic_df.sort_values(by=['projectName', 'testName'], inplace=True)
    dynamic_df.to_csv(dynamic_data, index=False)

    static_df = pd.read_csv(static_data, engine='python')
    static_df.sort_values(by=['projectName', 'testName'], inplace=True)
    static_df.to_csv(static_data, index=False)

    global project_names
    project_names = sorted(set(dynamic_df['projectName'].tolist()))

    # Highest achieved values
    global coverage
    coverage = defaultdict(list)

    if "Reproduction" in plot_path:
        plot_log_rq1 = f'{plot_path}../RQ1-Reproduction/RQ1-PlotLog.txt'
    else:
        plot_log_rq1 = f'{plot_path}../RQ1/RQ1-PlotLog.txt'
    log_file.write("Project results \n")
    for project in project_names:
        project_data_static = static_df.loc[(static_df['projectName'] == project)]
        project_data_dynamic = dynamic_df.loc[(dynamic_df['projectName'] == project)]
        project_name = project.removesuffix('.sb3')

        # Extract highest achieved values
        block_count = project_data_static["totalStatements"].tolist()[0]
        coverage[(project, 'static')] = [(cov / block_count) * 100 for cov in
                                         project_data_static["totalCoveredStatements"].tolist()]
        coverage[(project, 'dynamic')] = [(cov / block_count) * 100 for cov in
                                          project_data_dynamic["totalCoveredStatements"].tolist()]

        # Print coverage results for each Project
        log_file.write(f'{project_name}-Static MeanCoverage: {mean(coverage[(project, "static")])}\n')
        log_file.write(f'{project_name}-Dynamic MeanCoverage: {mean(coverage[(project, "dynamic")])}\n')

        # Calculate project differences from test generation
        if os.path.exists(plot_log_rq1):
            with open(plot_log_rq1, 'r') as searchfile:
                for line in searchfile:
                    if f'{project_name}-NEAT MeanCoverage' in line:
                        generation_value = line.split(':')[1]
                        difference_static = mean(coverage[(project, 'static')]) - float(generation_value)
                        difference_dynamic = mean(coverage[(project, 'dynamic')]) - float(generation_value)
                        log_file.write(f'{project_name}-Static Coverage Difference: {difference_static}\n')
                        log_file.write(f'{project_name}-Dynamic Coverage Difference: {difference_dynamic}\n')
        else:
            print(f'Warning! Cannot calculate coverage differences since file {plot_log_rq1} is missing')

    # Print mean values across all projects to PlotLog
    log_file.write("\n")
    mean_cov_static = mean([mean(coverage[key]) for key in coverage.keys() if key[1] == 'static'])
    mean_cov_dynamic = mean([mean(coverage[key]) for key in coverage.keys() if key[1] == 'dynamic'])
    log_file.write(f'All Projects Mean Coverage Static: {mean_cov_static}\n')
    log_file.write(f'All Projects Mean Coverage Dynamic: {mean_cov_dynamic}\n')

    # Calculate average difference from test generation
    if os.path.exists(plot_log_rq1):
        log_file.write("\n")
        with open(plot_log_rq1, 'r') as searchfile:
            for line in searchfile:
                if f'All Projects Mean Coverage Neatest' in line:
                    generation_value = float(line.split(':')[1])

            log_file.write(f'All Projects Mean Coverage Difference Static: {mean_cov_static - generation_value}\n')
            log_file.write(f'All Projects Mean Coverage Difference Dynamic: {mean_cov_dynamic - generation_value}\n')
    else:
        print(f'Warning! Cannot calculate coverage differences since file {plot_log_rq1} is missing')


def grouped_bar_plot(data: dict, y_label: str, title: str, y_log=False):
    static = []
    dynamic = []
    labels = []
    for project in project_names:
        if (project, 'static') in data and (project, 'dynamic') in data:
            static.append(round(mean(data[(project, 'static')]), 2))
            dynamic.append(round(mean(data[project, 'dynamic']), 2))
            labels.append(project.removesuffix('.sb3'))

    x = np.arange(len(labels)) * 5
    width = 1.5

    fig, ax = plt.subplots()
    fig.set_size_inches(40, 10.5)
    ax.bar(x - width / 2, static, width, label='Static', color=colors[0])
    ax.bar(x + width / 2, dynamic, width, label='Dynamic', color=colors[1])

    if y_log:
        ax.set_yscale('log')
        y_label += ' [Log]'

    plt.legend(bbox_to_anchor=(0, 1.02, 1, 0.2), loc="lower right", borderaxespad=0, ncol=2)
    ax.set_ylabel(y_label, fontsize=17)
    ax.set_xticks(x, labels)
    plt.xticks(rotation=90)

    axis_styling(ax)
    fig.tight_layout()
    plt.savefig(plot_path + "Bar" + title + '.pdf')


def box_plot(data: dict, y_label: str, title: str, y_log=False):
    static = []
    dynamic = []
    labels = []
    for project in project_names:
        if (project, 'static') in data and (project, 'dynamic') in data:
            static.append(round(mean(data[(project, 'static')]), 2))
            dynamic.append(round(mean(data[project, 'dynamic']), 2))
            labels.append(project.removesuffix('.sb3'))

    fig, ax = plt.subplots()
    for n, d in enumerate([static, dynamic]):
        outlier = dict(marker='.', markerfacecolor=colors[n], markeredgecolor=colors[n], markersize=5)
        bp = plt.boxplot(d, positions=[n], flierprops=outlier, widths=0.4)
        set_box_color(bp, colors[n])
        add_box_value_labels(bp, ax, ['medians'])

    if y_log:
        ax.set_yscale('log')
        y_label += ' [Log]'

    ax.set_xticklabels(['static', 'dynamic'])
    ax.set_ylabel(y_label, fontsize=17)
    axis_styling(ax)
    fig.tight_layout()
    plt.savefig(plot_path + "Box" + title + '.pdf')
    plt.close()


def box_plot_vd(data: dict, y_label: str, title: str):
    labels = []
    vd_data = []
    for project in project_names:
        if (project, 'static') in data and (project, 'dynamic') in data:
            project_name = project.removesuffix(".sb3")
            static = data[(project, 'static')]
            dynamic = data[(project, 'dynamic')]
            vd = vargha_delaney(dynamic, static)
            mann_whitney_u = mannwhitneyu(dynamic, static)
            p_val = mann_whitney_u.pvalue
            significant = True if p_val < 0.05 else False
            vd_data.append(vd)
            labels.append(project.removesuffix('.sb3'))

            log_file.write(f'{project_name}-{title.removesuffix("VD")}: {vd}; {significant}\n')
            log_file.write(f'{project_name}-{title.removesuffix("VD")} p-value: {p_val}')

    log_file.write(f'\n{title.removesuffix("VD")} VD Mean over all Projects: {mean(vd_data)}\n\n')

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

    ax.set_xticklabels(['NEAT vs. Random'])
    ax.set_ylabel(y_label, fontsize=17)
    axis_styling(ax)
    fig.tight_layout()
    plt.savefig(plot_path + "Box" + title + '.pdf')
    plt.close()


def create_plots():
    grouped_bar_plot(coverage, 'Coverage in %', 'Coverage')
    box_plot(coverage, 'Coverage in %', 'Coverage')
    log_file.write("\n\nVargha and Delaney values:\n")
    box_plot_vd(coverage, 'Vargha and Delaney', 'CoverageVD')


def main():
    command_line_interface()
    collect_data()
    create_plots()
    log_file.close()


if __name__ == '__main__':
    main()
