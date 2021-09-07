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
    },[])
    const bets = props.bets
    return <>
    <div className="">
      <Button oddNumber={`5.00`} />
    </div>
    </>
}