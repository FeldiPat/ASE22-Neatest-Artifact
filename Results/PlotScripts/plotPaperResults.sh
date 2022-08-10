#!/usr/bin/env bash

readonly SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
readonly EXPERIMENT_RESULTS_DIR="${SCRIPT_DIR}/../PaperResults"
readonly PLOT_DIR="${SCRIPT_DIR}/../Plots"

function main() {
  echo "Cleaning Plot Directory"
  if [[ -d "${PLOT_DIR}" ]]; then
    rm -rf "${PLOT_DIR}"
  fi
  mkdir -p "${PLOT_DIR}"

  echo "Creating Plots for RQ1"
  python "${SCRIPT_DIR}/PlotRQ1.py" "${EXPERIMENT_RESULTS_DIR}/RQ1.csv" "${PLOT_DIR}/RQ1/"

  echo "Creating Plots for RQ2"
  python "${SCRIPT_DIR}/PlotRQ2.py" "${EXPERIMENT_RESULTS_DIR}/RQ2-Static.csv" "${EXPERIMENT_RESULTS_DIR}/RQ2-Dynamic.csv" "${PLOT_DIR}/RQ2/"

  echo "Creating Plots for RQ3"
  python "${SCRIPT_DIR}/PlotRQ3.py" "${EXPERIMENT_RESULTS_DIR}/RQ3.csv" "${PLOT_DIR}/RQ3/"
}

main
