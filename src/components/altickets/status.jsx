import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export default function Status({ticket}) {
  const [ fixAtual, setFixAtual ] = useState()
  useEffect(() => {
      axios.get(`/api/betApi/fixture/${ticket.fix.fixture.id}`).then(res => {
        setFixAtual(res.data.res_fixture.response[0])
      })

  }, [ticket])
  // ticket.bets.map(bet => {
  //     // const fixatual = fixAtual(bet)
  //     // console.log(fixAtual)

  //     // const shortStatus = fixatual.fixture.status.short
  //     // if(shortStatus != 'FT') {
  //     //   return 'aguarde'
  //     // }
  // })
  return <>Ganhou</>
}