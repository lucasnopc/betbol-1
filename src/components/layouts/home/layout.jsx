import Header from './header'
import Footer from './footer'
import ListMenu from './listMenu'
import Note from './note'
import { ToastContainer } from 'react-toastify'

export default function Layout({children, clear=false}) {

    return <div className="flex flex-col h-screen">
        <Header />
        <main className="grow basis-auto">
            <div className="page grid grid-cols-12">
                {!clear &&<div className="col-span-full md:col-span-2  scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-white">
                    <ListMenu />
                </div>}
                <div className="relative min-h-screen md:col-span-10 col-span-full scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-white">
                    <div className="">
                        {children}
                    </div>
                </div>
            </div>
        </main>
        <Footer />
                <Note />
                <ToastContainer />
    </div>
}