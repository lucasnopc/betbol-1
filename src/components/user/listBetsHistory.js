import { format } from 'date-fns'
import Translate from '../../utills/translate'
import { oddBets } from '../../utills/oddBets'
import { useState } from 'react'

export default function ListBetsHistory(props) {
    const [toggle, setToggle] = useState(false)
    const history = props.data
    console.log(history)
    const date = format(new Date(history.date), 'dd.MM.yyyy HH:mm')
    return <><div onClick={() => setToggle(!toggle)} className="font-medium p-1 bg-gray-100 hover:bg-gray-200 m-1 flex" key={history._id}>
        <span className="flex-auto"> {date} </span>
        <span className="font-normal ml-2 flex-auto">Apostou: R$ {history.value}</span>
        <span className="font-normal ml-2 flex-auto">{history.bets.length} Jogos</span>
    </div>
        <div className={`${toggle ? `block` : `hidden`}`}>
            {history.bets.reverse().map(b => {
                const choiceOdd = oddBets.find(f => {
                    return f.id == b.choice.betsChoice
                })
                console.log(choiceOdd)
                return <div className="p-1 grid grid-cols-3 bg-gray-50 border-b border-gray-400">
                    <div className="mr-1 block">
                        <span className="">{b.fix.teams.home.name}</span>
                        <span className="mr-1 fl block">{b.fix.teams.away.name}</span>
                    </div>
                    <div className="mr-1 block">
                    <span className="mr-1 block">{choiceOdd.name}</span>
                    <span className="mr-1 inline-block text-right font-normal">{b.choice.odd}</span>
                    <span className="mr-1 inline-block">{Translate(b.choice.value)}</span>
                    </div>
                    <div>
                        <span className="float-right">Status</span>
                    </div>
                </div>
            })}
        </div>
    </>

}