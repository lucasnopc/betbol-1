import calcStatusFix from './index'
let atualFixMock = {
  "goals": {
      "home": 0,
      "away": 0
  },
  "score": {
      "halftime": {
          "home": 0,
          "away": 0
      },
      "fulltime": {
          "home": 0,
          "away": 0
      },
      "extratime": {
          "home": null,
          "away": null
      },
      "penalty": {
          "home": null,
          "away": null
      }
  }
}
let betMock = {
  "choice": {
      "value": "Away",
      "odd": "4.10",
      "betsChoice": 1
  }
}
test('Vencedor da partida é home', ()=> {
  betMock.choice.betsChoice = 1
  betMock.choice.value = "Home"
  atualFixMock.goals.home = "2"
  atualFixMock.goals.away = "1"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test('Vencedor da partida é Away', ()=> {
  betMock.choice.betsChoice = 1
  betMock.choice.value = "Away"
  atualFixMock.goals.home = "0"
  atualFixMock.goals.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test('Partida empate', ()=> {
  betMock.choice.betsChoice = 1
  betMock.choice.value = "Draw"
  atualFixMock.goals.home = "2"
  atualFixMock.goals.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test('Home vence', ()=> {
  betMock.choice.betsChoice = 2
  betMock.choice.value = "Home"
  atualFixMock.goals.home = "2"
  atualFixMock.goals.away = "0"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test('Away vence', ()=> {
  betMock.choice.betsChoice = 2
  betMock.choice.value = "Away"
  atualFixMock.goals.home = "0"
  atualFixMock.goals.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test('2T empate', ()=> {
  betMock.choice.betsChoice = 3
  betMock.choice.value = "Draw"
  atualFixMock.score.halftime.home = "2"
  atualFixMock.score.halftime.away = "0"
  atualFixMock.score.fulltime.home = "4"
  atualFixMock.score.fulltime.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test('2T home vence', ()=> {
  betMock.choice.betsChoice = 3
  betMock.choice.value = "Home"
  atualFixMock.score.halftime.home = "0"
  atualFixMock.score.halftime.away = "4"
  atualFixMock.score.fulltime.home = "3"
  atualFixMock.score.fulltime.away = "6"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test('2T away vence', ()=> {
  betMock.choice.betsChoice = 3
  betMock.choice.value = "Away"
  atualFixMock.score.halftime.home = "2"
  atualFixMock.score.halftime.away = "1"
  atualFixMock.score.fulltime.home = "3"
  atualFixMock.score.fulltime.away = "3"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Under 3.5 vence", ()=> {
  betMock.choice.betsChoice = 5
  betMock.choice.value = "Under 3.5"
  atualFixMock.goals.home = "0"
  atualFixMock.goals.away = "3"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Over 2.5 vence", ()=> {
  betMock.choice.betsChoice = 5
  betMock.choice.value = "Over 2.5"
  atualFixMock.goals.home = "2"
  atualFixMock.goals.away = "1"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Over 2.5 no 1T vence", ()=> {
  betMock.choice.betsChoice = 6
  betMock.choice.value = "Over 2.5"
  atualFixMock.score.halftime.home = "2"
  atualFixMock.score.halftime.away = "1"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Under 3.5 1T vence", ()=> {
  betMock.choice.betsChoice = 6
  betMock.choice.value = "Under 3.5"
  atualFixMock.score.halftime.home = "0"
  atualFixMock.score.halftime.away = "3"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Ambas equipes marcam vence", ()=> {
  betMock.choice.betsChoice = 8
  betMock.choice.value = "Yes"
  atualFixMock.goals.home = "3"
  atualFixMock.goals.away = "3"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Ambas equipes não marcam", ()=> {
  betMock.choice.betsChoice = 8
  betMock.choice.value = "No"
  atualFixMock.goals.home = "0"
  atualFixMock.goals.away = "0"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("handcamp test", ()=> {
  betMock.choice.betsChoice = 9
  betMock.choice.value = "Home -1"
  atualFixMock.goals.home = "3"
  atualFixMock.goals.away = "1"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("handcamp test", ()=> {
  betMock.choice.betsChoice = 9
  betMock.choice.value = "Away +1"
  atualFixMock.goals.home = "3"
  atualFixMock.goals.away = "3"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Pontos Exatos", ()=> {
  betMock.choice.betsChoice = 10
  betMock.choice.value = "4:2"
  atualFixMock.goals.home = "4"
  atualFixMock.goals.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Dupla chance Home/Draw", ()=> {
  betMock.choice.betsChoice = 12
  betMock.choice.value = "Home/Draw"
  atualFixMock.goals.home = "4"
  atualFixMock.goals.away = "4"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Dupla chance Home/Away", ()=> {
  betMock.choice.betsChoice = 12
  betMock.choice.value = "Home/Away"
  atualFixMock.goals.home = "4"
  atualFixMock.goals.away = "5"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Dupla chance Draw/Away", ()=> {
  betMock.choice.betsChoice = 12
  betMock.choice.value = "Draw/Away"
  atualFixMock.goals.home = "5"
  atualFixMock.goals.away = "5"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Vencedor do primeiro tempo - Draw", ()=> {
  betMock.choice.betsChoice = 13
  betMock.choice.value = "Draw"
  atualFixMock.score.halftime.home = "2"
  atualFixMock.score.halftime.away = "2"
  atualFixMock.score.fulltime.home = "4"
  atualFixMock.score.fulltime.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Vencedor do primeiro tempo - Home", ()=> {
  betMock.choice.betsChoice = 13
  betMock.choice.value = "Home"
  atualFixMock.score.halftime.home = "3"
  atualFixMock.score.halftime.away = "2"
  atualFixMock.score.fulltime.home = "4"
  atualFixMock.score.fulltime.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Primeiro time a marcar", () => {
  betMock.choice.betsChoice = 14
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Casa total Over 3.5", ()=> {
  betMock.choice.betsChoice = 16
  betMock.choice.value = "Over 3.5"
  atualFixMock.goals.home = "5"
  atualFixMock.goals.away = "5"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Casa total Under 1.5", ()=> {
  betMock.choice.betsChoice = 16
  betMock.choice.value = "Under 1.5"
  atualFixMock.goals.home = "1"
  atualFixMock.goals.away = "5"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Away total Over 3.5", ()=> {
  betMock.choice.betsChoice = 17
  betMock.choice.value = "Over 3.5"
  atualFixMock.goals.home = "5"
  atualFixMock.goals.away = "4"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Away total Under 1.5", ()=> {
  betMock.choice.betsChoice = 17
  betMock.choice.value = "Under 1.5"
  atualFixMock.goals.home = "1"
  atualFixMock.goals.away = "1"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("handcamp test", ()=> {
  betMock.choice.betsChoice = 18
  betMock.choice.value = "Home -1"
  atualFixMock.score.halftime.home = "3"
  atualFixMock.score.halftime.away = "1"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("handcamp test", ()=> {
  betMock.choice.betsChoice = 18
  betMock.choice.value = "Away +1"
  atualFixMock.score.halftime.home = "3"
  atualFixMock.score.halftime.away = "3"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Dupla chance 1T Home/Draw", ()=> {
  betMock.choice.betsChoice = 20
  betMock.choice.value = "Home/Draw"
  atualFixMock.score.halftime.home = "4"
  atualFixMock.score.halftime.away = "4"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Dupla chance 1T Home/Away", ()=> {
  betMock.choice.betsChoice = 20
  betMock.choice.value = "Home/Away"
  atualFixMock.score.halftime.home = "4"
  atualFixMock.score.halftime.away = "5"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Dupla chance 1T Draw/Away", ()=> {
  betMock.choice.betsChoice = 20
  betMock.choice.value = "Draw/Away"
  atualFixMock.score.halftime.home = "5"
  atualFixMock.score.halftime.away = "5"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("impar ou par / Impar vence", ()=> {
  betMock.choice.betsChoice = 21
  betMock.choice.value = "Odd"
  atualFixMock.goals.home = "1"
  atualFixMock.goals.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("impar ou par / Par vence", ()=> {
  betMock.choice.betsChoice = 21
  betMock.choice.value = "Even"
  atualFixMock.goals.home = "2"
  atualFixMock.goals.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("impar ou par 1T / Impar vence", ()=> {
  betMock.choice.betsChoice = 22
  betMock.choice.value = "Odd"
  atualFixMock.score.halftime.home = "1"
  atualFixMock.score.halftime.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("impar ou par 1T / Par vence", ()=> {
  betMock.choice.betsChoice = 22
  betMock.choice.value = "Even"
  atualFixMock.score.halftime.home = "2"
  atualFixMock.score.halftime.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("impar ou par home / Par vence", ()=> {
  betMock.choice.betsChoice = 23
  betMock.choice.value = "Even"
  atualFixMock.goals.home = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("impar ou par home / Ímpar vence", ()=> {
  betMock.choice.betsChoice = 23
  betMock.choice.value = "Odd"
  atualFixMock.goals.home = "3"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Vencedor do encontro / ambas marcam Away/Yes", ()=> {
  betMock.choice.betsChoice = 24
  betMock.choice.value = "Away/Yes"
  atualFixMock.goals.home = "1"
  atualFixMock.goals.away = "3"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Vencedor do encontro / ambas marcam Home/No", ()=> {
  betMock.choice.betsChoice = 24
  betMock.choice.value = "Home/No"
  atualFixMock.goals.home = "2"
  atualFixMock.goals.away = "0"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Vencedor do encontro / total de gols Draw/Over 3.5", ()=> {
  betMock.choice.betsChoice = 25
  betMock.choice.value = "Draw/Over 3.5"
  atualFixMock.goals.home = "2"
  atualFixMock.goals.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Over 2.5 no 2T vence", ()=> {
  betMock.choice.betsChoice = 26
  betMock.choice.value = "Over 2.5"
  atualFixMock.score.halftime.home = "2"
  atualFixMock.score.halftime.away = "1"
  atualFixMock.score.fulltime.home = "4"
  atualFixMock.score.fulltime.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Under 2.5 no 2T vence", ()=> {
  betMock.choice.betsChoice = 26
  betMock.choice.value = "Under 2.5"
  atualFixMock.score.halftime.home = "2"
  atualFixMock.score.halftime.away = "1"
  atualFixMock.score.fulltime.home = "2"
  atualFixMock.score.fulltime.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("casa vence sem levar gol YES", () => {
  betMock.choice.betsChoice = 29
  betMock.choice.value = "Yes"
  atualFixMock.goals.home = "3"
  atualFixMock.goals.away = "0"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("casa vence sem levar gol No", () => {
  betMock.choice.betsChoice = 29
  betMock.choice.value = "No"
  atualFixMock.goals.home = "3"
  atualFixMock.goals.away = "1"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Placar Exato 1T 3:1", () => {
  betMock.choice.betsChoice = 30
  betMock.choice.value = "3:1"
  atualFixMock.score.halftime.home = "3"
  atualFixMock.score.halftime.away = "1"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Placar Exato 1T 4:2", () => {
  betMock.choice.betsChoice = 30
  betMock.choice.value = "4:2"
  atualFixMock.score.halftime.home = "4"
  atualFixMock.score.halftime.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Pontos Exatos 1T", ()=> {
  betMock.choice.betsChoice = 31
  betMock.choice.value = "4:2"
  atualFixMock.score.halftime.home = "4"
  atualFixMock.score.halftime.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Pontos Exatos 2T", ()=> {
  betMock.choice.betsChoice = 33
  betMock.choice.value = "2:2"
  atualFixMock.score.halftime.home = "2"
  atualFixMock.score.halftime.away = "2"
  atualFixMock.score.fulltime.home = "4"
  atualFixMock.score.fulltime.away = "4"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Pontos Exatos 2T", ()=> {
  betMock.choice.betsChoice = 33
  betMock.choice.value = "4:4"
  atualFixMock.score.halftime.home = "0"
  atualFixMock.score.halftime.away = "0"
  atualFixMock.score.fulltime.home = "4"
  atualFixMock.score.fulltime.away = "4"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Ambas equipes marcam vence 1T", ()=> {
  betMock.choice.betsChoice = 34
  betMock.choice.value = "Yes"
  atualFixMock.score.halftime.home = "4"
  atualFixMock.score.halftime.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Ambas equipes não marcam 1T", ()=> {
  betMock.choice.betsChoice = 34
  betMock.choice.value = "No"
  atualFixMock.score.halftime.home = "0"
  atualFixMock.score.halftime.away = "0"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Ambas equipes marcam vence 2T", ()=> {
  betMock.choice.betsChoice = 35
  betMock.choice.value = "Yes"
  atualFixMock.score.halftime.home = "0"
  atualFixMock.score.halftime.away = "0"
  atualFixMock.score.fulltime.home = "4"
  atualFixMock.score.fulltime.away = "4"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Ambas equipes não marcam 2T", ()=> {
  betMock.choice.betsChoice = 35
  betMock.choice.value = "No"
  atualFixMock.score.halftime.home = "0"
  atualFixMock.score.halftime.away = "0"
  atualFixMock.score.fulltime.home = "0"
  atualFixMock.score.fulltime.away = "0"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Casa vence os dois tepos YES", ()=> {
  betMock.choice.betsChoice = 37
  betMock.choice.value = "Yes"
  atualFixMock.score.halftime.home = "1"
  atualFixMock.score.halftime.away = "0"
  atualFixMock.score.fulltime.home = "3"
  atualFixMock.score.fulltime.away = "1"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Casa vence os dois tepos NO", ()=> {
  betMock.choice.betsChoice = 37
  betMock.choice.value = "No"
  atualFixMock.score.halftime.home = "1"
  atualFixMock.score.halftime.away = "0"
  atualFixMock.score.fulltime.home = "1"
  atualFixMock.score.fulltime.away = "0"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Numero exato de gols", ()=> {
  betMock.choice.betsChoice = 38
  betMock.choice.value = "3"
  atualFixMock.goals.home = "2"
  atualFixMock.goals.away = "1"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Numero exato de gols maior que 2", ()=> {
  betMock.choice.betsChoice = 38
  betMock.choice.value = "more 5"
  atualFixMock.goals.home = "2"
  atualFixMock.goals.away = "5"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Numero exato de gols - casa", ()=> {
  betMock.choice.betsChoice = 40
  betMock.choice.value = "3"
  atualFixMock.goals.home = "3"
  atualFixMock.goals.away = "1"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Numero exato de gols - casa maior que 5", ()=> {
  betMock.choice.betsChoice = 40
  betMock.choice.value = "more 5"
  atualFixMock.goals.home = "6"
  atualFixMock.goals.away = "4"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Numero exato de gols - Fora", ()=> {
  betMock.choice.betsChoice = 41
  betMock.choice.value = "3"
  atualFixMock.goals.home = "3"
  atualFixMock.goals.away = "3"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Numero exato de gols - Fora - maior que 5", ()=> {
  betMock.choice.betsChoice = 41
  betMock.choice.value = "more 5"
  atualFixMock.goals.home = "3"
  atualFixMock.goals.away = "6"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Numero exato de gols - Último Tempo", ()=> {
  betMock.choice.betsChoice = 42
  betMock.choice.value = "3"
  atualFixMock.score.halftime.home = "1"
  atualFixMock.score.halftime.away = "0"
  atualFixMock.score.fulltime.home = "2"
  atualFixMock.score.fulltime.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Numero exato de gols - Último Tempo. maior que cinco", ()=> {
  betMock.choice.betsChoice = 42
  betMock.choice.value = "more 5"
  atualFixMock.score.halftime.home = "1"
  atualFixMock.score.halftime.away = "0"
  atualFixMock.score.fulltime.home = "2"
  atualFixMock.score.fulltime.away = "7"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Home marca um gol YES", ()=> {
  betMock.choice.betsChoice = 43
  betMock.choice.value = "Yes"
  atualFixMock.goals.home = "1"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Home marca um gol NO", ()=> {
  betMock.choice.betsChoice = 43
  betMock.choice.value = "No"
  atualFixMock.goals.home = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Home marca um gol YES", ()=> {
  betMock.choice.betsChoice = 44
  betMock.choice.value = "Yes"
  atualFixMock.goals.away = "1"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Home marca um gol NO", ()=> {
  betMock.choice.betsChoice = 44
  betMock.choice.value = "No"
  atualFixMock.goals.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Fora vence os dois tepos YES", ()=> {
  betMock.choice.betsChoice = 53
  betMock.choice.value = "Yes"
  atualFixMock.score.halftime.home = "0"
  atualFixMock.score.halftime.away = "1"
  atualFixMock.score.fulltime.home = "1"
  atualFixMock.score.fulltime.away = "3"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Fora vence os dois tepos NO", ()=> {
  betMock.choice.betsChoice = 53
  betMock.choice.value = "No"
  atualFixMock.score.halftime.home = "0"
  atualFixMock.score.halftime.away = "1"
  atualFixMock.score.fulltime.home = "0"
  atualFixMock.score.fulltime.away = "1"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Fora - impar ou par", ()=> {
  betMock.choice.betsChoice = 60
  betMock.choice.value = "Odd"
  atualFixMock.goals.home = "2"
  atualFixMock.goals.away = "3"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("Pontos Exatos 2T", ()=> {
  betMock.choice.betsChoice = 62
  betMock.choice.value = "2:2"
  atualFixMock.score.halftime.home = "0"
  atualFixMock.score.halftime.away = "0"
  atualFixMock.score.fulltime.home = "2"
  atualFixMock.score.fulltime.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("impar ou par / Impar vence 2T", ()=> {
  betMock.choice.betsChoice = 63
  betMock.choice.value = "Odd"
  atualFixMock.score.halftime.home = "0"
  atualFixMock.score.halftime.away = "0"
  atualFixMock.score.fulltime.home = "2"
  atualFixMock.score.fulltime.away = "3"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})
test("impar ou par / Par vence 2T", ()=> {
  betMock.choice.betsChoice = 63
  betMock.choice.value = "Even"
  atualFixMock.score.halftime.home = "0"
  atualFixMock.score.halftime.away = "0"
  atualFixMock.score.fulltime.home = "2"
  atualFixMock.score.fulltime.away = "2"
  expect(calcStatusFix(atualFixMock, betMock)).toBe(true)
})