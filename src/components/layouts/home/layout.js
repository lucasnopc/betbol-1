import Header from './header'
import Footer from './footer'
import ListMenu from './listMenu'
import { useState } from 'react'
import Note from './note'

export default function Layout(props) {
    const [listBetState, setListBetState] = useState([])
    const [getValorFinal, setValorFinal] = useState(0)

    return <div className="min-h-screen overflow-hidden bg-gray-100">
        <Header userString={props.userString} />
        <main className="bg-cover h-full mt-10 md:mt-16">
            <div className="page grid grid-cols-12">
                <div className="col-span-full md:col-span-3  scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-white">
                    <ListMenu />
                </div>
                <div className="md:col-span-9 col-span-full bg-white h-screen scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-white">
                    <div className="">
                        {props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
                <Note userString={props.userString} setListBetState={setListBetState} listBetState={listBetState} getValorFinal={getValorFinal} setValorFinal={setValorFinal} />
    </div>
}