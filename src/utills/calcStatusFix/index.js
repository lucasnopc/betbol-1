export default function calcStatusFix(atualFix, bet) {
  const goals = atualFix.goals
  const score = atualFix.score
  const choice = bet.choice
  const goals_home_2T = score.fulltime.home - score.halftime.home
  const goals_away_2T = score.fulltime.away - score.halftime.away
  const sumGoals = Number(goals.home) + Number(goals.away)
  const sumGoalsFirstTime = Number(score.halftime.home) + Number(score.halftime.away)
  const sumGoalsLastTime = Number(goals_home_2T) + Number(goals_away_2T)
  const nVal = Number(choice.value.substring(choice.value.length - 3, choice.value.length))
  const overOrUnderVal = choice.value.substring(0, choice.value.length - 4)
  const boll_ambas_marcam = goals.home != 0 && goals.away != 0 ? 'Yes' : 'No'
  const boll_ambas_marcam_1T = score.halftime.home != 0 && score.halftime.away != 0 ? 'Yes' : 'No'
  const boll_ambas_marcam_2T = goals_home_2T != 0 && goals_away_2T != 0 ? 'Yes' : 'No'
  const value_moere_x = choice.value.slice(-1)
  let status = false

  let winner = ""
  let winner1T = ""
  let winner2T = ""
  if (goals.home > goals.away) winner = "Home"
  if (goals.home < goals.away) winner = "Away"
  if (goals.home == goals.away) winner = "Draw"

  if (score.halftime.home > score.halftime.away) winner1T = "Home"
  if (score.halftime.home < score.halftime.away) winner1T = "Away"
  if (score.halftime.home == score.halftime.away) winner1T = "Draw"

  if (goals_home_2T > goals_away_2T) winner2T = "Home"
  if (goals_home_2T < goals_away_2T) winner2T = "Away"
  if (goals_home_2T == goals_away_2T) winner2T = "Draw"

  const valueBarSepatare = choice.value.split('/')
  const valueDuploPointSepatare = choice.value.split(':')

  switch (choice.betsChoice) {
    case 1:
      if (choice.value == winner) status = true
      break
    case 2:
      if (choice.value == winner) status = true
      break
    case 3:
      if (choice.value == winner2T) status = true
      break
    case 5:
      switch (overOrUnderVal) {
        case "Over":
          if (sumGoals > nVal) status = true
          break
        case "Under":
          if (sumGoals < nVal) status = true
          break
      }
      break
    case 6:
      switch (overOrUnderVal) {
        case "Over":
          if (sumGoalsFirstTime > nVal) status = true
          break;
        case "Under":
          if (sumGoalsFirstTime < nVal) status = true
          break;
      }
      break
    case 8:
      if (choice.value == boll_ambas_marcam) status = true
      break
    case 10:
      if (goals.home == valueDuploPointSepatare[0] && goals.away == valueDuploPointSepatare[1]) status = true
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
    case 13:
      if(choice.value == winner1T) status = true
      break
    case 16:
      switch (overOrUnderVal) {
        case "Over":
          if (goals.home > nVal) status = true
          break;
        case "Under":
          if (goals.home < nVal) status = true
          break;
      }
      break
    case 17:
      switch (overOrUnderVal) {
        case "Over":
          if (goals.away > nVal) status = true
          break;
        case "Under":
          if (goals.away < nVal) status = true
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
    case 23:
      if (goals.home % 2 == 0) {
        if (choice.value == "Even") status = true
      } else {
        if (choice.value == "Odd") status = true
      }
      break
    case 24:
      if (valueBarSepatare[0] == winner && valueBarSepatare[1] == boll_ambas_marcam) status = true
      break
    case 25:
      const overOrUnderValTwo = valueBarSepatare[1].substring(0, valueBarSepatare[1].length - 4)
      switch (overOrUnderValTwo) {
        case "Over":
          if (sumGoals > nVal && valueBarSepatare[0] == winner) status = true
          break;
        case "Under":
          if (sumGoals < nVal && valueBarSepatare[0] == winner) status = true
          break;
      }
      break
    case 26:
      switch (overOrUnderVal) {
        case "Over":
          if (sumGoalsLastTime > nVal) status = true
          break;
        case "Under":
          if (sumGoalsLastTime < nVal) status = true
          break;
      }
      break
    case 29:
      switch (choice.value) {
        case "Yes":
          if (winner == "Home" && goals.away == 0) status = true
          break
        case "No":
          if (winner == "Home" && goals.away != 0) status = true
          break
      }
      break
    case 30:
      if (score.halftime.home == valueDuploPointSepatare[0] && score.halftime.away == valueDuploPointSepatare[1]) status = true
      break
    case 31:
      if (score.halftime.home == valueDuploPointSepatare[0] && score.halftime.away == valueDuploPointSepatare[1]) status = true
      break
    case 33:
      if (goals_home_2T == valueDuploPointSepatare[0] && goals_away_2T == valueDuploPointSepatare[1]) status = true
      break
    case 34:
      if (choice.value == boll_ambas_marcam_1T) status = true
      break
    case 35:
      if (choice.value == boll_ambas_marcam_2T) status = true
      break
    case 37:
      switch (choice.value) {
        case "Yes":
          if (winner1T == "Home" && winner2T == "Home") status = true
          break
        case "No":
          if (winner1T != "Home" || winner2T != "Home") status = true
          break
      }
      break
    case 38:
      if (choice.value == sumGoals || choice.value.includes('more') && sumGoals >= value_moere_x) status = true
      break
      case 40:
      console.log("more ", choice.value.includes('more'), value_moere_x, goals.home)
      if (choice.value == goals.home || choice.value.includes('more') && goals.home >= value_moere_x) status = true
      break
    case 41:
      if (choice.value == goals.away || choice.value.includes('more') && goals.away >= value_moere_x) status = true
      break
    case 42:
      if (choice.value == sumGoalsLastTime || choice.value.includes('more') && sumGoalsLastTime >= value_moere_x) status = true
      break

    case 43:
      switch (choice.value) {
        case "Yes":
          if (goals.home == 1) status = true
          break
        case "No":
          if (goals.home != 1) status = true
          break
      }
      break
    case 44:
      switch (choice.value) {
        case "Yes":
          if (goals.away == 1) status = true
          break
        case "No":
          if (goals.away != 1) status = true
          break
      }
      break
    case 46:
      if (choice.value == sumGoalsFirstTime || choice.value.includes('more') && sumGoalsFirstTime >= value_moere_x) status = true
      break
    case 53:
      switch (choice.value) {
        case "Yes":
          if (winner1T == "Away" && winner2T == "Away") status = true
          break
        case "No":
          if (winner1T != "Away" || winner2T != "Away") status = true
          break
      }
    break
    case 60:
      if (goals.away % 2 == 0) {
        if (choice.value == "Even") status = true
      } else {
        if (choice.value == "Odd") status = true
      }
    break
    case 62:
      if (goals_home_2T == valueDuploPointSepatare[0] && goals_away_2T == valueDuploPointSepatare[1]) status = true
      break
    case 63:
      if (sumGoalsLastTime % 2 == 0) {
        if (choice.value == "Even") status = true
      } else {
        if (choice.value == "Odd") status = true
      }
      break
  }
  return status;
}