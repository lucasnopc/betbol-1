export default function LayoutAdmin(props) {
    return <>
        <header className="bg-gray-100 p-2 font-normal flex justify-between border-b-4 border-gray-200">
            <h1>
                Página Administrativa Betbol
            </h1>
            <nav>
                <div className="cursor-pointer hover:font-normal" onClick={() => signOut()}>Sair</div>
            </nav>
        </header>
        <main className="">
            {props.children}
        </main>
    </>
}