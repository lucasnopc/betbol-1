import { useEffect, useState } from "react"
import { useStore } from "../../context/store"
import Translate from "../../utills/translate"

export default function Button(props) {
    const [checked, setChecked] = useState(false)
    const { setGoBetsInNote, removeBetsInNote, note } = useStore()
    const bets = props.bets
    useEffect(() => {
        const fix = note.find(item => {
            if (item.fix.fixture.id == props.fixId.fixture.id) {
                if (item.choice.betsChoice == props.bets) {
                    if (props.val.odd == item.choice.odd && item.choice.value == props.val.value) {
                        return true
                    } else {
                    }
                } else { }
            } else {
                return false
            }
        })
        if (fix) {
            setChecked(true)
        } else { setChecked(false) }
    }, [note])

    const betGo = (val, fix) => {
        if (checked) {
            note.map((n, i) => {
                if (n.fix.fixture.id == fix.fixture.id) {
                    removeBetsInNote(i)
                }
            })
        } else {
            const bet = {
                fix,
                choice: {
                    ...val,
                    betsChoice: bets
                }
            }

            if (note.length > 0) {
                const existequalFix = note.filter(n => {
                    return n.fix.fixture.id == props.fixId.fixture.id
                })
                if (existequalFix.length > 0) {
                } else {
                    setGoBetsInNote(bet)
                }
            } else {
                setGoBetsInNote(bet)
            }
        }
    }
    let full = false
    if(props.full) {
        full = true
    }
    return <div className="group font-medium inline-block relative w-full h-full">
        <button onClick={() => betGo(props.val, props.fixId)} className={`${checked ? `bg-primary hover:bg-primary-ligth text-white` : `bg-white hover:bg-gray-200`} px-1.5 py-3 text-gray-700 cursor-pointer active:outline-none focus:outline-none md:w-20 min-w-full h-full text-xs font-bold`}>
            <span className="block">{full && Translate(props.val.value)}</span>
            {props.val.odd}
            <span className="hidden font-medium text-xs md:hidden">{Translate(props.val.value)}</span>
        </button>
        {!full &&
            <span className="text-xs hidden group-hover:block absolute -left-10 top-0 z-50 bg-white p-2 shadow-md">{Translate(props.val.value)}</span>
        }
    </div>
}