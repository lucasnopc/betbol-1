import { format } from "date-fns"
import LogInGoogle from "../logingoogle"
import Image from 'next/image'

export default function Banner(props) {
    const date = format(new Date(), 'yyyy-MM-dd')
    const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const itens = props.live
    return <>
        <div className="h-60 p-3 overflow-hidden">
           {/* <div style={{width: 9000}}>
                {itens.slice(0).map(i => {
                    console.log(i)
                return <div 
                key={i.fixture.id}
                className="bg-gray-100 shadow-lg inline-block">
                {i.date}
                <span className="block">{i.teams.away.name}<Image src={i.teams.away.logo} width="50" height="50" /></span>
                <span className="block">{i.teams.home.name}<Image src={i.teams.home.logo} width="50" height="50" /></span>
                </div>
            })}

            </div> */}
            <div className="bg-bg01 bg-black bg-cover bg-right-top">
                <h3 className="text-gray-200 font-bold mt-5 text-lg md:text-xl pl-3 text-shadow">Oferta novo cliente</h3>
                <p className="font-bold pl-2 text-yellow-400 text-2xl md:text-3xl text-shadow">Receba Bônus de <br /> até R$ 150</p>
                <LogInGoogle />
            </div>
        </div>
    </>
}