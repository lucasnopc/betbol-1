import { format } from "date-fns"
import { useEffect, useState } from "react"
import useStatus from "../../utills/hooks/useStatus"
import FullLoading from "../fullloading"
import FixBilhete from "./fixbilhete"

export default function Bilhete({ bilhete:bi }) {
  const biWithStatus = useStatus(bi)
  const [bilhete, setBilhete] = useState(false)

  useEffect(() => {
    if(biWithStatus){ 
      setBilhete(biWithStatus)}
  }, [biWithStatus])

  if(!bilhete) return <FullLoading message="Buscando bilhete..." />

  return <>
    <div className='flex text-lg flex-col rounded-b-md shadow-lg text-gray-600 bg-yellow-200 p-2'>
      {bilhete.valid == false && <span className="text-red-600">Bilhete inválido! Valide com um de nossos cambistas.</span>}
      <span>Bilhete {bilhete._id}</span>
      {bilhete.email && <span>Usuário {bilhete.email}</span>}
      {bilhete.cliente &&<span>Cliente {bilhete.cliente}</span>}
      <span>Data {format(new Date(bilhete.date), 'yyyy-MM-dd')}</span>
      <span>Apostou R${Number(bilhete.value).toFixed(2)}</span>
      <span>Retorno R${Number(bilhete.potencialReturn).toFixed(2)}</span>
      <div>
        {bilhete.bets.map((m, i) => {
          return <FixBilhete m={m} key={i} />
        })}
      </div>
        <span className="font-bold border-t border-yellow-300">{bilhete.generalStatus}</span>
     
    </div> 
  </>
}