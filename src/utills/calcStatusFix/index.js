export default function calcStatusFix(atualFix, bet) {
  const goals = atualFix.goals
  const score = atualFix.score
  const choice = bet.choice
  const sumGoals = Number(goals.home) + Number(goals.away)
  const sumGoalsFirstTime = Number(score.halftime.home) + Number(score.halftime.away)
  const nVal = Number(choice.value.substring(choice.value.length - 3, choice.value.length))
  const overOrUnderVal = choice.value.substring(0, choice.value.length - 4)
  const goals_home_2T = score.fulltime.home - score.halftime.home
  const goals_away_2T = score.fulltime.away - score.halftime.away
  let status = false

  let winner = ""
  let winner1T = ""
  if (goals.home > goals.away) winner = "Home"
  if (goals.home < goals.away) winner = "Away"
  if (goals.home == goals.away) winner = "Draw"

  if (score.halftime.home > score.halftime.away) winner1T = "Home"
  if (score.halftime.home < score.halftime.away) winner1T = "Away"
  if (score.halftime.home == score.halftime.away) winner1T = "Draw"

  switch (choice.betsChoice) {
    case 1:
      if (choice.value == winner) { status = true } else status = false
      break
    case 2:
      if (goals.home > goals.away) winner = "Home"
      if (goals.home < goals.away) winner = "Away"
      if (choice.value == winner) { status = true } else status = false
      break
    case 3:
      if (goals_home_2T > goals_away_2T) winner = "Home"
      if (goals_home_2T < goals_away_2T) winner = "Away"
      if (goals_home_2T == goals_away_2T) winner = "Draw"
      if (choice.value == winner) { status = true } else status = false
      break
    case 5:
      switch (overOrUnderVal) {
        case "Over":
          if (sumGoals > nVal) { status = true } else { status = false }
          break
        case "Under":
          if (sumGoals < nVal) { status = true } else { status = false }
          break
      }
      break
    case 6:
      switch (overOrUnderVal) {
        case "Over":
          if (sumGoalsFirstTime > nVal) { status = true } else { status = false }
          break;
        case "Under":
          if (sumGoalsFirstTime < nVal) { status = true } else { status = false }
          break;
      }
      break
    case 8:
      switch (choice.value) {
        case "Yes":
          if (goals.home > 0 && goals.away > 0) { status = true } else { status = false }
          break
        case "No":
          if (goals.home == 0 && goals.away == 0) { status = true } else { status = false }
          break
      }
      break
    case 10:
      const valueGoalsHome = choice.value.slice(0, -2)
      const valuesGoalsAway = choice.value.slice(-1)
      if (goals.home == valueGoalsHome && goals.away == valuesGoalsAway) status = true
      break
    case 12:
      switch (choice.value) {
        case "Home/Draw":
          if (winner == "Home" || winner == "Draw") status = true
          break
        case "Home/Away":
          if (winner == "Home" || winner == "Away") status = true
          break
        case "Draw/Away":
          if (winner == "Draw" || winner == "Away") status = true
          break
      }
      break
    case 16:
      switch (overOrUnderVal) {
        case "Over":
          if (goals.home > nVal) { status = true } else { status = false }
          break;
        case "Under":
          if (goals.home < nVal) { status = true } else { status = false }
          break;
      }
      break
    case 17:
      switch (overOrUnderVal) {
        case "Over":
          if (goals.away > nVal) { status = true } else { status = false }
          break;
        case "Under":
          if (goals.away < nVal) { status = true } else { status = false }
          break;
      }
      break
    case 20:
      switch (choice.value) {
        case "Home/Draw":
          if (winner1T == "Home" || winner1T == "Draw") status = true
          break
        case "Home/Away":
          if (winner1T == "Home" || winner1T == "Away") status = true
          break
        case "Draw/Away":
          if (winner1T == "Draw" || winner1T == "Away") status = true
          break
      }
      break
    case 21:
      if (sumGoals % 2 == 0) {
        if (choice.value == "Even") status = true
      } else {
        if (choice.value == "Odd") status = true
      }
      break
    case 22:
      if (sumGoalsFirstTime % 2 == 0) {
        if (choice.value == "Even") status = true
      } else {
        if (choice.value == "Odd") status = true
      }
      break
  }
  return status;
}