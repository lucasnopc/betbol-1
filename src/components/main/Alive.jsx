import fixInLeagues from "../../utills/fixInLeagues"
import Fix from "./Fix"
import SelectOddsBets from "./SelectOddsBets"
import { bestLeagues } from '../layouts/home/bestLeagues'
import { useEffect, useState } from "react"
import { useFix } from "../../context/fix"
import Image from 'next/image'

export default function Alive(props) {
    const { setLiveOHighlightsState, fixList, highlights, live: alive } = useFix()
    const [ moreToggle, setMoreToggle ] = useState(false)
    const [fix, setFix] = useState([])
    const [live, setLive] = useState(false)
    const [bets, setBets] = useState(1)

    useEffect(() => {
        if (props.isAlive == true) {
            setLive(true)
        }
    }, [])
    useEffect(() => {
        setLiveOHighlightsState(props.live, props.isAlive)
    }, [props.live])

    useEffect(() => {
        setFix(fixList(props.isAlive))
    }, [highlights, alive])

    if (fix.length == 0) {
        return <h1 className="font-semibold text-center pt-7 text-lg">0 jogos no momento, volte mais tarde.</h1>
    }

    const ligas = fixInLeagues(fix)

    const primaryLeagues = ligas.filter((l, indice) => {
        for (let i = 0; i < bestLeagues.length; i++) {
            if (bestLeagues[i].id == l.liga.id) {
                ligas.splice(indice, 1);
                return true
            }
        }
        return false
    })

    return <>
        <div className="flex justify-between p-2 border-b border-gray-200">
            <h2 className="page-title p-2 inline-block">{props.title}</h2>
            {!live &&
                <SelectOddsBets setBets={setBets} bets={bets} />
            }
        </div>

        {primaryLeagues.length > 0 && primaryLeagues.map(l => {
            return <div key={l.liga.id}>
              <div className="text-xs font-semibold bg-primary text-white p-2 border-b flex items-center">   
                             {l.liga.flag && <Image src={l.liga.flag} alt={l.liga.name} width={20} height={15} /> }
                                <span className="pl-1 font-semibold">
                                    {l.liga.country} - {l.liga.name}
                             {/* {l.liga.logo && <Image src={l.liga.logo} alt={l.liga.name} width={20} height={15} /> } */}

                                </span>
                            </div>
                <div className="block scrollgreen">
                    {l.fix.map((f, indexFix) => {
                        return <Fix key={f.fixture.id} fix={f} bets={bets} isAlive={props.isAlive} indexFix={indexFix} />
                    })}
                </div>
            </div>
        })}

        {ligas.length > 0 && <>

            {primaryLeagues.length !== 0 && <span onClick={() => setMoreToggle(!moreToggle)} className="font-bold text-xs uppercase text-primary">Ver mais</span>}
            <div className={`${moreToggle || primaryLeagues.length === 0 ? `block` : `hidden`} scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-white md:h-96 overflow-scroll`}>
                {ligas.reverse().map(l => {
                    return <div key={l.liga.id}>
                            <div className="text-xs font-semibold bg-primary text-white p-2 border-b flex items-center">   
                             {l.liga.flag && <Image src={l.liga.flag} alt={l.liga.name} width={20} height={15} /> }
                                <span className="pl-1 font-semibold">
                                    {l.liga.country} - {l.liga.name}
                                </span>
                             {/* {l.liga.logo && <Image src={l.liga.logo} alt={l.liga.name} width={20} height={15} /> } */}

                            </div>
                        <div className="block">
                            {l.fix.map((f, indexFix) => {
                                return <Fix key={f.fixture.id} fix={f} bets={bets} isAlive={props.isAlive} indexFix={indexFix} />
                            })}
                        </div>
                    </div>
                })}
            </div>
        </>
        }
    </>
}