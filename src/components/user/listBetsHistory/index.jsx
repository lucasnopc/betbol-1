import { format } from 'date-fns'
import { oddBets } from '../../../utills/oddBets'
import { useState } from 'react'
import ItemListBetHistory from './ItemListBetHistory'

export default function ListBetsHistory(props) {
  const [toggle, setToggle] = useState(false)
  const history = props.data
  const date = format(new Date(history.date), 'dd.MM | HH:mm')
  return <>
    <div onClick={() => setToggle(!toggle)} className="font-bold p-1 bg-gray-300 hover:bg-gray-200 m-1 cursor-pointer flex" key={history._id}>
      <span className="font-medium text-gray-700 text-sm ml-2 flex-auto"><b>{history._id}</b></span>
      <span className="font-medium text-gray-700 text-sm ml-2 flex-auto"> {date} </span>
      <span className="font-medium text-gray-700 text-sm ml-2 flex-auto">Apostou: R$ {history.value}</span>
      <span className="font-medium text-gray-700 text-sm ml-2 flex-auto">{history.bets.length} Jogos</span>
    </div>
    <div className={`${toggle ? `block` : `hidden`}`}>
      {history.bets.reverse().map(b => {
        const choiceOdd = oddBets.find(f => {
          return f.id == b.choice.betsChoice
        })
        return <ItemListBetHistory key={b.fix.fixture.id}  choiceOdd={choiceOdd} b={b} />
      })}
    </div>
  </>
}