import useFetch from "../../utills/useFetch"
import Button from "./Button"
import { ImSpinner9 } from 'react-icons/im'
import Link from 'next/link'
import { useEffect } from "react"


export default function Odd(props) {
    const bets = props.bets
    const id = props.fixId.fixture.id
    let odd = false
    let diference = undefined
    let values = []
    useEffect(() => {
        if (props.fixId.goals.home != null && props.fixId.goals.away != null) {
        diference = props.fixId.goals.home - props.fixId.goals.away
        if (diference != 0) {
            if (diference > 0) {
                values.map((v, i) => {
                    const subOdd  = ((Number(v.odd) * 30 / 100) * diference).toFixed(2)
                    if (v.value == "Home") {
                        console.log('antes', values[i].odd)
                        values[i].odd = Number(v.odd) - subOdd
                        console.log('depois', values[i].odd)
                    }
                })
            } else {
                values.map((v, i) => {
                    const subOdd  = ((Number(v.odd) * 30 / 100) * diference).toFixed(2)
                    if (v.value == "Away") {
                        values[i].odd = Number(v.odd) - subOdd
                    }
                })
            }
        }
    }
    }, [odd])
    const { data, error } = useFetch(`/api/betApi/odds/${id}`)
    if (error) console.log(error)
    if (!data) <p> <ImSpinner9 className="text-5xl animate-spin  mx-auto text-primary p-3" /></p>
    if (data) odd = data.odd[0]
    if (odd) {
        const book = odd.bookmakers[0]
        const bet = book ? book.bets : null
        const oddsBets = (bets, bet) => {
            const values = bet ? bet.find(val => {
                return val.id == bets
            }) : null
            return { ...values, bets }
        }
        values = oddsBets(bets, bet) ? oddsBets(bets, bet).values : []
    }
    return <>
        <div className="md:float-right flex flex-nowrap md:flex-none h-full">
            {!data &&
                <><ImSpinner9 className="text-5xl animate-spin  mx-auto text-primary p-3" /></>
            }
            {values && values.length <= 3 &&
                values.map((val, i) => {
                    return <div key={val.value} className="flex-1 gap-0 h-full">
                        <Button key={i} val={val} fixId={props.fixId} bets={bets} />
                    </div>
                })
            }
            {values && values.length > 3 &&
                <div className="h-full mt-5">
                    <Link href={`/fix/${id}`} >
                        <a className="bg-primary hover:bg-primary-ligth p-2 mx-3 font-semibold text-white text-xs uppercase align-middle">
                            Todas Opções
                        </a>
                    </Link>
                </div>
            }
            {!values || values.length == 0 && data &&
                <span className="text-gray-600 text-sm opacity-25 shadow-sm block p-1 cursor-not-allowed">
                    Odds indisponíveis no momento
                </span>
            }
        </div>
    </>
}