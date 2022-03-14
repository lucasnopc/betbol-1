import fixInLeagues from "../../../utills/fixInLeagues"
import axios from "axios"

export default async function getOdd(setLoading, highlights, leagues_secound, setLeagues, init_league_indice = 0) {
  setLoading(true)
  const leagues = fixInLeagues(highlights)
  const newLeagues = [...leagues_secound]
  
  for (let league_indice = init_league_indice; league_indice < leagues.length; league_indice++) {
    for(let fix_indice of leagues[league_indice].fix) {
      if(newLeagues.length < (4 + leagues_secound.length)) {
        const odds = await axios.get(`/api/betApi/odds/${fix_indice.fixture.id}`)
        if(odds.data.odd.length != 0) {
          fix_indice.odd = odds.data.odd[0]
          let league_exists = false
          for(let newLeagues_indice in newLeagues) {
            if(newLeagues[newLeagues_indice].liga.id == leagues[league_indice].liga.id) {
              if(newLeagues[newLeagues_indice].liga) league_exists = true              
              if(newLeagues[newLeagues_indice].fix.length < 3) {
                newLeagues[newLeagues_indice].fix.push(fix_indice)
              }
            }
          }
          if(!league_exists) {
            newLeagues.push({
              league_indice: league_indice,
              liga: leagues[league_indice].liga,
              fix: [fix_indice]
            })
          }
          setLeagues([...newLeagues])
        }
      }
    }
  }
  setLoading(false)
}