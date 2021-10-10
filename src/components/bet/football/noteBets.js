import { CgRemove } from 'react-icons/cg'
import CalcValorFinal from '../../../utills/valofFinal'
import { useSession } from "next-auth/client"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { HtmlEmailSendBet, TextEmailSendBet } from '../../../utills/htmlEmailSendBet'
import Translate from '../../../utills/translate'
import { useStore } from '../../../context/store'
import { oddBets } from '../../../utills/oddBets'

export default function NoteBets(props) {
    const { note, fix } = useStore()
    const [toggleNoteBets, setToggleNoteBets] = useState(false)

    useEffect(() => {
        if (note.length > 0) {
            // note.map((noteBet, i) => {
            //     const iFix = fix.filter(f => {
            //         return f.fixture.id == noteBet.id
            //     })
            //     note[i].fix = iFix[0]
            // })
        }
    }, [note])
    let user = false
    if (props.userString) {
        user = JSON.parse(props.userString)
    }
    const BtnBet = (user) => {
        const [session] = useSession()


        const startBet = (user) => {
            if (user) {
                let valorTotal = 0
                note.map((bet, indice) => {
                    valorTotal += Number(bet.value)
                })
                if (valorTotal > 0 && valorTotal < user.points) {
                    const setPoints = user.points - valorTotal
                    axios.post('/api/betApi/toBet', {
                        points: setPoints,
                        email: user.email,
                        bets: note
                    })
                        .then(function (response) {
                            axios.post('api/email/send', {
                                subject: `Betbol - Aposta Realizada`,
                                html: HtmlEmailSendBet({ listBet: note }),
                            })
                                .then(function (response) {
                                    alert('Aposta Realizada com sucesso!')
                                    location.reload()
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });

                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                } else {
                    if (valorTotal == 0) {
                        alert('Selecione as apostas e insira os valores')
                    }
                    alert('Você não tem pontos suficientes')
                }
            } else {
                alert('Faça login para continuar')
            }
        }

        if (!session) {
            return <div className="group relative w-full ">
                <button className="w-full bg-green-400 cursor-not-allowed font-semibold text-md text-green-900 uppercase p-3 disabled:opacity-50" disabled>Fazer Aposta <ValorFinal /><br />
                </button>
                <span className="absolute text-center text-green-900 w-full bottom-0 left-0 select-none cursor-not-allowed group-hover:opacity-100 opacity-0 text-xs">Faça Login para apostar</span>

            </div>
        }

        return <button onClick={() => { startBet(user.user) }} className="w-full bg-green-400 hover:bg-green-700 cursor-pointer font-semibold text-md text-green-900 hover:text-green-100 uppercase p-3">Fazer Aposta <ValorFinal /></button>
    }

    const DeleteBetInList = (indice) => {
        const ListBetStateDuplicate = [...note]
        ListBetStateDuplicate.splice(indice, 1)
        props.setListBetState(ListBetStateDuplicate)
        const valorfinal = CalcValorFinal(note) - note[indice].value
        props.setValorFinal(valorfinal)
    }
    const ValorFinal = () => {
        if (props.getValorFinal == 0) return ""
        return props.getValorFinal
    }
    const changeInputValue = data => {
        const id = data.target.alt
        const ListBetStateDuplicate = [...note]

        for (let i = 0; i < ListBetStateDuplicate.length; i++) {
            if (ListBetStateDuplicate[i].game.id == id) {
                ListBetStateDuplicate[i].value = data.target.value
            }
        }
        props.setListBetState(ListBetStateDuplicate)
        props.setValorFinal(CalcValorFinal(note))
    }
    const hiddenOrStaticToggle = (toggleNoteBets) => {
        if (!toggleNoteBets) return `hidden md:block`
        return `static`
    }
    const EmptyListBetState = () => {
        if (note.length == 0) {
            return <div className="w-full p-3">Caderneta de apostas vazia</div>
        }
        return <></>
    }
    return <>
        <div className=" bg-white fixed bottom-0 left-0 md:relative max-w-sm shadow-md border-gray-200 mt-3 flex-grow">
            <h2 onClick={() => {
                setToggleNoteBets(!toggleNoteBets)
            }} className="block-title">CADERNETA DE APOSTAS</h2>

            <div className={`${hiddenOrStaticToggle(toggleNoteBets)} w-full static max-h-60 md:max-h-full overflow-auto`}>
                {EmptyListBetState()}
                {note.map((bet, indice) => {
                console.log(bet)

                    const choice = bet.odd.value
                    const oddNumber = bet.odd.odd
                    const RetornosPotenciais = (bet, oddNumber) => {
                        if (bet.value > 0) {

                            return <>
                                <span className="text-xs w-10">Retornos Potenciais: R$ {Math.floor(bet.value * oddNumber)}</span>
                            </>
                        }
                        return ""
                    }
                    console.log(bet)

                    return <div key={indice} className="p-2 bg-gray-50 border-b border-yellow-500 flex flex-col">
                        <div className="inline-block">
                            <div className="flex flex-col">
                                <span className="flex-1 inline-block text-sm font-normal" onClick={() => DeleteBetInList(indice)}>
                                    <CgRemove className="inline-block text-xs text-gray-500 hover:text-red-600 cursor-pointer mr-2" />
                                    {bet.fix.league.country}/{bet.fix.league.name}
                                </span>
                                <div className="flex-1">
                                    <span className="bg-yellow-200 mx-2 rounded-md font-normal text-yellow-600">{oddNumber}</span>
                                     <span className=" text-gray-500 inline-block text-sm font-normal">{Translate(bet.odd)} - <span className="text-blue-800">{bet.value}</span> </span>
                                </div>
                            </div>
                            <div className="ml-5 text-xs">{bet.fix.teams['home'].name} <span className="text-lg font-normal">vs</span> {bet.fix.teams['away'].name}</div>
                        </div>
                        <div className="inline-block">
                            <div className="border border-gray-200">
                                <form onChange={changeInputValue} className="bg-white inline-block w-full">
                                    <span className="text-sm text-green-800 pl-1 w-2/12">R$</span>
                                    <input type="number" className="w-10/12 focus:outline-none float-right" alt={bet.fix.id} />
                                </form>
                            </div>
                            <RetornosPotenciais bet={bet} oddNumber={oddNumber} />
                        </div>
                    </div>
                })}
            <div className={`block bg-white bottom-0`}><BtnBet user={user} /></div>
            </div>
        </div>
    </>
}