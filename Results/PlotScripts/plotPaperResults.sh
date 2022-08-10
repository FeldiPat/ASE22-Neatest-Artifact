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

  echo "Counting winning states for RQ1"
  count_winning_states

  echo "Creating Plots for RQ2"
  python "${SCRIPT_DIR}/PlotRQ2.py" "${EXPERIMENT_RESULTS_DIR}/RQ2-Static.csv" "${EXPERIMENT_RESULTS_DIR}/RQ2-Dynamic.csv" "${PLOT_DIR}/RQ2/"

  echo "Creating Plots for RQ3"
  python "${SCRIPT_DIR}/PlotRQ3.py" "${EXPERIMENT_RESULTS_DIR}/RQ3.csv" "${PLOT_DIR}/RQ3/"
}

function count_winning_states() {

  configs=("NEAT" "Random")
  programs=("BirdShooter" "BrainGame" "CatchingApples" "CatchTheDots" "CatchTheGifts" "CityDefender" "DessertRally"
    "DieZauberlehrlinge" "Dodgeball" "Dragons" "EndlessRunner" "FallingStars" "FinalFight" "FlappyParrot" "Frogger"
    "FruitCatching" "HackAttack" "LineUp" "OceanCleanup" "Pong" "RioShootout" "Snake" "SnowballFight" "SpaceOdyssey"
    "WhackAMole")
  winning_grep=("6:4~1}h_k[ebo^9h:E7B1|-Stage" "30:Roo0%Ar%,u6+Az:Sf/#?-Giga" "14:G:.hgfaP%_ISU_IhDK^N-Apple"
    "77:1.XV1lc0:NLM14twh3z^-blue" "60:q2_{}lSk@[u.vd4J#Nt5-Gift" "30:[l|d0WIh!l5PD%2H}a4R-meteorite" "2:r){3Q*(DRPZDGTek:nkf-Stage"
    "77:F-1qVEa?TL1Lw;jb(OLW-Lightning" "19:+3pv~oKo|2z+5|uT5=7I-Pico walking" "292::zxH|wB2Lg-ws5rLt5~1-Knight"
    "99:s9D}.Arv7^Sl2acMr7#l-Sprite6" "35:h*A.hfE21,Xy)[NvgW#O-Player" "277:1h^(~;4/JN;%XLT\`ANnE-Win" "11:y2aDb=T?hja+5CeG]6Hd-Pipes"
    "43:$\`AoahfC3UvEQ}\$!2k1p-Frog" "14:;]3GkVH_T[iwH\`2P,0q[-Bowl" "80:j6n2QY@l35tvllEFeu-X-Win"
    "48:lc~833H-dl[=n9C.htSn-2884743046_b2e1aafc9f_b" "145:z3Ocq)V=*2ssKNKnHcwI-Orange" "12:x|uP^bqm{]xwITPjY@yB-Ball"
    "124:SdgwE8MJ)vpe@d6JUy\`b-Banner" "9:)Lgb*N(JMi!R-C(-UqF|-Apfel" "34:)X{a/zeNv|(*:hM?IkHX-Bear" "82:3#6@[O6dL]M|VPQy3j;)-String"
    "10:GC-;i%Pl8mbj*Av;=gY\`-Stage")

  # Specify your log file directory here
  log_dir="${EXPERIMENT_RESULTS_DIR}/RQ1-Logs"
  out_file="${PLOT_DIR}/RQ1/WinningStates.txt"

  if [ -f "${out_file}" ]; then
    rm "${out_file}"
  fi

  p_counter=0
  random_counter=0
  neatest_counter=0
  total=25
  for p in "${programs[@]}"; do
    for c in "${configs[@]}"; do
      counter=0
      winning_states=0
      for dir in "${log_dir}"/*"${p}-${c}"*; do
        counter=$((counter + 1))
        if grep -rFq "Covered Statement ${winning_grep[p_counter]}" "${dir}"; then
          winning_states=$((winning_states + 1))

          if [[ "${c}" == "NEAT" ]]; then
            neatest_counter=$((neatest_counter + 1))
          elif [[ "${c}" == "Random" ]]; then
            random_counter=$((random_counter + 1))
          fi

        fi

      done

      echo "${p}-${c}" >>"${out_file}"
      echo "GrepString ${winning_grep[p_counter]}" >>"${out_file}"
      echo "Winning: ${winning_states}" >>"${out_file}"
      echo "Total: ${counter}" >>"${out_file}"
      echo "Winning States for ${p}-${c}: ${winning_states}" >>"${out_file}"
      echo "" >>"${out_file}"

    done
    p_counter=$((p_counter + 1))
  done

  average_random=$((random_counter / total))
  average_neatest=$((neatest_counter / total))
  echo "Average Winning States Random: ${average_random}" >>"${out_file}"
  echo "Average Winning States Neatest: ${average_neatest}" >>"${out_file}"
}

main
