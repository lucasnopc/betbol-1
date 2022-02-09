import { format } from 'date-fns'
import { oddBets } from '../../../utills/oddBets'
import { useState } from 'react'
import ItemListBetHistory from './ItemListBetHistory'
import  Link  from 'next/link'
import Rescue from '../../../pages/user/withdraw/rescue'

export default function ListBetsHistory({ data: history, status }) {
  const [toggle, setToggle] = useState(false)
  const [resgatar, setResgatar] = useState(false)
  const date = format(new Date(history.date), 'dd.MM | HH:mm')
  const cotacao = history.bets.map((b) => Number(b.choice.odd))
  const cotaSoma = cotacao.reduce((antes, atual) => antes + atual)
  return <>
    <div onClick={() => setToggle(!toggle)} className="bg-gray-100 border-b border-gray-200 hover:bg-gray-200 cursor-pointer items-center flex justify-between" key={history._id}>
      <span className="text-gray-600 text-xs mx-1 text-right">{date} </span>
      <span className="text-gray-600 text-xs mx-1 text-right"><b>{history.bets.length} </b></span>
      <div>
        <span className="text-gray-600 text-xs mx-1 text-right p-1 uppercase">{ status ? status : '...' }</span>
      </div>
    </div>
    <div className={`${toggle ? `block` : `hidden`} border border-gray-200`}>
      {history.bets.reverse().map(b => {
        const choiceOdd = oddBets.find(f => {
          return f.id == b.choice.betsChoice
        })
        return <ItemListBetHistory key={b.fix.fixture.id}  choiceOdd={choiceOdd} b={b} />
      })}
      <div className='grid grid-cols-3 bg-gray-300'>
        <div className=' text-center text-xs uppercase text-gray-700 font-semibold'>Valor<div>R$ {Number(history.value).toFixed(2)}</div></div>
        <div className=' text-center text-xs uppercase text-gray-700 font-semibold'>Cota <div>{cotaSoma.toFixed(2)}</div></div>
        <div className=' text-center text-xs uppercase text-gray-700 font-semibold'>Ganhos<div>R$ {Number(Number(history.value) * cotaSoma).toFixed(2)}</div>
        {status == 'Ganhou' && <span className="text-gray-600 text-xs mx-1 text-right p-1 uppercase cursor-pointer" onClick={() => setResgatar(!resgatar)}>Resgatar</span>}
        </div>
      </div>
    </div>
{/* resgate modal */}
    <div className={`${resgatar ? `absolute`:`hidden`} top-0 left-0 w-full h-full p-2 bg-black bg-opacity-10 z-50 overflow-hidden`}>
        <div className='bg-white my-6 mx-10 rounded-md p-3'>
        <buttom onClick={() => setResgatar(false)} className="p-0.5 bg-red-600 hover:bg-red-500 text-white flex items-center justify-center font-bold rounded-full w-4 h-4 text-xs float-right">x</buttom>
          <Rescue id={history._id} />
        </div>
    </div>
  </>
}