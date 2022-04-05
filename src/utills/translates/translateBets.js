export default function translateBets(val, bets) {

  const valueSpacetSepatare = typeof val == 'string' ? val.split(' ') : val
  const valueBarSepatare = typeof val == 'string' ? val.split('/') : val
  const valorMore = (val) => {
    if(typeof val == 'string') {
      if (val.match(/more/)) return val.replace('more', 'mais que')
    }
    return val
  }
  const winner = (val) => {
    switch (val) {
      case "Home":
        return "Casa"
        break
      case "Draw":
        return "Empate"
        break
      case "Away":
        return "Fora"
        break
      case "No goal":
        return "Sem gols"
        break
    }
  }
  const oveUnder = (val) => {
    switch (val) {
      case "Over":
        return "Acima"
        break
      case "Under":
        return "Abaixo"
        break
    }
  }
  const yesNo = (val) => {
    switch (val) {
      case "Yes":
        return "Sim"
        break
      case "No":
        return "Não"
        break
    }
  }
  const oddEven = (val) => {
    switch (val) {
      case "Odd":
        return "Ímpar"
        break
      case "Even":
        return "Par"
        break
    }
  }

  switch (bets) {
    case 1:
      return winner(val)
      break
    case 2:
      return winner(val)
      break
    case 3:
      return winner(val)
      break
    case 5:
      return `${oveUnder(valueSpacetSepatare[0])} ${valueSpacetSepatare[1]}`
      break
    case 6:
      return `${oveUnder(valueSpacetSepatare[0])} ${valueSpacetSepatare[1]}`
      break
    case 8:
      return yesNo(val)
      break
    case 9:
      return `${winner(valueSpacetSepatare[0])} ${valueSpacetSepatare[1]}`
      break
    case 10:
      return valorMore(val)
      break
    case 12:
      return `${winner(valueBarSepatare[0])}/${winner(valueBarSepatare[1])}`
      break
    case 13:
      return winner(val)
      break
    case 14:
      return winner(val)
      break
    case 15:
      return winner(val)
      break
    case 16:
      return `${oveUnder(valueSpacetSepatare[0])} ${valueSpacetSepatare[1]}`
      break
    case 17:
      return `${oveUnder(valueSpacetSepatare[0])} ${valueSpacetSepatare[1]}`
      break
    case 18:
      return `${winner(valueSpacetSepatare[0])} ${valueSpacetSepatare[1]}`
      break
    case 20:
      return `${winner(valueBarSepatare[0])}/${winner(valueBarSepatare[1])}`
      break
    case 21:
      return oddEven(val)
      break
    case 22:
      return oddEven(val)
      break
    case 23:
      return oddEven(val)
      break
    case 24:
      return `${winner(valueBarSepatare[0])}/${yesNo(valueBarSepatare[1])}`
      break
    case 25:
      return `${winner(valueBarSepatare[0])}/${oveUnder(valueBarSepatare[1].split(' ')[0])}`
      break
    case 26:
      return `${oveUnder(valueSpacetSepatare[0])} ${valueSpacetSepatare[1]}`
      break
    case 27:
      return yesNo(val)
      break
    case 28:
      return yesNo(val)
      break
    case 29:
      return yesNo(val)
      break
    case 30:
      return yesNo(val)
      break
    case 31:
      return valorMore(val)
      break
    case 32:
      return winner(val)
      break
    case 33:
      return `${winner(valueBarSepatare[0])}/${winner(valueBarSepatare[1])}`
      break
    case 34:
      return yesNo(val)
      break
    case 35:
      return yesNo(val)
      break
    case 36:
      return yesNo(val)
      break
    case 37:
      return yesNo(val)
      break
    case 38:
      return valorMore(val)
      break
    case 39:
      return yesNo(val)
      break
    case 40:
      return valorMore(val)
      break
    case 41:
      return valorMore(val)
      break
    case 42:
      return valorMore(val)
      break
    case 43:
      return yesNo(val)
      break
    case 44:
      return yesNo(val)
      break
    case 45:
      return `${oveUnder(valueSpacetSepatare[0])} ${valueSpacetSepatare[1]}`
      break
    case 46:
      return valorMore(val)
      break
    case 47:
      if (val == 'Draw') return "Empate"
      if (val == 'Score Draw') return "Pontos Empate"
      if (val.match(/by/)) return valorMore(val).replace('by', 'por')
      break
    case 49:
      return `${oveUnder(valueBarSepatare[0].split(' ')[0])}/${yesNo(valueBarSepatare[1])}`
      break
    case 51:
      return 'Resultado do 1T / Total de gols' // fazer algorítimo
      return `${winner(valueBarSepatare[0])}/${oveUnder(valueBarSepatare[1].split(' ')[0])}`
      break
    case 52:
      return `${winner(valueBarSepatare[0])}/${yesNo(valueBarSepatare[1])}`
      break
    case 53:
      return 'Fora vence os dois tempos'
      break
    case 54:
      return winner(val)
      break
    case 55:
      return `${oveUnder(valueSpacetSepatare[0])} ${valueSpacetSepatare[1]}`
      break
    // case 57:
    //   return 'Escanteios - Casa - Acima/Abaixo' // fazer alorítmo
    // break
    // case 58:
    //   return 'Escanteios - Fora - Acima/Abaixo' // fazer algorítmo
    // break
    case 60:
      return oddEven(val)
      break
    case 62:
      return valorMore(val)
      break
    case 63:
      return oddEven(val)
      break
    case 73:
      return yesNo(val)
      break
    default:
      return null
  }
}