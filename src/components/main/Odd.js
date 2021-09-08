import axios from "axios"
import { useEffect, useState } from "react"
import Button from "./Button"

export default function Odd (props) {
    const [odds, setOdds] = useState(null)

    const id = props.fixId
    useEffect(() => {
        const fetchOdds = async () => { 
        const data = await axios.get(`/api/betApi/odds/${id}`)
        const odd = await data.data
        if(odd && odd.odds.results > 0) {
            setOdds(odd)
        }
    }
    fetchOdds()
    })
    const bets = props.bets
    let values = null
    
    if(odds){
        values = odds.odds.response[0].bookmakers[0].bets[0].values
    }
    return <>
    <div className="float-right">
        {values && 
           values.map((val, i) => {
            return <Button key={i} oddNumber={val.odd} />
           })
        }
        {!values && 
             <span className="text-gray-500">Odds indisponíveis para este jogo</span>
        }
    </div>
    </>
}