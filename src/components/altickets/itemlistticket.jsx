import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FaTicketAlt } from "react-icons/fa";
import calcStatusFix from "../../utills/calcStatusFix";
import Bilhete from "../bilhete";

export default function ItemListTicket({ bi, statusSearch }) {
  const [status, setStatus] = useState('venceu')
  const [ticketModal, setTicketModal] = useState(false)
  useEffect(()=> {
    bi.bets.map(bet => {
      axios.get(`/api/betApi/fixture/${bet.fix.fixture.id}`).then(res => {
        const fixture = res.data.res_fixture.response[0]
        if(res.data.res_fixture.response[0].fixture.status.short != 'FT'){
          setStatus('Aguarde')
        }
        const calcStatus = calcStatusFix(fixture, bet)
        if(!calcStatus) setStatus('Perdeu')
      })
    })
}, [])
return <div className={`${status == "Venceu" ? `bg-green-300` : 'bg-red-200'} transition-colors hover:bg-gray-200 flex justify-between p-2 border-b border-gray-100`}>
  <span className="text-xs font-medium text-gray-700">
    R$ {Number(bi.value).toFixed(2)}
  </span>
  <span className="text-xs font-medium text-gray-700">
    {status}
  </span>
  <span className="" onClick={() => setTicketModal(true)}>
    {/* <Link href={`/viewticket?b=${bi._id}`}> */}
      <FaTicketAlt className="cursor-pointer transition-colors text-gray-400 hover:text-blue-800 mr-1" />
    {/* </Link> */}
  </span>
  {ticketModal &&
    <div onClick={() => setTicketModal(false)} className="h-screen w-screen absolute z-50 top-0 left-0 bg-black bg-opacity-90 flex justify-center items-start">
      <div className="bg-white mt-5 w-9/12">
        <Bilhete bilhete={bi} />
      </div>
    </div>
  }
</div>
}