import useFetch from "../../../../../utills/useFetch"
import Button from "../../../Button"
import { ImSpinner9 } from 'react-icons/im'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useFix } from "../../../../../context/fix"
import Image from 'next/image'
import { useStore } from "../../../../../context/store"

export default function OddsLive(props) {
    const { note } = useStore()
    const { removeFix } = useFix()
    const bets = props.bets
    const id = props.fixId.fixture.id
    const [values, setValues] = useState([])
    const [odds, setOdds] = useState([])
    const { data, error } = useFetch(`/api/betApi/live/oddslive?id=${id}`)

    useEffect(() => {
        if (data && data.odd[0]) {
            const book = data.odd[0].odds[0]
            const bet = book ? book.bets : null
            const oddsBets = (bets, bet) => {
                if (bet && bets) {
                    const values = bet ? bet.find(val => {
                        return val.id == bets
                    }) : null
                    return values
                }
                return null
            }
            let newValues = oddsBets(bets, bet) ? oddsBets(bets, bet).values : []

        //código para mostrar o selected
        if (newValues.length > 0 && note.length > 0) {
            const itemNote = note.find(item => {
                if (item.fix.fixture.id == id && item.choice.betsChoice == bets) {
                    return true
                }
            })
            if (itemNote) {
                const oddWithSelect = newValues.map(itemValue => {
                    if(itemValue.select == true) {
                        itemValue.select = false
                    }
                    if (itemValue.value == itemNote.choice.value && itemValue.odd == itemNote.choice.odd) {
                        itemValue.select = true
                        return itemValue
                    } else return itemValue
                })
                newValues = oddWithSelect
            }
        }
        setValues(newValues)
        } else {
            if (typeof data != 'undefined') {
                if (data.odd.length == 0) {
                    removeFix(props.fixId.fixture.id, props.isAlive)

                }
            }
        }
    }, [data, bets, note])

    if (!data) <p> <ImSpinner9 className="text-5xl animate-spin  mx-auto text-primary p-3" /></p>
    return <>
        <div className={`md:float-right flex flex-nowrap md:flex-none h-full border-l border-gray-200 divide-x`}>
            {!data &&
                <>
                    <div className="px-5 py-3"><Image width="20" height="20" src="/ico.png" className="animate-spin" /></div>
                    <div className="px-5 py-3"><Image width="20" height="20" src="/ico.png" className="animate-spin" /></div>
                    <div className="px-5 py-3"><Image width="20" height="20" src="/ico.png" className="animate-spin" /></div>
                </>
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