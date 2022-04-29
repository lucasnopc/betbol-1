import axios from "axios";
import { useEffect, useState } from "react";
import calcStatusFix from "../calcStatusFix";

export default function useStatus(bi) {
  const [state, setState] = useState(false)
  const bets = bi?.bets
  useEffect(() => {
    const getFixture = async (bet) => {
      const res = await axios.get(`/api/betApi/fixture/${bet.fix.fixture.id}`)
      const fixture = res.data.res_fixture.response[0]
      return fixture
    }
    const asyncFix = async () => {
      const betsWithStatus = await Promise.all(bets.map(async bet => {
        const fixture = await getFixture(bet)
        const short = fixture.fixture.status.short
        if (short != 'FT' && short != 'PEN' && short != 'AET' && short == 'NS') {
          bet.status = 'Resultado indisponível'
        } else {
          const statusFixString = calcStatusFix(fixture, bet) ? `Ganhou` : `Perdeu` 
          bet.status = statusFixString
        }
        return bet
      }))
      const newBi = {...bi}
      const percas = 0
      const aoVivo = false
      for(const el of betsWithStatus) {
        if(el.status == "Perdeu") percas++
        if(el.status == "Aguarde") aoVivo = true
        if(el.status == "Resultado indisponível") aoVivo = true
      }
      if(!aoVivo) {
        if(percas > 0) {newBi.generalStatus = "Perdeu"}
        if(percas == 0) {newBi.generalStatus = "Ganhou"}
      }else {
        newBi.generalStatus = "Aguarde"
      }

      newBi.bets = betsWithStatus
      setState(newBi)
    }
    asyncFix()

  }, [bets])
  return state
}