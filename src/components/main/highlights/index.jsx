import Fix from "../Fix"
import SelectOddsBets from "../SelectOddsBets"
import { useEffect, useState } from "react"
import Image from 'next/image'
import get_odd_for_fix from "../../../utills/get_odds_for_fix"
import Translate from "../../../utills/translate"

export default function Highlights({ highlights, title, qtd = 4 }) {
    const [bets, setBets] = useState(1)
    const [leagues, setLeagues] = useState([])
    const [loading, setLoading] = useState(false)
    const [league_indice, setLeague_indice] = useState(0)

    useEffect(() => {
        get_odd_for_fix(setLoading, highlights, leagues, setLeagues, 0, qtd)
    }, [])
    // useEffect(() => console.log(bets), [bets])
    useEffect(() => {
        for (let league of leagues) {
            if (league.league_indice > league_indice) setLeague_indice(league.league_indice + 1)
        }
    }, [leagues])

    if (highlights.length == 0 || leagues.length == 0 && !loading) {
        return <h1 className="font-semibold text-center pt-7 text-lg">0 jogos no momento, volte mais tarde.</h1>
    }
    return <>
        <div className="flex justify-between p-2 border-b border-gray-200">
            <h2 className="page-title p-2 inline-block">{title}</h2>
            <SelectOddsBets setBets={setBets} bets={bets} />
        </div>
        {leagues.length > 0 && bets && leagues.map(l => {
            const values = l.fix[0].odd.bookmakers[0].bets.find(bet => bet.id == bets)?.values
            return <div key={l.liga.id}>
                <div className="text-xs font-semibold bg-primary text-white py-2 border-b grid grid-cols-2">
                    <div className="flex ml-1">
                        {l.liga.flag && <div className="rounded-full overflow-hidden w-4 h-4 bg-black"><img className="w-6 h-6 -mt-1 -ml-1 max-w-none" src={l.liga.flag} alt={l.liga.name} /></div>}
                        <span className="pl-1 font-semibold">
                            {l.liga.country} - {l.liga.name}

                        </span>
                    </div>
                    <div>
                        <div className="text-right h-full divide-green-500 divide-x">
                            {values?.length <= 3 && values?.map(v => <div key={v.value} className="px-2 inline-block text-center">{Translate(v.value)}</div>)}
                            <div className="px-3 text-center inline-block">Mais</div>
                        </div>
                    </div>
                </div>
                <div className="block scrollgreen">
                    {l.fix && l.fix.map((f, indexFix) => {
                        return <Fix key={f.fixture.id} fix={f} bets={bets} isAlive={false} indexFix={indexFix} />
                    })}
                </div>
            </div>
        })}
        <div className="w-full flex items-center justify-center">
            {!loading && <span onClick={() => get_odd_for_fix(setLoading, highlights, leagues, setLeagues, league_indice, qtd)} className="bg-gray-300 hover:bg-gray-200 p-2 cursor-pointer w-full uppercase font-semibold text-center">
                Carregar mais
            </span>}

            {loading && <span className="bg-gray-200 p-2 w-full uppercase font-semibold text-center">
                <Image width="20" height="20" src="/ico.png" className="animate-spin" />
            </span>}
        </div>
    </>
}