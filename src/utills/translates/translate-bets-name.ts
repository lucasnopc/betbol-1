export default function translateBetsName(id: number):string {
  switch (id) {
    case 1:
      return "Vencedor da partida"
      break
    case 2:
      return "Casa / Fora"
      break
    case 3:
      return "Vencedor 2T"
      break
    case 5:
      return "Gols - Acima/Abaixo"
      break
    case 6:
      return "Gols - Acima/Abaixo - 1T"
      break
    case 8:
      return 'Ambas equipes marcam'
      break
    case 9:
      return 'Handicap Resultado'
      break
    case 10:
      return 'Placar Exato'
      break
    case 12:
      return 'Chace dupla'
      break
    case 13:
      return "Vencedor 1T"
      break
    case 14:
      return "Primeiro time a marcar"
      break
    case 15:
      return "Último time a marcar"
      break
    case 16:
      return 'Casa - Total'
      break
    case 17:
      return 'Fora - Total'
      break
    case 18:
      return 'Handicap Resultado - 1T'
      break
    case 20:
      return 'Dupla Chance - 1T'
      break
    case 21:
      return 'Ímpar/Par'
      break
    case 22:
      return 'Ímpar/Par - 1T'
      break
    case 23:
      return 'Casa - Ímpar/Par'
      break
    case 24:
      return 'Vencedor do encontro / ambas marcam'
      break
    case 25:
      return 'Vencedor do Encontro\/Total de gols'
      break
    case 26:
      return 'Gols - Acima/Abaixo - 2T'
      break
    case 27:
      return 'Casa não leva gol' 
      break
    case 28:
      return 'Fora não leva gol' 
      break
    case 29:
      return 'Casa vence sem levar gol'
      break
    case 30:
      return 'Fora vence sem levar gol'
      break
    case 31:
      return 'Placar Exato - 1T'
      break
    // case 32:
    //   return 'Vence ambos os tempos' // fazer algorítimo
    //   break
    case 33:
      return 'Dupla Chance - 2T'
      break
    case 34:
      return 'Ambas Equipes Marcam - 1T'
      break
    case 35:
      return 'Ambas Equipes Marcam - 2T'
      break
    // case 36:
    //   return 'Vence sem levar gol' // fazer algorítmo
    //   break
    case 37:
      return 'Casa vence ambos os tempos'
      break
    case 38:
      return 'Número exato de gols no jogo'
      break
    case 39:
      return 'vence em qualquer tempo'
    break
    case 40:
      return 'Número exato de gols no jogo - Casa'
      break
    case 41:
      return 'Número exato de gols - Fora'
      break
    case 42:
      return 'Número exato de gols - 2T'
      break
    case 43:
      return 'Marca um gol - Casa'
      break
    case 44:
      return 'Marca um gol - Fora'
      break
    case 45:
      return 'Escanteios - Acima/Abaixo' 
      break
    case 46:
      return 'Número exato de gols- 1T'
      break
    // case 47:
    //   return 'Margem de vitória' // Fazer Algorítimo - ainda não consegui testar
    //   break
    case 49:
      return 'Total de gols / Ambas equipes marcam' // fazer algorítmo
      break
      case 51:
        return 'Resultado do 1T / Total de gols' // fazer algorítimo
      break
      case 52:
        return 'Resultado do 1T / Ambas equipes marcam' // fazer algorítimo
      break
    case 53:
      return 'Fora vence ambos os tempos'
      break
    case 54:
        return 'Vencedor nos primeiros 10 minutos' //fazer algorítimo
      break
    case 55:
      return 'Escanteio 1x2'
      break
    case 60:
      return 'Fora - Ímpar/Par'
      break
    case 62:
      return 'Placar Exato - 2T'
      break
    case 63:
      return 'Ímpar/Par - 2T'
      break
    case 73:
        return "Ambas equipes marcam 1T 2T"
      break
  }
}