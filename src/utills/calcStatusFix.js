export default function calcStatusFix (score, choiceOdd) {
  let choiceName
  if(score.fulltime.home > score.fulltime.away) {
    choiceName = "Home"
  }else {
    if(score.fulltime.home == score.fulltime.away) {
      choiceName = "Empate"
    }else {
      choiceName = "Draw"
    }
  }
  if(choiceOdd.id == 1) {
    return true
  }
  return false
}