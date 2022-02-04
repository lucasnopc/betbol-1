export default function calcStatusFix(atualFix, bet) {
    let winner;
    let status;
  const betsChoice = bet.choice.betsChoice;
  const goalsHome = atualFix.goals.home;
  const goalsAway = atualFix.goals.away;
  if (goalsHome > goalsAway) {
    winner = "Home";
  }
  if (goalsHome < goalsAway) {
    winner = "Away";
  }
  if (goalsHome == goalsAway) {
    winner = "Draw";
  }
  if (winner) {
    switch (betsChoice) {
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
}
