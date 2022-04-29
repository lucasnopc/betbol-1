import Header from '../home/header'
import Link from 'next/link'
import Footer from '../home/footer'
import { GiPayMoney, GiReceiveMoney, GiTicket } from 'react-icons/gi'

export default function LayoutUser(props) {
    return <><div className="min-h-screen">
        <Header />
            <div className='flex divide-x divide-green-600 justify-between bg-green-700 px-2 md:hidden'>
            <div className='w-full p-1'><Link href="/user/deposit" ><a className="w-full text-center text-white font-normal uppercase text-xs"><GiPayMoney className='text-xl mx-auto' /><span className='block'>Depósitos</span></a></Link></div>
            <div className='w-full p-1'><Link href="/user/withdraw" ><a className="w-full  text-center text-white font-normal uppercase text-xs"><GiReceiveMoney className='text-xl mx-auto' /><span className='block'>Saques</span></a></Link></div>
            <div className='w-full p-1'><Link href="/user/hystory" ><a className="w-full  text-center text-white font-normal uppercase text-xs"><GiTicket className='text-xl mx-auto' /><span className='block'>Apostas</span></a></Link></div>
        </div>
        
        <main className="">
            <div className="page">
                <div className="relative bg-white scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-white mx-5">
                    <div className="min-h-full md:mb-48 mb-72">
                        {props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    </div>
                    </>
}