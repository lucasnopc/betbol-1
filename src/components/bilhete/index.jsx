import { format } from "date-fns"
import FixBilhete from "./fixbilhete"
export default function Bilhete({ bilhete, status }) {
  return <>
    <div className='inline-flex flex-col rounded-b-md shadow-lg text-gray-600 bg-yellow-200 p-2'>
      <span>Bilhete {bilhete._id}</span>
      <span>Usuário {bilhete.email}</span>
      <span>Data {format(new Date(bilhete.date), 'yyyy-MM-dd')}</span>
      <span>Apostou R${Number(bilhete.value).toFixed(2)}</span>
      <div>
        {bilhete.bets.map((m, i) => {
          return <FixBilhete m={m} key={i} />
        })}
      </div>
        <span className="font-bold border-t border-yellow-300">{status}</span>
    </div>
  </>
}