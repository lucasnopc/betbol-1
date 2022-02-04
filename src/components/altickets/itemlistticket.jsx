import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import calcStatusFix from "../../utills/calcStatusFix";
import ListBetsHistory from "../user/listBetsHistory";

export default function ItemListTicket({ bi, statusSearch }) {
  const [status, setStatus] = useState('...')
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    if(statusSearch == status || statusSearch == 'Todos') {
      setVisible(true)
    }else {
      setVisible(false)
    }
  } ,[statusSearch, status])
  useEffect(()=> {
    bi.bets.map(bet => {
      axios.get(`/api/betApi/fixture/${bet.fix.fixture.id}`).then(res => {
        const fixture = res.data.res_fixture.response[0]
        if(fixture.fixture.status.short != 'FT'){
          setStatus('Em Aberto')
          return
        }else {
          const calcStatus = calcStatusFix(fixture, bet)
          if(!calcStatus) setStatus('Perdeu')
          return
        }
      })
          setStatus('Ganhou')
    })
}, [])
return <>
  {visible && <ListBetsHistory key={bi._id} data={bi} status={status}  />}
  </>
}