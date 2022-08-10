#!/usr/bin/env bash

trap "exit" INT

readonly SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
source "${SCRIPT_DIR}/PATHS.sh"

# Define the game for which you want to train networks
declare -r PROJECT="FruitCatching.sb3"
readonly project_name=$(echo ${PROJECT} | cut -d'.' -f1)
# Define the configuration file you want to use
declare -r CONFIG_FILE="Neatest.json"

function main() {
  node "${SERVANT_DIR}/servant.js" \
    -u "${WEB_DIR}" \
    -s "${GAMES_DIR}/${PROJECT}" \
    -c "${CONFIGS_DIR}/${CONFIG_FILE}" \
    -v "${GENERATED_RESULTS_DIR}/${project_name}-Generation.csv" \
    -g "${SCRIPT_DIR}/generatedTests" \
    -k \
    -a 10
}

main
