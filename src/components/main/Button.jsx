import { useEffect, useState } from "react"
import { useStore } from "../../context/store"
import Translate from "../../utills/translate"

export default function Button(props) {
    const checked = props.val.select
    // console.log('button props.val', props.val)
    const { setGoBetsInNote, removeBetsInNote, note, replaceBetsInNote } = useStore()
    // useEffect(() => {
    //     if (note.length > 0) {
    //         const fix = note.find(item => {
    //             if (props.fixId.fixture.id == item.fix.fixture.id) {
    //                 return true
    //             } else false
    //         })
    //         if (fix) {
    //             if(fix.choice.betsChoice == props.bets) {
    //                 console.log('fix ', fix.choice, props.val)
    //                 const condition = props.val.odd == fix.choice.odd && props.val.value == fix.choice.value
    //                 if(condition) {setChecked(true)
    //                 }else setChecked(false)
    //             }
    //         }
    //     }
    //     return function cleanup() {
    //     console.log('cheanup ', props.val)
    //     if(checked) setChecked(false)
    //     }
    // }, [note, props.bets])

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
                }
            })
        } else {
            const indexNoteEquals = note.findIndex((n, i) => {
                return n.fix.fixture.id == fix.fixture.id
            })
            if (indexNoteEquals < 0) {
                setGoBetsInNote(bet)
            } else {
                replaceBetsInNote(bet)
            }
        }
    }
    return <div className="group font-medium inline-block relative w-full h-full">
        <button onClick={() => betGo(props.val, props.fixId, props.bets)} className={`${checked ? `bg-primary hover:bg-primary-ligth text-white` : ` hover:bg-gray-200 text-primary`} px-1.5 py-3 cursor-pointer active:outline-none focus:outline-none md:w-20 min-w-full h-full text-base font-bold`}>
            {/* <span className="block">{full && Translate(props.val.value)}</span> */}
            {props.val.odd}
            <span className="hidden font-medium text-xs md:hidden">{Translate(props.val.value)}</span>
        </button>
        {/* {!full &&
            <span className="text-xs hidden group-hover:block absolute -left-10 top-0 z-50 bg-white p-2 shadow-md">{Translate(props.val.value)}</span>
        } */}
    </div>
}