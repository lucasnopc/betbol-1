import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import useStatus from "../../utills/hooks/useStatus";
import ListBetsHistory from "../user/listBetsHistory";

export default function ItemListTicket({ bi, statusSearch }) {
  const [status, setStatus] = useState('')
  const [bilhete, setBilhete] = useState({})
  const [visible, setVisible] = useState(true)
  const biWithStatus = useStatus(bi)
  
  useEffect(() => {
  setBilhete(biWithStatus)
}, [biWithStatus]) 
  useEffect(() => {
    if (statusSearch == status || statusSearch == 'Todos') {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [statusSearch, status])
  return <>
  {bilhete.bets && bilhete.bets.length > 0 && visible && <ListBetsHistory data={bilhete} />}    
  </>
}