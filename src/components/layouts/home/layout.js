import Header from './header'
import Footer from './footer'
import ListMenu from './listMenu'
import SelectOddsBets from '../../main/SelectOddsBets'
import NoteBets from '../../bet/football/noteBets'
import { useState } from 'react'

export default function Layout(props) {
    const [listBetState, setListBetState] = useState([])
    const [getValorFinal, setValorFinal] = useState(0)

    return <div className="min-h-screen overflow-visible bg-gray-100">
        <Header userString={props.userString} />
        <main className="bg-cover h-full ">
            <div className="page grid grid-cols-12">
                <div className="col-span-full md:col-span-2 mt-3 mx-3">
                    <ListMenu />
                </div>
                <div className="mx-3 mt-3 md:col-span-7 col-span-full bg-white shadow-md">
                    <div className="overflow-auto">
                        {props.children}
                    </div>
                </div>
                <div className="mx-3 md:col-span-3 col-span-full">
                    <NoteBets userString={props.userString} setListBetState={setListBetState} listBetState={listBetState} getValorFinal={getValorFinal} setValorFinal={setValorFinal} />
                </div>
            </div>
        </main>
        <Footer />
    </div>
}