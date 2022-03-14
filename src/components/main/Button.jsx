import { useEffect, useState } from "react"
import { useStore } from "../../context/store"
import Translate from "../../utills/translate"

export default function Button({ fix, val, bets }) {
    const [checked, setChecked] = useState(false)
    const { setGoBetsInNote, removeBetsInNote, note, replaceBetsInNote } = useStore()
    useEffect(() => {
        note.map((n, i) => {
            if (n.fix.fixture.id == fix.fixture.id && n.choice.betsChoice == bets) {
                if (n.choice.value == val.value && n.choice.odd == val.odd) {
                    setChecked(true)
                } else {
                    if (checked) setChecked(false)
                }
            }
        })

    }, [])
    useEffect(()=> {
        note.map((n, i) => {
            if (n.fix.fixture.id == fix.fixture.id && n.choice.betsChoice == bets) {
                if (n.choice.value == val.value && n.choice.odd == val.odd) {
                    setChecked(true)
                } else {
                    if (checked) setChecked(false)
                }
            }
        })
    },[note])
    const betGo = (val, fix, bets) => {
        const bet = {
            fix,
            choice: {
                ...val,
                betsChoice: bets
            }
        }
        if (checked) {
            note.map((n, i) => {
                if (n.fix.fixture.id == fix.fixture.id) {
                    removeBetsInNote(i)
                    setChecked(false)
                }
            })
        } else {
            const indexNoteEquals = note.findIndex((n, i) => n.fix.fixture.id == fix.fixture.id)
            if (indexNoteEquals < 0) {
                setGoBetsInNote(bet)
            } else {
                replaceBetsInNote(bet)
            }
        }
    }
    return <div className="group font-medium inline-block relative w-full h-full">
        <button onClick={() => betGo(val, fix, bets)} className={`${checked ? `bg-primary hover:bg-primary-ligth text-white` : ` hover:bg-gray-200 text-primary`} px-1.5 py-3 cursor-pointer active:outline-none focus:outline-none md:w-20 min-w-full h-full text-base font-bold`}>
            {val.odd}
            {/* <span className="hidden font-medium text-xs md:hidden">{Translate(props.val.value)}</span> */}
        </button>
    </div>
}