#!/usr/bin/env bash

readonly PATHS_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)

# Top level Directories
declare -r ARTIFACT_ROOT="${PATHS_DIR}/../.."
declare -r NEATEST_DIR="${ARTIFACT_ROOT}/Neatest"
declare -r DATASET_DIR="${ARTIFACT_ROOT}/Dataset"
declare -r RESULTS_DIR="${ARTIFACT_ROOT}/Results"

# Neatest Directories
declare -r FRAMEWORK_DIR="${NEATEST_DIR}/framework"
declare -r WEB_DIR="${FRAMEWORK_DIR}/whisker-web/dist/index.html"
declare -r SERVANT_DIR="${FRAMEWORK_DIR}/servant"
declare -r CONFIGS_DIR="${FRAMEWORK_DIR}/config"

# Dataset Directories
declare -r GAMES_DIR="${DATASET_DIR}/Games"
declare -r TEST_SUITES_DIR="${DATASET_DIR}/TestSuites"
declare -r DYNAMIC_TEST_SUITES="${TEST_SUITES_DIR}/dynamic"
declare -r STATIC_TEST_SUITES="${TEST_SUITES_DIR}/static"

# Results Directories
declare -r GENERATED_RESULTS_DIR="${RESULTS_DIR}/GeneratedResults"
declare -r PLOT_SCRIPTS_DIR="${RESULTS_DIR}/PlotScripts"
declare -r PLOTS_DIR="${RESULTS_DIR}/Plots"

# Misc
declare -r RESULTS_CSV="results.csv"
