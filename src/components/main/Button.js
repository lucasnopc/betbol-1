import { useState } from "react"

export default function Button(props) {
    // let values = []
    // if(props.odd){
    //     values = props.odd.odds.response[0].bookmakers[0].bets[0].values
    // }
    const [toggle, setToggle] = useState(false)

    return <>
         <button onClick={() => {setToggle(!toggle)}} className={`${toggle ? `bg-yellow-400 hover:bg-yellow-500` : `bg-gray-100 hover:bg-gray-200`}  p-3 m-1 font-normal text-gray-700 cursor-pointer rounded-sm`}>{props.oddNumber}</button>
    </>
}