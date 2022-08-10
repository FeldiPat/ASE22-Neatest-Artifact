# Neatest

------

## Framework

You can find **Neatest's** source code, which is based on **Whisker** within the framework folder. 
**Neatest** was tested using
   - **Node.js** version 18.7.0
   - **yarn** version 1.22.19


------

## Scripts

This folder contains scripts that can be used to execute Neatest and to reproduce the results reported in the paper. The
essential **.sh** files are:

- `buildFramework.sh`: installs required dependencies and builds the Neatest framework.
- `generateTests.sh`: generates tests for a specified game. Within the script, you have to define the program under test (`.sb3`) and the configuration file (`.json`) that contains the search hyperparameters.
- `executeTests.sh`: executes a single dynamic or static test on a specified game. Within the script, you have to define the program under test (`.sb3`) and the test file (`.json` for dynamic or `.js` for static).
- `mutationAnalysis`: applies mutation analysis to a specified program. Within the script, you have to define the test subject (`.sb3`), a dynamic test suite (`.json`), the mutation operators, and the number of ground truth traces, which are used for calculating the Surprise Adequacy. 
- `RQ1-Experiment.sh`: reproduces the results of RQ1.
- `RQ2-Experiment.sh`: reproduces the results of RQ2.
- `RQ3-Experiment`: reproduces the results of RQ3.

---- 

## Steps for Reproduction

Since we advise to parallelize the experiments, the scripts have been written to ease the execution on server clusters. All three scripts (RQ1, RQ2,
RQ3) generate a `.csv` file within the `Experiments` directory that lists independent Neatest executions to reproduce the selected RQ.
Hence, the `.csv` can be used to distribute the individual framework executions for the selected RQ on server nodes.

Step-by-step guide to reproduce the experiments:

1. Build the framework by executing `buildFramework.sh`. This step is only required once
2. Execute the script of the experiment you want to reproduce (RQ1, RQ2, RQ3). By changing
   the `REPETITIONS` variable within the scripts, you can specify how many repetitions of the experiment you want to
   execute. The default is set to the values reported in the paper. **Be aware that all three scripts clean the file
   system from results they previously produced**.
3. You can find the raw results in the **Results/GeneratedResults** folder and a plot of these results in the **Results/Plot** directory.
