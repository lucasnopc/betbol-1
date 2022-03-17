import { format } from "date-fns"
import { useState } from "react"
import Bilhete from "../bilhete"

export default function TicketItem ({ f }) {
  const [toggleTicket, setToggleTicket] = useState(false)
  const date = format(new Date(f?.date), "dd/MM | mm:dd")
  return <div key={f._id} className="w-full p-1 text-xs flex justify-between bg-gray-50 mx-1">
      <span onClick={() => { setToggleTicket(true) }} className="hover:text-primary cursor-pointer"><span className="font-semibold">bilhete:</span> {f._id}</span><br />
      <div>{date}</div>
      <div>R$ {Number(f.value).toFixed(2)}</div>
      <div>R$ {Number(f.potencialReturn).toFixed(2)}</div>
      {f && toggleTicket && <div onClick={() => { setToggleTicket(false) }} className="bg-black bg-opacity-60 absolute flex items-center justify-center top-0 left-0 w-full h-full">
          <Bilhete bilhete={f} />
      </div>}
  </div>
}