import fixInLeagues from "../../utills/fixInLeagues"
import Fix from "./Fix"
import SelectOddsBets from "./SelectOddsBets"


export default function Alive(props) {
    const ligas = fixInLeagues(props.live)
    const MoreFix = (l) => {
        if (l.l.fix.length > 3) {
            return <span className="text-xs font-medium cursor-pointer hover:underline float-right p-0.5">Ver Todos</span>
        }
        return <></>
    }
    return <>
        <div className="flex justify-between bg-gray-100 p-1">
            <h2 className="page-title p-2 inline-block">{props.title}</h2>
            <SelectOddsBets setBets={props.setBets} bets={props.bets} />
        </div>
        {ligas.length > 0 && ligas.slice(0, 10).map(l => {
            return <div key={l.liga.id}>
                <span className="block text-sm bg-black text-white font-semibold p-0.5 overflow-auto">{l.liga.country} | {l.liga.name} <MoreFix l={l} /></span>
                <div className="block">
                    {l.fix.slice(0, 3).map((f) => {
                        return <Fix key={f.fixture.id} fix={f} bets={props.bets} />
                    })}
                </div>
            </div>
        })}
        <button className="p-2 bg-gray-300 hover:bg-gray-200 w-full text-gray-600 font-semibold uppercase">Carregar mais</button>
    </>
}