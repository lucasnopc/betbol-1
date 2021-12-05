import fixInLeagues from "../../utills/fixInLeagues"
import Fix from "./Fix"
import SelectOddsBets from "./SelectOddsBets"
import { bestLeagues } from '../layouts/home/bestLeagues'
import { useState } from "react"


export default function Alive(props) {
    const [bets, setBets] = useState(1)
    if(props.live.length == 0) {
        return <h1 className="font-semibold text-center pt-7 text-lg">Esta categoria não possue jogos neste momento, volte mais tarde.</h1>
    }
    const ligas = fixInLeagues(props.live)
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
    const MoreFix = (l) => {
        if (l.l.fix.length > 3) {
            return <span className="text-xs font-medium cursor-pointer hover:underline float-right p-0.5">Ver Todos</span>
        }
        return <></>
    }
    return <>
        <div className="flex justify-between bg-gray-100 p-1">
            <h2 className="page-title p-2 inline-block">{props.title}</h2>
            <SelectOddsBets setBets={setBets} bets={bets} />
        </div>
        {primaryLeagues.length > 0 && primaryLeagues.map(l => {
            return <div key={l.liga.id}>
                {/* <span className="pl-2 block text-sm border-b-2 border-black text-black font-semibold p-0.5 overflow-auto">{l.liga.country} | {l.liga.name}</span> */}
                <div className="block">
                    {l.fix.map((f) => {
                        return <Fix key={f.fixture.id} fix={f} bets={bets} />
                    })}
                </div>
            </div>
        })}
        {ligas.length > 0 && ligas.map(l => {
            if(!props.complete) {
                l.fix = l.fix.slice(0, 3)
            }
            return <div key={l.liga.id}>
                {/* <span className="pl-2 block text-sm border-b-2 border-black text-black font-semibold p-0.5 overflow-auto">{l.liga.country} | {l.liga.name} <MoreFix l={l} /></span> */}
                <div className="block">
                    {l.fix.map((f) => {
                        return <Fix key={f.fixture.id} fix={f} bets={bets} />
                    })}
                </div>
            </div>
        })}
        {/* <button className="p-2 bg-gray-300 hover:bg-gray-200 w-full text-gray-600 font-semibold uppercase">Carregar mais</button> */}
    </>
}