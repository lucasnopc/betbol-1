import fixInLeagues from "../../utills/fixInLeagues"
import Fix from "./Fix"
import SelectOddsBets from "./SelectOddsBets"
import { bestLeagues } from '../layouts/home/bestLeagues'
import { useEffect, useState } from "react"
import { useFix } from "../../context/fix"

export default function Alive(props) {
    const { setLiveOHighlightsState, fixList, highlights, live:alive} = useFix()
    const [fix, setFix] = useState([])
    const [live, setLive] = useState(false)
    const [bets, setBets] = useState(1)

    useEffect(() => {
        if(props.isAlive == true) {
            setLive(true)
        }
    }, [])
    useEffect(() => {
        setLiveOHighlightsState(props.live, props.isAlive)
    }, [props.live])

    useEffect(() => {
        setFix(fixList(props.isAlive))
    }, [highlights, alive])

    if(fix.length == 0) {
        return <h1 className="font-semibold text-center pt-7 text-lg">Esta categoria não possue jogos neste momento, volte mais tarde.</h1>
    }

    const ligas = fixInLeagues(fix)

    const primaryLeagues = ligas.filter((l, indice) => {
        for(let i = 0 ; i < bestLeagues.length ; i++) {
            if(bestLeagues[i].id == l.liga.id) {
                ligas.splice(indice, 1);
                return true
            }
        }
        return false
    })

    if(!props.complete) {
        ligas = ligas.slice(0, 10)
    }

    return <>
        <div className="flex justify-between p-2 border-b border-gray-200">
            <h2 className="page-title p-2 inline-block">{props.title}</h2>
            {!live &&
                <SelectOddsBets setBets={setBets} bets={bets} />
            }
        </div>

        {primaryLeagues.length > 0 && primaryLeagues.map(l => {
            return <div key={l.liga.id}>
                <div className="block">
                    {l.fix.map((f, indexFix) => {
                        return <Fix key={f.fixture.id} fix={f} bets={bets} isAlive={props.isAlive} indexFix={indexFix} />
                    })}
                </div>
            </div>
        })}

        {ligas.length > 0 && ligas.map(l => {
            if(!props.complete) {
                l.fix = l.fix.slice(0, 3)
            }

            return <div key={l.liga.id}>
                <div className="block">
                    {l.fix.map((f, indexFix) => {
                        return <Fix key={f.fixture.id} fix={f} bets={bets}  isAlive={props.isAlive} indexFix={indexFix} />
                    })}
                </div>
            </div>
        })}
    </>
}