import { useEffect, useState } from 'react'
import FixDate from './FixDate'
import Odd from './Odd'

export default function Fix(props) {
    const [odds, setOdds] = useState({})
    const fix = props.fix
    useEffect(()=>{
        setOdds(fix.odd.bookmakers[0].bets.find((bet)=> bet.id == props.bets))
    },[props.bets])
    return <>
        <div className={`pl-2 grid grid-cols-12 gap-0 border-b border-gray-200 hover:border-primary-ligth`}>
            <div className="col-start-1 col-span-6 text-xs">
                <div className="flex justify-between"><span className="mt-1.5 font-medium text-gray-800 text-base">{fix.teams.home.name}</span><span className="font-semibold text-primary">{fix.goals.home}</span></div>
                <div className="flex justify-between"><span className="mt-0.5 font-medium text-gray-800 text-base">{fix.teams.away.name}</span><span className="font-semibold text-primary">{fix.goals.away}</span></div>
                <span className="block mt-1"><FixDate fix={fix} /></span>
            </div>
            <div className="col-start-7 col-span-6">
                <div className="h-full">
                    <Odd odds={odds} bets={props.bets} fix={fix} />
                </div>
            </div>
        </div>
    </>
}