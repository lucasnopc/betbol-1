import { useEffect, useState } from 'react'
import FixDate from './FixDate'
import Odd from './Odd'
import Link from 'next/link'

export default function Fix({ fix, bets }) {
    const [odds, setOdds] = useState({})
    const [nVals, setNVal] = useState(0)

    useEffect(() => {
        let top_betslenth
        for (let book of fix.odd.bookmakers) {
            if (top_betslenth) {
                if (book.bets.length > top_betslenth.bets.length) top_betslenth = book
            } else { top_betslenth = book }
        }
        if (top_betslenth) {
            setOdds(top_betslenth.bets.find((bet) => bet.id == bets))
        }
    }, [bets])

    useEffect(() => {
        if (fix.odd) {
            const newNVals = nVals
            let top_betslenth
            for (let book of fix.odd.bookmakers) {
                if (top_betslenth) {
                    if (book.bets.length > top_betslenth.bets.length) top_betslenth = book
                } else { top_betslenth = book }
            }

            for (let i of top_betslenth.bets) {
                newNVals = newNVals + i.values.length
            }
            setNVal(newNVals)
        }
    }, [])
    const id = fix.fixture.id
    return <>
        <div className={`pl-2 grid grid-cols-12 gap-0 border-b border-gray-200 hover:border-primary-ligth`}>
            <div className="col-start-1 col-span-4 md:col-span-6 text-xs">
                <Link href={`/fix/${id}`} >
                    <a>
                        <div className="flex justify-between"><span className="font-medium text-gray-800 text-sm">{fix.teams.home.name}</span><span className="font-semibold text-primary">{fix.goals.home}</span></div>
                        <div className="flex justify-between"><span className="font-medium text-gray-800 text-sm">{fix.teams.away.name}</span><span className="font-semibold text-primary">{fix.goals.away}</span></div>
                        <span className="block"><FixDate fix={fix} /></span>
                    </a>
                </Link>
            </div>
            <div className="col-start-5 col-span-8 md:col-start-7 md:col-span-6">
                <div className="h-full">
                    <Odd odds={odds} bets={bets} fix={fix} nVals={nVals} squadWidth={16} />
                </div>
            </div>
        </div>
    </>
}