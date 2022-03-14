import { useState } from "react"

export default function calcStatusFix(atualFix, bet) {
  const goals = atualFix.goals
  const score = atualFix.score
  const choice = bet.choice
  const betsChoice = bet.choice.betsChoice;
  const status = false
  let winner;

  switch (betsChoice) {
    case 1:
      if (goals.home > goals.away) winner = "Home"
      if (goals.home < goals.away) winner = "Away"
      if (goals.home == goals.away) winner = "Draw"
      if (bet.choice.value == winner) { status = true } else status = false
      // console.log('case 1', atualFix, bet, status)
      break;
    case 2:
      if (goals.home > goals.away) winner = "Home"
      if (goals.home < goals.away) winner = "Away"
      if (bet.choice.value == winner) { status = true } else status = false
      break;
    case 3:
      const goals_home_2T = score.fulltime.home - score.halftime.home
      const goals_away_2T = score.fulltime.away - score.halftime.away

      if (goals_home_2T > goals_away_2T) winner = "Home"
      if (goals_home_2T < goals_away_2T) winner = "Away"
      if (goals_home_2T == goals_away_2T) winner = "Draw"
      if (bet.choice.value == winner) { status = true } else status = false
      break;
      case 5:
      console.log('case 5', atualFix, bet)

    //     case 3:
    //         const scoreSegoundTimeHome = atualFix.score.fulltime.home - atualFix.score.halftime.home
    //         const scoreSegoundTimeAway = atualFix.score.fulltime.away - atualFix.score.halftime.away
    //         if (scoreSegoundTimeHome > scoreSegoundTimeAway) {
    //             winner = "Home"
    //         } else {
    //             winner = "Away"
    //         }
    //         if (bet.choice.value == winner) {
    //             status = true
    //         } else {
    //             status = false
    //         }
    //         break
    default:
      if (bet.choice.value == winner) {
        status = true;
      } else {
        status = false;
      }
      break;
  }
  return status;
}

