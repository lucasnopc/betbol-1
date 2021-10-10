import { useState } from "react"
import { useStore } from "../../context/store"
import Translate from "../../utills/translate"

export default function Button(props) {
    const [toggle, setToggle] = useState(false)
    const { setGoBetsInNote } = useStore()

    const betGo = (val, fix) => {
        setGoBetsInNote(val, fix)
    }
    return <div className="group inline-block relative">
        <button onClick={() => betGo(props.val, props.fixId)} className={`${toggle ? `bg-yellow-400 hover:bg-yellow-500` : `bg-gray-100 hover:bg-gray-200`}  p-3 m-1 font-normal text-gray-700 cursor-pointer rounded-sm active:outline-none focus:outline-none`}>
            {props.val.odd}
            <span className="md:hidden text-xs block">{Translate(props.val.value)}</span>
        </button>
        <span className="text-xs hidden group-hover:block absolute z-10 bg-white p-2 shadow-md">{Translate(props.val.value)}</span>
    </div>
}