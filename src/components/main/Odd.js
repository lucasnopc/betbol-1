import axios from "axios"
import { useEffect, useState } from "react"
import useSWR from "swr"
import { useStore } from "../../context/store"
import Button from "./Button"

export default function Odd(props) {
    const id = props.fixId
    const { setoddinChoiceforMenu, choiceForMenu } = useStore()
    const [odd, setOdd] = useState([])
    const odd2 = () => {
        if(choiceForMenu.live) {
            return choiceForMenu.live.fix
        }else {
            return choiceForMenu.leagues
        }
    }
    useEffect(() => {
        if(!odd2()[props.chave].odds) {

            const fetchOdds = async (id) => {
                const data = await axios.get(`/api/betApi/odds/${id}`)
                const getOdd = await data.data
                if (getOdd && getOdd.odds.results > 0) {
                    setoddinChoiceforMenu(props.chave, getOdd, props.leagueId ? props.leagueId : props.chave)
                    setOdd(getOdd)
                }
            }
            fetchOdds(id)
        }else {
            setOdd(odd2().live.fix[props.chave].odds)
        }
        },[]
    )
    // useEffect(() => {
    //     const liveOrLeague = choiceForMenu.live ? choiceForMenu.live.fix : choiceForMenu.leagues.leagues
    //     const leagueIdOrChave = props.leagueId ? props.leagueId : props.chave
    //     console.log('cheguei aqui', liveOrLeague[leagueIdOrChave])
    //     const odds = liveOrLeague[leagueIdOrChave].odds ? liveOrLeague[leagueIdOrChave].odds.odds.response[0].bookmakers[0].bets[0].values : null
    //     setOdd(odds)
    // }, [choiceForMenu])

    const bets = props.bets
    let values = []
    if(odd.odds) {
        let oddsBets = odd.odds ? odd.odds.response[0].bookmakers[0].bets[bets]: []
        values = oddsBets.values ? oddsBets.values : []
    }
    return <>

        <div className="float-right">
            {values &&
                values.map((val, i) => {
                    return <Button key={i} odNumber={val.odd} val={val} />
                })
            }
            {!values &&
                <span className="text-gray-500">Odds indisponíveis para este jogo</span>
            }
        </div>
    </>
}