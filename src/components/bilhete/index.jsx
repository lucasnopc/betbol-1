import { format } from "date-fns"
import FixBilhete from "./fixbilhete"
export default function Bilhete({ bilhete }) {
  return <>
    <div className='inline-flex flex-col mt-2 text-gray-600 bg-yellow-200 p-2'>
      <span>Bilhete {bilhete.result._id}</span>
      <span>Usuário {bilhete.result.email}</span>
      <span>Data {format(new Date(bilhete.result.date), 'yyyy-MM-dd')}</span>
      <span>Apostou R${Number(bilhete.result.value).toFixed(2)}</span>
      <div>
        {bilhete.result.bets.map((m, i) => {
         return <FixBilhete m={m} key={i} />
        })}
      </div>
    </div>
  </>
}