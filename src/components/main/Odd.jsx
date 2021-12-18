import useFetch from "../../utills/useFetch"
import Button from "./Button"
import { ImSpinner9 } from 'react-icons/im'
import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function Odd(props) {
    const bets = props.bets
    const id = props.fixId.fixture.id
    const [ values, setValues ] = useState([])
    let diference = undefined
    const { data, error } = useFetch(`/api/betApi/odds/${id}`)
    useEffect(() => {
        if(data && data.odd[0]){
                const book = data.odd[0].bookmakers[0]
                const bet = book ? book.bets : null
                const oddsBets = (bets, bet) => {
                    if(bet && bets) {
                        const values = bet ? bet.find(val => {
                            return val.id == bets
                        }) : null
                        return values
                    }
                    return null
                }
                setValues(oddsBets(bets, bet) ? oddsBets(bets, bet).values : [])
        }
        if (props.fixId.goals.home != null && props.fixId.goals.away != null) {
            diference = props.fixId.goals.home - props.fixId.goals.away
            if (diference != 0) {
                let HomeOrAwaya = ''
                if (diference > 0) {
                    HomeOrAwaya = "Home"
                } else if (diference < 0) {
                    HomeOrAwaya = "Away"
                }
                const newValues = values
                newValues.map((v, i) => {
                    
                    console.log('values', values, diference)
                    if (v.value == HomeOrAwaya) {
                        console.log('diference', Math.abs(diference), props.fixId)
                        switch (Math.abs(diference)) {
                            case 1:
                                newValues[i].odd = '1.25'
                                break
                            case 2:
                                newValues[i].odd = '1.10'
                                break
                            default:
                                newValues[i].odd = '1.025'
                                break
                        }

                    }
                })
                setValues(newValues)
            }
        }
    }, [data])
    if (error) console.log(error)
    if (!data) <p> <ImSpinner9 className="text-5xl animate-spin  mx-auto text-primary p-3" /></p>

    return <>
        <div className={`md:float-right flex flex-nowrap md:flex-none h-full border-l border-gray-200}`}>
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