import { HtmlEmailSendBet, TextEmailSendBet } from '../../../utills/htmlEmailSendBet'
import { useSession } from "next-auth/client"
import axios from 'axios'
import { useStore } from '../../../context/store'

export default function BtnBet(props) {
    const { note } = useStore()

    const [session] = useSession()

    const ValorFinal = (vf) => {
        if(vf.vf) {
            if(vf.vf.length > 0) {
                const valorTotal = vf.vf.reduce((preVf, v) => preVf + Number(v.value), 0)
                return valorTotal
            }
        }
        return ``
    }

    const startBet = (user, valores) => {
        console.log('valores ', valores)
        if (user) {
            let valorTotal = valores.reduce((total, v) => {
                return total + Number(v.value)
            }, 0)

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

    return <button onClick={() => { startBet(props.user, props.vf) }} className="w-full bg-green-500 hover:bg-green-400 cursor-pointer font-semibold text-md text-green-900 hover:text-green-100 uppercase p-3">Fazer Aposta <ValorFinal vf={props.vf} /> </button>
}