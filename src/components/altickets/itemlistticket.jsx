import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import calcStatusFix from "../../utills/calcStatusFix";
import ListBetsHistory from "../user/listBetsHistory";

export default function ItemListTicket({ bi, statusSearch }) {
  const [status, setStatus] = useState('...')
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    if (statusSearch == status || statusSearch == 'Todos') {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [statusSearch, status])
  useEffect(() => {
    const calcStatusTicket = async () => {
      const listStatus = bi.bets.map(bet => {
        axios.get(`/api/betApi/fixture/${bet.fix.fixture.id}`).then(res => {
          const fixture = res.data.res_fixture.response[0]
          const short = fixture.fixture.status.short
          if (short != 'FT' && short != 'PEN' && short != 'AET') {
            console.log('fixture.fixture.status',)
            setStatus('Em Aberto')
            return 'Em Aberto'
          } else {
            const calcStatus = calcStatusFix(fixture, bet)
            if (!calcStatus) {
              setStatus('Perdeu')
              return 'Perdeu'
            }
          }
        })
      })
      return listStatus
    }
    calcStatusTicket().then(res => {
     if(status == '...') {
       setStatus('Ganhou')
     }
    })
  }, [])
  return <>
    {visible && <ListBetsHistory key={bi._id} data={bi} status={status} />}
  </>
}