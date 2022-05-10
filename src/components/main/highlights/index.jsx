import Fix from "../Fix"
import SelectOddsBets from "../SelectOddsBets"
import { useEffect, useState } from "react"
import Image from 'next/image'
import get_odd_for_fix from "../../../utills/get_odds_for_fix"
import Translate from "../../../utills/translate"
import { BiWorld } from 'react-icons/bi'
import resumeLeagueName from "../../../utills/resumeLeagueName"

export default function Highlights({ highlights, title, qtd = 4 }) {
    const [leagues, setLeagues] = useState([])
    const [ state, setState ] = useState({
        bets:1,
        loading: false,
        league_indice:0
    })
    const setLeague_indice = (leagueIndex) => setState({...state, league_indice: leagueIndex})
    const setBets = (betNumber) => setState({...state, bets: betNumber})
    const setLoading = (loading) => setState({...state, loading: loading})
    
    useEffect(() => {
        get_odd_for_fix(setLoading, highlights, leagues, setLeagues, 0, qtd)
    }, [])
    useEffect(() => {
        for (let league of leagues) {
            if (league.league_indice > state.league_indice) setLeague_indice(league.league_indice + 1)
        }
    }, [leagues])

    if (highlights.length == 0 || leagues.length == 0 && !state.loading) {
        return <h1 className="font-semibold text-center pt-7 text-lg">0 jogos no momento, volte mais tarde.</h1>
    }
    return <>
        <div className="flex justify-between p-2 border-b border-gray-200">
            <h2 className="page-title p-2 inline-block">{title}</h2>
            <SelectOddsBets setBets={setBets} bets={state.bets} />
        </div>
        {leagues.length > 0 && state.bets && leagues.map(l => {
            const values = l.fix[0].odd.bookmakers[0].bets.find(bet => bet.id == state.bets)?.values
            return <div key={l.liga.id}>
                <div className="text-lg font-semibold bg-gradient-to-tl from-primary to-primary-dark text-white py-1 border-b flex justify-between">
                    <div className="flex w-5/12 ml-1 items-center">
                        <div id="bandeira"> {l.liga.flag && <div className="rounded-full overflow-hidden w-4 h-4 bg-black"><img className="w-6 h-6 -mt-1 -ml-1 max-w-none" src={l.liga.flag} alt={l.liga.name} /></div>}
                            {!l.liga.flag && <BiWorld className="text-lg" />}</div>
                      <span className="pl-1 font-semibold whitespace-nowrap">
                            {resumeLeagueName(l.liga.name).slice(0, 12)}
                        </span>
                    </div>
                    <div className="grow w-full md:max-w-sm">
                        <div className="text-right h-full divide-primary divide-x">
                            {values?.length <= 3 && values?.map(v => <div key={v.value} className="font-medium inline-block text-center px-3">{Translate(v.value)}</div>)}
                            <div className="px-3 font-medium text-center inline-block">Mais</div>
                        </div>
                    </div>
                </div>
                <div className="block scrollgreen">
                    {l.fix && l.fix.map((f, indexFix) => {
                        return <Fix key={f.fixture.id} fix={f} bets={state.bets} isAlive={false} indexFix={indexFix} />
                    })}
                </div>
            </div>
        })}
        <div className="w-full flex items-center justify-center">
            {!state.loading && <span onClick={() => get_odd_for_fix(setLoading, highlights, leagues, setLeagues, state.league_indice, qtd)} className="bg-gray-300 hover:bg-gray-200 p-2 cursor-pointer w-full uppercase font-semibold text-center">
                Carregar mais
            </span>}

            {state.loading && <span className="bg-gray-200 p-2 w-full uppercase font-semibold text-center">
                <Image width="20" height="20" src="/ico64.png" className="animate-spin p-1" />
            </span>}
        </div>
    </>
}