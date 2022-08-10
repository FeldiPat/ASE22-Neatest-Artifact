#!/usr/bin/env bash

trap "exit" INT

readonly SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
source "${SCRIPT_DIR}/PATHS.sh"
source "${SCRIPT_DIR}/utils.sh"

# Define the number of experiment repetitions here
declare -i REPETITIONS=10
declare -r EXPERIMENTS_DIR="${SCRIPT_DIR}/Experiments"
declare -r EXPERIMENTS_FILE="${EXPERIMENTS_DIR}/RQ3.csv"
declare -r EXPERIMENT_RESULTS_DIR="${GENERATED_RESULTS_DIR}/RQ3"
declare -r SUMMARIZED_RESULTS_CSV="${EXPERIMENT_RESULTS_DIR}/ResultsSummarized.csv"
declare -r PLOT_TARGET_DIR="${PLOTS_DIR}/RQ3-Reproduction"

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

  local test="$3"
  readonly test

  echo "${repetition},${project},${test}" >>"${EXPERIMENTS_FILE}"
}

# Prepare the file system for the next run of experiments.
function prepare_filesystem() {
  reset_filesystem
  mkdir -p "${EXPERIMENTS_DIR}"

  local tests=()
  for dynamic_test in "${DYNAMIC_TEST_SUITES}"/*.json; do
    test_name_id=$(echo "${dynamic_test}" | rev | cut -d'/' -f 1 | rev)
    tests+=("${test_name_id}")
  done

  local number_tests
  number_tests=${#tests[@]}
  readonly number_tests

  local total=$((REPETITIONS * number_tests))
  readonly total

  local i=0
  echo "Preparing file system for ${total} runs (if we have a bijective mapping between tests and projects)."

  for repetition in $(seq "${REPETITIONS}"); do
    for project in "${GAMES_DIR}"/*.sb3; do
      local project_name
      project_name=$(strip_path_prefix "${project}")
      for testfile in "${tests[@]}"; do
        local test_name_id
        local test_name
        test_name=$(echo "${testfile}" | cut -d'-' -f 1)

        if [[ "${project_name}" == *"${test_name}"* ]]; then
          update_csv_file "${repetition}" "${project}" "${testfile}"
          progress "$((++i))" "${total}"
        fi
      done
    done
  done
}

function run_whisker() {
  readonly mutation_operators="KRM, SBD, SDM, AOR, LOR, ROR, NCM, VRM"
  readonly trace_repetitions=100

  while IFS= read -r line; do

    local project
    project=$(get_project "${line}")

    local test_name
    test_name=$(get_test "${line}")

    local repetition
    repetition=$(get_repetition "${line}")

    local seed
    seed=$((repetition + 1000))

    local output_path
    output_path="${EXPERIMENT_RESULTS_DIR}/${repetition}/${project}-${test_name}"
    mkdir -p "${output_path}"

    echo -e "\nExecuting mutation analysis on ${project} with test ${test_name} and seed ${seed}"
    node "${SERVANT_DIR}/servant.js" \
      -u "${WEB_DIR}" \
      -s "${GAMES_DIR}/$(get_project "${line}")" \
      -t "${DYNAMIC_TEST_SUITES}/${test_name}" \
      -mu "${mutation_operators}" \
      -at "${trace_repetitions}" \
      -v "${output_path}/${RESULTS_CSV}" \
      -se "${seed}" \
      -a 10 \
      -d -k
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
  python "${PLOT_SCRIPTS_DIR}/PlotRQ3.py" "${SUMMARIZED_RESULTS_CSV}" "${PLOT_TARGET_DIR}"
}

function main() {
  prepare_filesystem
  run_whisker
  extract_results
  plot_results
}

main
