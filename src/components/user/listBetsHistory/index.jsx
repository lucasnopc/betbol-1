import { format } from 'date-fns'
import { oddBets } from '../../../utills/oddBets'
import { useState } from 'react'
import ItemListBetHistory from './ItemListBetHistory'
import Rescue from '../../../pages/user/withdraw/rescue'

export default function ListBetsHistory({ data: history, status }) {
  const [toggle, setToggle] = useState(false)
  const [resgatar, setResgatar] = useState(false)
  const date = format(new Date(history.date), 'dd.MM | HH:mm')
  const cotacao = history.bets.map((b) => Number(b.choice.odd))
  const cotaSoma = cotacao.reduce((antes, atual) => antes + atual)

  return <>
    <div onClick={() => setToggle(!toggle)} className="p-1 bg-gray-200 border-b border-gray-300 hover:bg-gray-200 cursor-pointer items-center flex justify-between" key={history._id}>
      <div>
        <span className="text-gray-600 text-xs mx-1 text-right">{history._id}</span>
        <span className="text-gray-600 text-xs mx-1 text-right">{date}</span>
        <span className="text-gray-600 text-xs mx-1 text-right">
          {history.bets.map(bet => {
            switch (bet.status) {
              case "Ao vivo":
                return <div key={bet.fix.fixture.id} className='w-3 rounded-full h-3 mx-1 bg-blue-600 inline-block'></div>
              case "Perdeu":
                return <div key={bet.fix.fixture.id} className='w-3 rounded-full h-3 mx-1 bg-red-600 inline-block'></div>
              case "Ganhou":
                return <div key={bet.fix.fixture.id} className='w-3 rounded-full h-3 mx-1 bg-green-600 inline-block'></div>

            }
          })}
        </span>
      </div>
      <div>
        {status == 'Ganhou' && !history.status && <span className="text-primary hover:text-primary-ligth font-semibold text-xs mx-1 text-right p-1 uppercase cursor-pointer" onClick={() => setResgatar(!resgatar)}>Resgatar</span>}
        {status == 'Ganhou' && history?.status?.state == "request" && <span className="text-gray-600 font-normal text-xs mx-1 text-right p-1 uppercase cursor-pointer">resgate solicitado.</span>}
        {status == 'Ganhou' && history?.status?.state == "success" && <span className="text-gray-600 font-normal text-xs mx-1 text-right p-1 uppercase cursor-pointer">resgate Realizado</span>}
        <span className="text-gray-600 text-xs mx-1 text-right p-1 font-base">{history.generalStatus}</span>
      </div>
    </div>

    <div className={` border border-gray-200 bg-gray-50`}>
      {toggle && history.bets.map(b => {
        const choiceOdd = oddBets.find(f => {
          return f.id == b.choice.betsChoice
        })
        return  <div className='relative' key={b.fix.fixture.id}>
                  <ItemListBetHistory toggle={toggle} choiceOdd={choiceOdd} b={b} />
                </div>
      })}
      <div className={`${toggle ? `block` : `hidden`} grid grid-cols-3 bg-gray-200`}>
        <div className=' text-center text-xs uppercase text-gray-700 font-semibold'>Valor<div>R$ {Number(history.value).toFixed(2)}</div></div>
        <div className=' text-center text-xs uppercase text-gray-700 font-semibold'>Cota <div>{cotaSoma.toFixed(2)}</div></div>
        <div className=' text-center text-xs uppercase text-gray-700 font-semibold'>Ganhos<div>R$ {Number(Number(history.value) * cotaSoma).toFixed(2)}</div>
        </div>
      </div>
    </div>

    <div className={`${resgatar ? `absolute` : `hidden`} top-0 left-0 w-full h-full p-2 bg-black bg-opacity-10 z-50 overflow-hidden`}>
      <div className='bg-white my-6 mx-10 rounded-md p-3'>
        <span onClick={() => setResgatar(false)} className="p-0.5 bg-red-600 hover:bg-red-500 text-white flex items-center justify-center font-bold rounded-full w-4 h-4 text-xs float-right cursor-pointer">x</span>
        <Rescue id={history._id} value={history.value} />
      </div>
    </div>
  </>
}