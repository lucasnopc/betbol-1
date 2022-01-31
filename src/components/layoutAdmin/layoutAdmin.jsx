import { signOut } from 'next-auth/client'
import { useState } from 'react'

export default function LayoutAdmin(props) {
    const [toggle, setToogle] = useState(false)
    return <>
        <header className="bg-gray-900 text-white p-2 font-normal fixed flex justify-between border-b-4 border-gray-200 z-20 w-full">
            <h1 onClick={() => setToogle(!toggle)}>
                Admin
            </h1>
            <nav>
                <div className="cursor-pointer hover:font-normal" onClick={() => signOut()}>Sair</div>
            </nav>
        </header>
        <nav id="menu-lateral" className={`${toggle ? 'fixed' : 'hidden'} col-span-1 p-2 bg-gray-200 w-full`}>
                <ul className="">
                <li className="p-5 bg-gray-300 font-normal uppercase text-gray-800 hover:bg-gray-400 cursor-pointer">USUÁRIOS</li>
                <li className="p-5 bg-gray-300 font-normal uppercase text-gray-800 hover:bg-gray-400 cursor-not-allowed">REGULAMENTO</li>
                <li className="p-5 bg-gray-300 font-normal uppercase text-gray-800 hover:bg-gray-400 cursor-not-allowed">RELATÓRIO</li>
                </ul>
        </nav>
        <session className="">
            <main className="col-span-4 p-2 bg-gray-200 h-full">
                {props.children}
            </main>
        </session>
    </>
}