import Fix from "../Fix"
import SelectOddsBets from "../SelectOddsBets"
import { useEffect, useState } from "react"
import Image from 'next/image'
import getOdds from './getodds'

export default function Highlights({ highlights, title, qtd = 4 }) {
    const [bets, setBets] = useState(1)
    const [leagues, setLeagues] = useState([])
    const [loading, setLoading] = useState(false)
    const [league_indice, setLeague_indice] = useState(0)
    useEffect(() => {
        getOdds(setLoading, highlights, leagues, setLeagues, 0 , qtd)
    }, [])
    useEffect(() => {
        for(let league of leagues) {
            if(league.league_indice > league_indice) setLeague_indice(++league.league_indice)
        }

    }, [leagues])
    if (highlights.length == 0) {
        return <h1 className="font-semibold text-center pt-7 text-lg">0 jogos no momento, volte mais tarde.</h1>
    }

    return <>
        <div className="flex justify-between p-2 border-b border-gray-200">
            <h2 className="page-title p-2 inline-block">{title}</h2>

            <SelectOddsBets setBets={setBets} bets={bets} />

        </div>
        {leagues.length > 0 && leagues.map(l => {
            return <div key={l.liga.id}>
                <div className="text-xs font-semibold bg-primary text-white p-2 border-b flex items-center">
                    {l.liga.flag && <Image src={l.liga.flag} alt={l.liga.name} width={20} height={15} />}
                    <span className="pl-1 font-semibold">
                        {l.liga.country} - {l.liga.name}

                    </span>
                </div>
                <div className="block scrollgreen">
                    {l.fix && l.fix.map((f, indexFix) => {
                        return <Fix key={f.fixture.id} fix={f} bets={bets} isAlive={false} indexFix={indexFix} />
                    })}
                </div>
            </div>
        })}
        <div className="w-full flex items-center justify-center">
        {!loading && <span onClick={() => getOdds(setLoading, highlights, leagues, setLeagues, league_indice, qtd)} className="bg-gray-300 hover:bg-gray-200 p-2 cursor-pointer w-full uppercase font-semibold text-center">
                Carregar mais
            </span>}

            {loading && <span className="bg-gray-200 p-2 w-full uppercase font-semibold text-center">
                <Image width="20" height="20" src="/ico.png" className="animate-spin" />
            </span>}
        </div>
    </>
}