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
            setOdd(odd2()[props.chave].odds)
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
        let oddsBets2 = (odd, bets) => {
           const betItem = odd.odds.response[0].bookmakers[0].bets.find((bet, i) => {
               return bets ==  bet.id
            })
            if(betItem) {
                return betItem
            }else {
                return []
            }
        }
        values = oddsBets2(odd, bets).values ? oddsBets2(odd, bets).values : []
    }
    if(values.length > 3 ){
        // console.log('values', values)
    }
    if(values.length == 0 ) {
        return <span className="text-gray-500 float-right">Odds indisponíveis</span>
    }
    return <>

        <div className="float-right">
            {values.length <= 3 &&
                values.map((val, i) => {
                    return <Button key={i} odNumber={val.odd} val={val} />
                })
            }
            {values.length > 3  &&
                <span className="text-gray-500">mais de 3</span>
            }
        </div>
    </>
}