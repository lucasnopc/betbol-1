import { useState } from 'react'
import HeaderAdmin from './headeradmin'

export default function LayoutAdmin(props) {
    const [toggle, setToogle] = useState(false)
    return <>
        <HeaderAdmin /> 
        <session className="">
            <main className="col-span-4 p-2 bg-gray-200 h-full">
                {props.children}
            </main>
        </session>
    </>
}