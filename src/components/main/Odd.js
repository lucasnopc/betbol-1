import useFetch from "../../utills/useFetch"
import Button from "./Button"
import { ImEyeBlocked } from 'react-icons/im'
import { FcSynchronize } from "react-icons/fc"

export default function Odd(props) {

    let odd = false
    const id = props.fixId.fixture.id

    const { data, error } = useFetch(`/api/betApi/odds/${id}`)
    if (error) console.log(error)
    if (!data) <p> <FcSynchronize className="text-5xl animate-spin  mx-auto text-yellow-400 p-3" /></p>
    if (data) odd = data.odd[0]
    const bets = props.bets
    let values = []
    if (odd) {
        
        const book =  odd.bookmakers[0]
        const bet = book ? book.bets : null
        
        const oddsBets = (bets, bet) => {
                const values = bet ? bet.find(val => {
                    return val.id == bets 
                }) : null
                return {...values, bets}
            }
            values = oddsBets(bets, bet) ? oddsBets(bets, bet).values : []
        }
    return <>
        <div className="md:float-right flex flex-wrap md:flex-none">
            {!data &&
                <><FcSynchronize className="text-5xl animate-spin  mx-auto text-yellow-400 p-3" /></>
            }
            {values &&
                values.map((val, i) => {
                    return <div key={val.value} className="flex-1 m-1">
                        <Button key={i} val={val} fixId={props.fixId} bets={bets} />
                    </div>
                })
            }
            {!values || values.length == 0 &&
                <span className="text-gray-500 text-xl opacity-25 bg-white shadow-sm block mt-1 p-2 cursor-not-allowed">
                    <ImEyeBlocked  />
                </span>
            }
        </div>
    </>
}