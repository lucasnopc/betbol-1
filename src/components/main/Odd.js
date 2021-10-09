import axios from "axios"
import { useEffect, useState } from "react"
import useSWR from "swr"
import { useStore } from "../../context/store"
import useFetch from "../../utills/useFetch"
import Button from "./Button"

export default function Odd(props) {
    let odd = {}
    const id = props.fixId
    // const [odd, setOdd] = useState([])
    //         const fetchOdds = async (id) => {
    //             const data = await axios.get(`/api/betApi/odds/${id}`)
    //             const getOdd = await data.data
    //             if (getOdd && getOdd.odds.results > 0) {
    //                 setOdd(getOdd)
    //             }
    //         }
    //         const { data, error } = useSWR(`/api/betApi/odds/${id}`, fetchOdds(id), )
    //         if(error) console.log('erro ao buscar odds ', error)
    //         if(!data) {
    //             return <>Carregando...</>
    //         }
    const { data, error } = useFetch(`/api/betApi/odds/${id}`)
    if (error) console.log(error)
    if (!data) <p> Carregando...</p>
    if (data) odd = data
    const bets = props.bets
    let values = []
    if (odd.hasOwnProperty(`odds`)) {
        if (odd.odds.results > 0) {

            let oddsBets = odd.odds ? odd.odds.response[0].bookmakers[0].bets[bets] : []
            values = oddsBets.values ? oddsBets.values : []
        }
    }
    return <>

        <div className="float-right">
            {!data &&
                <>Carregando...</>
            }
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