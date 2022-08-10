#!/usr/bin/env bash

trap "exit" INT

readonly SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
source "${SCRIPT_DIR}/PATHS.sh"

function buildFramework() {
  echo "Building the Framework"
  cd "${FRAMEWORK_DIR}" || exit
  yarn install && yarn build
}

buildFramework
