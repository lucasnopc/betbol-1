import Header from './header'
import Footer from './footer'
import ListMenu from './listMenu'
import { useState } from 'react'
import Note from './note'
import { ToastContainer } from 'react-toastify'

export default function Layout(props) {
    const [listBetState, setListBetState] = useState([])
    const [getValorFinal, setValorFinal] = useState(0)
    return <div className="min-h-screen">
        <Header userString={props.userString} />
        <main className="">
            <div className="page grid grid-cols-12">
                <div className="col-span-full md:col-span-2  scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-white">
                    <ListMenu />
                </div>
                <div className="relative min-h-screen md:col-span-10 col-span-full scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-white">
                    <div className="min-h-full md:mb-48 mb-72">
                        {props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
                <Note userString={props.userString} setListBetState={setListBetState} listBetState={listBetState} getValorFinal={getValorFinal} setValorFinal={setValorFinal} />
                <ToastContainer />
    </div>
}