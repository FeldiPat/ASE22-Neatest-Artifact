function get_repetition() {
  local lineno="$1"
  readonly lineno

  echo "${line}" | cut -d',' -f 1
}

function get_project() {
  local line="$1"
  readonly line

  echo "${line}" | cut -d',' -f 2
}

function get_config() {
  local lineno="$1"
  readonly lineno

  echo "${line}" | cut -d',' -f 3
}

function get_test() {
  local lineno="$1"
  readonly lineno

  echo "${line}" | cut -d',' -f 3
}

function strip_file_extension() {
  name="$1"
  name="${name%.json}"
  name="${name%.sb3}"
  name="${name%.gz}"
  name="${name%.tar}"
  echo "${name}"
}

function strip_path_prefix() {
  name="$1"
  name="${name##*/}"
  echo "${name}"
}

function strip_path_and_extension() {
  name="$1"
  name="$(strip_path_prefix "${name}")"
  name="$(strip_file_extension "${name}")"
  echo "${name}"
}

function get_test_name() {
  local test="$1"
  readonly test

  test_name="$(strip_path_prefix "${test}")"
  echo "${test_name}"
}

function get_config_with_seed_name() {
  local config="$1"
  readonly config

  local seed="$2"
  readonly seed

  local config_name
  config_name="$(strip_path_and_extension "${config}")"
  readonly config_name

  echo "${config_name}-seed-${seed}.json"
}

function get_project_name() {
  local project="$1"
  readonly project

  # Set hyphen as delimiter
  oldIFS=$IFS
  IFS='-'

  #Read the split words into an array based on hyphen delimiter
  local project
  project_name="$(strip_path_and_extension "${project}")"

  read -r -a strarr <<<"$project_name"
  IFS=$oldIFS
  echo "${strarr[0]}"
}

function remove_old_file() {
  echo "Removing old ${RESULTS_CSV}"
  [[ -f "${RESULTS_CSV}" ]] && rm -f "${RESULTS_CSV}"
}

# https://stackoverflow.com/a/238094
function progress() {
  local current="$1"
  readonly current

  local total="$2"
  readonly total

  echo -ne "Progress: ${current}/${total}\r\c"

  if [[ "${current}" == "${total}" ]]; then
    echo -ne "\n"
  fi
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

  find "${1}" -type f -name "${RESULTS_CSV}" -print0 |
    while read -r -d $'\0' csvFile; do
      if [[ "${first_file}" == "true" ]]; then
        extract_csv_header "${csvFile}"
        first_file="false"
      fi

      extract_csv_body "${csvFile}"
    done
}
