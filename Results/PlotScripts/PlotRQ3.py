import argparse
import os.path
import shutil
from collections import defaultdict

from PlotHelperFunctions import add_box_value_labels, set_box_color, axis_styling
import numpy as np
import pandas as pd
from matplotlib import pyplot as plt

global data_path
global plot_path

global original_names
global mutation_operators

global mutant
global mutant_project
global false_positives_project
global mutant_project_category
global mutant_category
global log_file


def command_line_interface():
    parser = argparse.ArgumentParser(prog='plotSurpriseAdequacy',
                                     description='PLots Surprise Adequacy results from a .csv file')

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

    # Open PlotLog file
    global log_file
    log_file = open(plot_path + "/RQ3-PlotLog.txt", "w")


def collect_data():
    data = pd.read_csv(data_path, engine='python')
    data.sort_values(by=['projectName', 'testName', 'id'], inplace=True)
    data.to_csv(data_path, index=False)
    project_names = sorted(set(data['projectName'].tolist()))

    global original_names
    original_names = set([p.split('-')[0] for p in data['projectName']])

    global mutation_operators
    mutation_operators = ['KRM', 'SBD', 'SDM', 'AOR', 'LOR', 'ROR', 'NCM', 'VRM']

    global mutant
    global mutant_project
    global false_positives_project
    global mutant_project_category
    global mutant_category
    mutant = defaultdict(list)
    mutant_project = defaultdict(list)
    false_positives_project = defaultdict(list)
    mutant_project_category = defaultdict(list)
    mutant_category = defaultdict(list)

    total_mutants = 0
    detected_mutants = 0
    false_positives = 0
    for project in project_names:
        original_name = project.split('-')[0]
        project_data = data.loc[data['projectName'] == project]
        test_suites = set(project_data['testName'].tolist())

        for suite in test_suites:
            suite_data = project_data.loc[project_data['testName'] == suite]
            seeds = set(suite_data['seed'].tolist())

            for seed in seeds:
                seed_data = suite_data.loc[suite_data['seed'] == seed]
                mutant_detected = True in seed_data['isMutant'].tolist()
                mutant[project].append(mutant_detected)

                if project in original_names:
                    mutant_project_category[project].append(mutant_detected)
                    mutant_category['Original'].append(mutant_detected)
                    false_positives_project[original_name.removesuffix('.sb3')].append(mutant_detected)
                    false_positives = false_positives + 1 if mutant_detected else false_positives
                else:
                    mutant_project[original_name.removesuffix('.sb3')].append(mutant_detected)
                    for o in mutation_operators:
                        if o in project:
                            project_name = project.split('-')[0]
                            mutant_project_category[f'{project_name}-{o}'].append(mutant_detected)
                            mutant_category[o].append(mutant_detected)

                            total_mutants += 1
                            detected_mutants = detected_mutants + 1 if mutant_detected else detected_mutants
                            break

    # Print mutation analysis results
    log_file.write(f'Generated Mutants: {total_mutants}\n')
    log_file.write(f'Detected Mutants: {detected_mutants}\n')
    log_file.write(f'Mutation Score: {(detected_mutants / total_mutants) * 100}\n')
    for [key, v] in mutant_category.items():
        total = len(v)
        number_killed = len([x for x in v if x])
        log_file.write(f'Category {key}: {total}\n')
        log_file.write(f'Category {key} Killed: {number_killed}\n')
        log_file.write(f'Category {key} KillRate: {(number_killed / total) * 100}\n')

    for [key, v] in mutant_project.items():
        total = len(v)
        number_killed = len([x for x in v if x])
        log_file.write(f'{key} Mutants: {total}\n')
        log_file.write(f'{key} Killed: {number_killed}\n')
        log_file.write(f'{key} KillRate: {(number_killed / total) * 100}\n')

    for [key, v] in false_positives_project.items():
        total = len(v)
        number_killed = len([x for x in v if x])
        log_file.write(f'{key} Originals: {total}\n')
        log_file.write(f'{key} FalsePositives: {number_killed}\n')
        log_file.write(f'{key} FalsePositivesRate: {(number_killed / total) * 100}\n')


def bar_plot_cross_projects(plot_data: dict, target_path: str, plot_width=None):
    # Create directory if it's missing.
    mutants_plot_path = plot_path + target_path
    if not os.path.isdir(mutants_plot_path):
        os.mkdir(mutants_plot_path)

    for p in original_names:
        data = {key: plot_data[key] for key in plot_data if key.startswith(p) and len(plot_data[key]) > 0}
        labels = list(data.keys())
        values = [v.count(True) / len(v) for v in data.values()]

        width = 0.35
        x = np.array(labels)

        fig, ax = plt.subplots()
        if plot_width:
            fig.set_size_inches(plot_width, 10.5)
        ax.bar(x, values, width)

        ax.set_ylabel('Kill Rate', fontsize=17)
        ax.set_xticks(x, labels)
        plt.xticks(rotation=90)

        axis_styling(ax)
        fig.tight_layout()
        plt.savefig(f"{mutants_plot_path}{p}.pdf")
        plt.close()


def bar_plot(data: dict):
    data = {key: data[key] for key in data if len(data[key]) > 0}
    labels = list(data.keys())
    values = [v.count(True) / len(v) for v in data.values()]

    width = 0.35
    x = np.array(labels)

    fig, ax = plt.subplots()
    fig.set_size_inches(100, 10.5)
    ax.bar(x, values, width)

    ax.set_ylabel('Kill Rate', fontsize=17)
    ax.set_xticks(x, labels)
    plt.xticks(rotation=90)

    axis_styling(ax)
    fig.tight_layout()
    plt.savefig(f"{plot_path}BarCrossProjectCategory.pdf")
    plt.close()


def box_plot(plot_data):
    data = []
    labels = ['Original']
    original_data = []
    for p in original_names:
        project_data = plot_data[p]
        if len(project_data) > 0:
            original_data.append(project_data.count(True) / len(project_data))

    if len(original_data) > 0:
        data.append(original_data)

    for o in mutation_operators:
        labels.append(o)
        operator_data = []
        for p in original_names:
            project_operator_data = {key: plot_data[key] for key in plot_data if p in key and o in key}
            if len(project_operator_data.values()) > 0:
                vals = [item for sublist in project_operator_data.values() for item in sublist]
                operator_data.append(vals.count(True) / len(vals))
        data.append(operator_data)
    color = 'royalblue'

    fig, ax = plt.subplots()
    fig.set_size_inches(20, 12)
    for n, d in enumerate(data):
        outlier = dict(marker='.', markerfacecolor=color, markeredgecolor=color, markersize=15)
        bp = plt.boxplot(d, positions=[n], flierprops=outlier, widths=0.4)
        set_box_color(bp, color)
        add_box_value_labels(bp, ax, ['medians', 'whiskers'])

    ax.set_xticklabels(labels)
    ax.set_ylabel('Kill Rate in %', fontsize=30)
    axis_styling(ax, 35)
    fig.tight_layout()
    plt.savefig(f"{plot_path}BoxCrossProjectCategory.pdf")
    plt.close()


def main():
    command_line_interface()
    collect_data()
    bar_plot_cross_projects(mutant, "ProjectMutants/", 80)
    bar_plot_cross_projects(mutant_project_category, "ProjectCategory/")
    bar_plot(mutant_category)
    box_plot(mutant_project_category)
    log_file.close()


if __name__ == '__main__':
    main()
