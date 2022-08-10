#!/usr/bin/env bash

trap "exit" INT

readonly SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
source "${SCRIPT_DIR}/PATHS.sh"

# Define the game you want to test
declare -r PROJECT="FruitCatching.sb3"
readonly project_name=$(echo ${PROJECT} | cut -d'.' -f1)
# Define the test type (Dynamic/Static) and the test file you want to execute
declare -r TEST_FILE="${DYNAMIC_TEST_SUITES}/FruitCatching-2.json"

function main() {
  node "${SERVANT_DIR}/servant.js" \
    -u "${WEB_DIR}" \
    -s "${GAMES_DIR}/${PROJECT}" \
    -t "${TEST_FILE}" \
    -v "${GENERATED_RESULTS_DIR}/${project_name}-Execution.csv" \
    -k \
    -a 10
}

main
