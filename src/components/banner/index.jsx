import { format } from "date-fns"
import useFetch from "../../utills/useFetch"
import FullLoading from "../fullloading"
import { bestLeagues } from "../layouts/home/bestLeagues"
import Image from 'next/image'
import LogInGoogle from "../logingoogle"

export default function Banner(props) {
    const date = format(new Date(), 'yyyy-MM-dd')
    const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return <>
        <div className="bg-gradient-to-r from-gray-200 to-gray-300 p-1">
            {/* {itens.map(i => {
                return <div 
                key={i.fixture.id}
                className="bg-gray-100 shadow-lg flex-none">
                    {i.date}
                    <span className="inline-block">{i.teams.home.name}<img src={i.teams.home.logo} width="50" height="50" /></span>
                    <span className="inline-block">{i.teams.away.name}<img src={i.teams.away.logo} width="50" height="50" /></span>
                </div>
            })} */}
            <h3 className="text-primary font-bold text-xs pl-3">Oferta novo cliente</h3>
            <p className="font-semibold pl-2">Receba R$30,00 imediatamente ao se cadastrar</p>
            <LogInGoogle />
        </div>
    </>
}