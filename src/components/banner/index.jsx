import { format } from "date-fns"
import LogInGoogle from "../logingoogle"

export default function Banner(props) {
    const date = format(new Date(), 'yyyy-MM-dd')
    const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return <>
        <div className="bg-bg01 bg-black bg-cover bg-right-top h-60 p-3">
            {/* {itens.map(i => {
                return <div 
                key={i.fixture.id}
                className="bg-gray-100 shadow-lg flex-none">
                    {i.date}
                    <span className="inline-block">{i.teams.home.name}<img src={i.teams.home.logo} width="50" height="50" /></span>
                    <span className="inline-block">{i.teams.away.name}<img src={i.teams.away.logo} width="50" height="50" /></span>
                </div>
            })} */}
            <h3 className="text-gray-200 font-bold mt-5 text-lg md:text-3xl pl-3 text-shadow">Oferta novo cliente</h3>
            <p className="font-bold pl-2 text-yellow-400 text-2xl md:text-5xl text-shadow">Receba Bônus de <br /> até R$ 150</p>
            <LogInGoogle />
        </div>
    </>
}