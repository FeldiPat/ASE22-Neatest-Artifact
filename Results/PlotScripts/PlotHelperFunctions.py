import numpy as np
from scipy.stats import rankdata
from matplotlib import pyplot as plt


def vargha_delaney(a, b):
    m = len(a)
    n = len(b)

    if m > n:
        a = a[0:n]
        m = n
    elif n > m:
        b = b[0:m]
        n = m

    r = rankdata(a + b)
    r1 = sum(r[0:m])
    return (2 * r1 - m * (m + 1)) / (2 * n * m)


def axis_styling(ax, x_label_size=12):
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    ax.spines['left'].set_visible(False)
    ax.spines['bottom'].set_color('#DDDDDD')
    ax.tick_params(bottom=False, left=False, axis='both', labelsize=x_label_size)
    ax.set_axisbelow(True)
    ax.yaxis.grid(True, color='#EEEEEE')
    ax.xaxis.grid(False)


# Sets the color of boxplot <bp> to <color>
def set_box_color(bp, color):
    plt.setp(bp['boxes'], color=color)
    plt.setp(bp['whiskers'], color=color)
    plt.setp(bp['caps'], color=color)
    plt.setp(bp['medians'], color='k')


# Add labels to all defined elements <elements_to_label> of the boxplots <bp> in plot <ax>
def add_box_value_labels(bp, ax, elements_to_label):
    # x position
    (x_l, _), (x_r, _) = bp['medians'][0].get_xydata()
    x_line_center = x_l + 1.1 * (x_r - x_l)
    # Save y-labels to prohibit overlapping labels
    y_labels = []
    for element in elements_to_label:
        for line in bp[element]:
            # Get the position of the element.
            (_, y), (_, _) = line.get_xydata()
            # Make sure datapoint exist
            if not np.isnan(y):
                # y position
                y_line_center = y

                # Use Y value as label and format number with one decimal place
                label = "{:.2f}".format(y)

                # Put label next to element if it's far enough away from other labels
                far_enough_away = True
                for y_label in y_labels:
                    if abs(y_label - y_line_center) < ax.get_ylim()[1] * 0.05:
                        far_enough_away = False
                if far_enough_away:
                    ax.text(x_line_center, y_line_center, label, verticalalignment='center', fontsize=10)
                    y_labels.append(y_line_center)
