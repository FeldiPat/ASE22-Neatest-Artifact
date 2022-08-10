#!/usr/bin/env bash

trap "exit" INT

readonly SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
source "${SCRIPT_DIR}/PATHS.sh"

# Define the game on which you want to apply mutation analysis
declare -r PROJECT="FruitCatching.sb3"
readonly project_name=$(echo ${PROJECT} | cut -d'.' -f1)

# Define the test file you want to execute
declare -r TEST_FILE="${DYNAMIC_TEST_SUITES}/FruitCatching-2.json"

# Define the mutation operators
readonly mutation_operators="KRM, SBD, SDM, AOR, LOR, ROR, NCM, VRM"

# Define the number of recorded ground truth traces
readonly trace_repetitions=100

function main() {
  node "${SERVANT_DIR}/servant.js" \
    -u "${WEB_DIR}" \
    -s "${GAMES_DIR}/${PROJECT}" \
    -t "${TEST_FILE}" \
    -mu "${mutation_operators}" \
    -at "${trace_repetitions}" \
    -v "${GENERATED_RESULTS_DIR}/${project_name}MutationAnalysis.csv" \
    -k \
    -a 10
}

main
