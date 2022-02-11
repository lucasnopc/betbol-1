import Header from '../home/header'
import Link from 'next/link'
import Footer from '../home/footer'
import { GiPayMoney, GiReceiveMoney, GiTicket } from 'react-icons/gi'

export default function LayoutUser(props) {
    return <><div className="min-h-screen">
        <Header userString={props.userString} />
                    <div className='flex divide-x divide-green-600 justify-between bg-green-700 px-2 md:hidden'>
            <div className='w-full p-1'><Link href="/user/deposit" ><a className="w-full text-center text-white font-normal uppercase text-xs"><GiPayMoney className='text-xl mx-auto' /><span className='block'>Depósitos</span></a></Link></div>
            <div className='w-full p-1'><Link href="/user/withdraw" ><a className="w-full  text-center text-white font-normal uppercase text-xs"><GiReceiveMoney className='text-xl mx-auto' /><span className='block'>Saques</span></a></Link></div>
            <div className='w-full p-1'><Link href="/user/hystory-bets" ><a className="w-full  text-center text-white font-normal uppercase text-xs"><GiTicket className='text-xl mx-auto' /><span className='block'>Apostas</span></a></Link></div>
        </div>
        
        <main className="">
            <div className="page">
                <div className="bg-white scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-white">
                    <div className="md:w-10/12 md:mx-auto">
                        {props.children}
                    </div>
                </div>
            </div>
        </main>
    </div>
                    <Footer /></>
}