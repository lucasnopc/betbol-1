const retornoPotencialCalc = (note, value, config) => {
  const sumOdds = note.reduce((p, c) => p + Number(c.choice.odd),0)
  const sumOddsMultiMoney = sumOdds * value
  const maxReturnTicket = config.max_return_ticket
  if(sumOdds < value * 500) {
    if(sumOddsMultiMoney < maxReturnTicket) {
      return sumOddsMultiMoney
    }else {
      return maxReturnTicket
    }
  }else {
    return value * 500
  }
}

module.exports = retornoPotencialCalc