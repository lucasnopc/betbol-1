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