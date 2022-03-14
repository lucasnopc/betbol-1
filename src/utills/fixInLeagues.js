import { bestLeagues } from "../components/layouts/home/bestLeagues";

export default function fixInLeagues(live) {
    const ligas = []

    for (let i = 0; i < live.length; i++) {
      let ligaIgual = false;
      for (let j = 0; j < i; j++) {
        if (ligas[j] && live[i].league.id == ligas[j].liga.id) {
          ligas[j].fix.push(live[i])
          ligaIgual = true
          break
        }
      }
      if (!ligaIgual) {
        ligas.push({
          liga: live[i].league,
          fix: [live[i]]
        })
      }
    }
    const primaryLeagues = ligas.filter((l, indice) => {
      for (let i = 0; i < bestLeagues.length; i++) {
          if (bestLeagues[i].id == l.liga.id) {
              ligas.splice(indice, 1);
              return true
          }
      }
      return false
  })
  
    return [...primaryLeagues, ...ligas]
  }