import { useState } from "react"
import { useStore } from "../../context/store"
import Translate from "../../utills/translate"

export default function Button(props) {
    const [toggle, setToggle] = useState(false)
    const { setGoBetsInNote, note } = useStore()
    const bets = props.bets

    const betGo = (val, fix) => {
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
            if(existequalFix.length > 0) {
            }else {
                setGoBetsInNote(bet)
            }
        } else {
            setGoBetsInNote(bet)
        }

    }
    return <div className="group inline-block relative w-full">
        <button onClick={() => betGo(props.val, props.fixId)} className={`${toggle ? `bg-yellow-400 hover:bg-yellow-500` : `bg-gray-200 hover:bg-gray-200`} p-3 font-normal text-gray-700 cursor-pointer rounded-sm active:outline-none focus:outline-none w-full`}>
            {props.val.odd}
            <span className="md:hidden text-xs block">{Translate(props.val.value)}</span>
        </button>
        <span className="text-xs hidden group-hover:block absolute z-10 bg-white p-2 shadow-md">{Translate(props.val.value)}</span>
    </div>
}