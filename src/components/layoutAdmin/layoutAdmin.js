import { signOut } from 'next-auth/client'

export default function LayoutAdmin(props) {
    return <>
        <header className="bg-gray-100 p-2 font-normal flex justify-between border-b-4 border-gray-200 fixed z-20 w-full">
            <h1>
                Página Administrativa Betbol
            </h1>
            <nav>
                <div className="cursor-pointer hover:font-normal" onClick={() => signOut()}>Sair</div>
            </nav>
        </header>
        <session className="grid md:grid-cols-5 h-screen z-10 pt-10">
            <nav id="menu-lateral" className="col-span-1 p-2 bg-gray-200 h-full">
                <ul className="">
                <li className="p-5 bg-gray-300 font-normal uppercase text-gray-800 hover:bg-gray-400 cursor-pointer">USUÁRIOS</li>
                <li className="p-5 bg-gray-300 font-normal uppercase text-gray-800 hover:bg-gray-400 cursor-not-allowed">APOSTAS</li>
                </ul>
            </nav>
            <main className="col-span-4 p-2">
                {props.children}
            </main>
        </session>
    </>
}