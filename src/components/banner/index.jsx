import { format, isToday, isTomorrow } from "date-fns"
import { useSession } from "next-auth/client";
import Image from 'next/image'
import Link from 'next/link'
import SignInButton from "../layouts/home/header/signIn";
import { bestLeagues } from "../layouts/home/bestLeagues";
import { FaFutbol } from 'react-icons/fa'
import Odd from '../main/Odd'
import { useState } from "react";

export default function Banner(props) {
    const [session] = useSession()
    const [scrollX, setScrollX] = useState(0)
    const itens = props.live
    const ligas = [...itens]
    const primaryLeagues = ligas.filter((l, indice) => {
        for (let i = 0; i < bestLeagues.length; i++) {
            if (bestLeagues[i].id == l.league.id) {
                ligas.splice(indice, 1);
                return true
            }
        }
        return false
    })

    return <>
        <div className="p-3 mx-2 text-xs text-gray-700">
            <div className="h-40 scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-100 overflow-x-auto overflow-y-hidden flex transition-transform" style={{ marginLeft: scrollX }} >
                <div>
                    <div className="p-2 mx-1 w-64 h-36 overflow-hidden bg-bg01 bg-black bg-cover bg-right-top shadow-lg inline-block">
                    <h3 className="text-gray-200 font-bold mt-2 text-lg pl-2 text-shadow">Oferta novo cliente</h3>
                <p className="font-bold pl-2 text-yellow-400 text-xl text-shadow">Receba Bônus de <br /> até R$ 150</p>
                        {session &&
                            <Link href="/user/deposit"><a className="text-white font-semibold bg-primary mt-1 p-1">Faça um depósito já</a></Link>
                        }
                        {!session && <SignInButton />}
                    </div>
                </div>
                {primaryLeagues.map(i => {
                    const dateFix = new Date(i.fixture.date)
                    const dateFormat = format(dateFix, 'yyyy/MM/dd')
                    const TimeFormat = format(dateFix, 'hh:mm')
                    let dateText
                    if (isTomorrow(dateFix)) dateText = "Amanhã"
                    if (isToday(dateFix)) dateText = "Hoje"
                    return <div key={i.fixture.id}>
                        <div className="p-2 mx-1 w-64 h-36 overflow-hidden bg-white shadow-lg inline-block">
                            <div className="mb-3">
                                <span><FaFutbol className="inline-block" /> {i.league.name}</span>
                                <span className="float-right">{dateText ? dateText : dateFormat} / {TimeFormat}</span>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="text-right flex items-center"><span className="w-20 mr-1">{i.teams.away.name.substring(0, 10)}</span><Image src={i.teams.away.logo} width="30" height="30" /></div>
                                <div className="text-left flex items-center"><Image src={i.teams.home.logo} width="30" height="30" /><span className="ml-1 w-20">{i.teams.home.name.substring(0, 10)}{i.teams.home.name.length > 10 ? `...` : ``}</span></div>
                            </div>
                            <div className="text-center mt-2">Resultado da partida</div>
                            <div className='h-10'><Odd bets={1} fixId={i} isAlive={false} /></div>
                        </div>
                    </div>
                }
                )}
            </div>

            {/* <div className="bg-bg01 bg-black bg-cover bg-right-top h-full pt-2">
                <h3 className="text-gray-200 font-bold mt-5 text-lg md:text-xl pl-2 text-shadow">Oferta novo cliente</h3>
                <p className="font-bold pl-2 text-yellow-400 text-xl md:text-3xl text-shadow">Receba Bônus de <br /> até R$ 150</p>
              {session &&
                <Link href="/finances"><a className="text-white font-semibold bg-black p-1">Faça um depósito já</a></Link>
              }  
              {!session && <SignInButton />}
            </div> */}
        </div>
    </>
}