import { format } from 'date-fns'
import { oddBets } from '../../../utills/oddBets'
import { useState } from 'react'
import ItemListBetHistory from './ItemListBetHistory'

export default function ListBetsHistory({ data: history, status }) {
  const [toggle, setToggle] = useState(false)
  const date = format(new Date(history.date), 'dd.MM | HH:mm')
  const cotacao = history.bets.map((b) => Number(b.choice.odd))
  const cotaSoma = cotacao.reduce((antes, atual) => antes + atual)
  return <>
    <div onClick={() => setToggle(!toggle)} className="bg-gray-100 border-b border-gray-200 hover:bg-gray-200 cursor-pointer items-center flex justify-between" key={history._id}>
      <span className="text-gray-600 text-xs mx-1 text-right">{date} </span>
      <span className="text-gray-600 text-xs mx-1 text-right"><b>{history.bets.length} </b></span>
      <span className="text-gray-600 text-xs mx-1 text-right p-1 uppercase">{ status ? status : '...' }</span>
      {/* <span className="font-medium text-gray-700 text-sm ml-2 flex-auto">{history.bets.length} Jogos</span> */}
    </div>
    <div className={`${toggle ? `block` : `hidden`} border border-gray-200`}>
      {history.bets.reverse().map(b => {
        const choiceOdd = oddBets.find(f => {
          return f.id == b.choice.betsChoice
        })
        return <ItemListBetHistory key={b.fix.fixture.id}  choiceOdd={choiceOdd} b={b} />
      })}
      <div className='grid grid-cols-3'>
        <div className=' text-center text-xs uppercase text-gray-700 font-semibold'>Valor<div>R$ {Number(history.value).toFixed(2)}</div></div>
        <div className=' text-center text-xs uppercase text-gray-700 font-semibold'>Cota <div>{cotaSoma}</div></div>
        <div className=' text-center text-xs uppercase text-gray-700 font-semibold'>Ganhos<div>R$ {Number(Number(history.value) * cotaSoma).toFixed(2)}</div></div>
      </div>
    </div>
  </>
}