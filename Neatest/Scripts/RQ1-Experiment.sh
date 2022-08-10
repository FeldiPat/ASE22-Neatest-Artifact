#!/usr/bin/env bash

trap "exit" INT

readonly SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
source "${SCRIPT_DIR}/PATHS.sh"
source "${SCRIPT_DIR}/utils.sh"

declare -r REPETITIONS=30
declare -r EXPERIMENTS_DIR="${SCRIPT_DIR}/Experiments"
declare -r EXPERIMENTS_FILE="${EXPERIMENTS_DIR}/RQ1.csv"
declare -r EXPERIMENT_RESULTS_DIR="${GENERATED_RESULTS_DIR}/RQ1"
declare -r SUMMARIZED_RESULTS_CSV="${EXPERIMENT_RESULTS_DIR}/ResultsSummarized.csv"
declare -r PLOT_TARGET_DIR="${PLOTS_DIR}/RQ1-Reproduction"

# Reset the filesystem from previous experiments
function reset_filesystem() {
  echo "Resetting filesystem"

  echo " - Removing ${EXPERIMENT_RESULTS_DIR}"
  if [[ -d "${EXPERIMENT_RESULTS_DIR}" ]]; then
    rm -rf "${EXPERIMENT_RESULTS_DIR}"
  fi
  mkdir -p "${EXPERIMENT_RESULTS_DIR}"

  echo " - Removing ${EXPERIMENTS_FILE}"
  if [[ -f "${EXPERIMENTS_FILE}" ]]; then
    rm -f "${EXPERIMENTS_FILE}"
  fi
}

# Update the experiments CSV file based on the current experiment settings.
function update_csv_file() {
  local repetition="$1"
  readonly repetition

  local project
  project=$(strip_path_prefix "$2")
  readonly project

  local config
  config=$(strip_path_prefix "$3")
  readonly config

  echo "${repetition},${project},${config}" >>"${EXPERIMENTS_FILE}"
}

# Prepare the file system for the next run of experiments.
function prepare_filesystem() {
  reset_filesystem
  mkdir -p "${EXPERIMENTS_DIR}"

  local number_projects
  number_projects=$(find "${GAMES_DIR}" -mindepth 1 -maxdepth 1 -type f -name "*.sb3" 2>/dev/null | wc -l)
  readonly number_projects

  local number_configs
  number_configs=$(find "${CONFIGS_DIR}" -mindepth 1 -maxdepth 1 -type f -name "*.json" 2>/dev/null | wc -l)
  readonly number_configs

  local total=$((REPETITIONS * number_configs * number_projects))
  readonly total

  local i=0

  echo "Preparing file system for ${total} runs. This might take a while."

  for repetition in $(seq "${REPETITIONS}"); do
    for config in "${CONFIGS_DIR}"/*.json; do
      for project in "${GAMES_DIR}"/*.sb3; do
        update_csv_file "${repetition}" "${project}" "${config}"
        progress "$((++i))" "${total}"
      done
    done
  done
}

# Execute the experiments saved within the experiment file one after another.
function run_whisker() {
  while IFS= read -r line; do

    local project
    project=$(get_project "${line}")

    local config
    config=$(get_config "${line}")

    local repetition
    repetition=$(get_repetition "${line}")

    local output_path
    output_path="${EXPERIMENT_RESULTS_DIR}/${repetition}/${project}-${config}"
    mkdir -p "${output_path}"

    echo -e "\nExecuting ${project} with configuration ${config} and seed ${repetition}"
    node "${SERVANT_DIR}/servant.js" \
      -u "${WEB_DIR}" \
      -s "${GAMES_DIR}/${project}" \
      -c "${CONFIGS_DIR}/${config}" \
      -v "${output_path}/${RESULTS_CSV}" \
      -se "${repetition}" \
      -g "${output_path}" \
      -a 10 \
      -d
  done <"${EXPERIMENTS_FILE}"
}

function extract_csv_body() {
  local file="$1"
  readonly file

  local body
  body="$(tail -n+2 "${file}" | grep .)"
  readonly body

  echo "${body}" >>"${SUMMARIZED_RESULTS_CSV}"
}

function extract_csv_header() {
  local file="$1"
  readonly file
  head -1 "${file}" >>"${SUMMARIZED_RESULTS_CSV}"
}

function extract_results() {
  echo -e "\nExtracting results. This might take a while."

  local first_file="true"

  find "${EXPERIMENT_RESULTS_DIR}" -type f -name "${RESULTS_CSV}" -print0 |
    while read -r -d $'\0' csvFile; do
      if [[ "${first_file}" == "true" ]]; then
        extract_csv_header "${csvFile}"
        first_file="false"
      fi

      extract_csv_body "${csvFile}"
    done
}

function plot_results() {
  echo -e "\nGenerating Plots based on the ${SUMMARIZED_RESULTS_CSV} file in the ${PLOT_TARGET_DIR} directory"
  python "${PLOT_SCRIPTS_DIR}/PlotRQ1.py" "${SUMMARIZED_RESULTS_CSV}" "${PLOT_TARGET_DIR}"
}

function main() {
  prepare_filesystem
  run_whisker
  extract_results
  plot_results
}

main
