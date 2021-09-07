import { useState } from "react"

export default function Button(props) {
    const [toggle, setToggle] = useState(false)

    return <button onClick={() => {setToggle(!toggle)}} className={`${toggle ? `bg-yellow-400 hover:bg-yellow-500` : `bg-gray-100 hover:bg-gray-200`}  p-3 m-2 font-normal text-gray-700 cursor-pointer rounded-sm`}>{props.oddNumber}</button>
     
}