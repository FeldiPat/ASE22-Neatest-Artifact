import numpy as np
from matplotlib import pyplot as plt
import seaborn as sns

from PlotHelperFunctions import axis_styling

reference = [-0.096, 0.042, -0.067, -0.287, 0.009, 0.034, -0.109, -0.077, -0.236, -0.179, -0.049, -0.013, 0.089, -0.003,
             -0.02, -0.014, -0.045, -0.24, -0.139, -0.14, -0.024, -0.21, 0.029, -0.081, -0.258, 0.019, -0.074, -0.151,
             -0.018, 0.097, 0.089, -0.231, 0.069, -0.13, 0.058, -0.295, 0.03, 0.036, -0.256, 0.091, -0.305, -0.084,
             -0.04, 0.036, -0.227, -0.099, 0.087, -0.238, -0.137, 0.021, -0.274, -0.258, 0.012, -0.231, 0.009, 0.055,
             -0.015, -0.219, -0.242, -0.284, -0.031, -0.096, 0.112, -0.031, -0.298, -0.01, -0.127, -0.217, 0.004,
             -0.088, -0.119, 0.022, -0.17, -0.21, -0.106, 0.061, 0.001, -0.093, 0.021, 0.083, 0.08, -0.283, 0.035,
             -0.01, -0.225, -0.287, -0.268, -0.233, -0.143, 0.036, 0.038, 0.04, -0.048, -0.031, -0.091, 0.032, 0.039,
             -0.196, 0.014, 0.03
             ]

test_value_original = 0.049
mutant_value_1 = -0.728
mutant_value_2 = 0.723

plt.rcParams["figure.figsize"] = [6, 3]
fig, ax = plt.subplots()
sns.kdeplot(reference, color="royalblue")
ax.set_xlabel("Node Activation Values", labelpad=10, fontsize=13)
ax.set_ylabel('Density', labelpad=10, fontsize=13)
x = [mutant_value_1, mutant_value_2]
y = [0.14, 0.14]
plt.scatter(x, y, label="Incorrect Program", marker="o", color="darkorange", s=80)
plt.xticks(np.arange(-0.8, 0.85, 0.2))
plt.legend()
axis_styling(ax)
plt.tight_layout()
plt.show()
