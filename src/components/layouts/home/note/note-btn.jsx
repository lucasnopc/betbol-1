import { HtmlEmailSendBet } from '../../../../utills/htmlEmailSendBet'
import axios from 'axios'
import { useStore } from '../../../../context/store'
import { ConfirmDialog } from '../../../confirm-dialog'
import { useState } from 'react'
import ItemBetNote from './item-bet-note'
import { useRouter } from 'next/router'
import FullLoading from '../../../fullloading'
import userUpdate from '../../../../utills/userUpdate'

export default function NoteBtn(props) {
    const { user } = useStore()
    const [ loading , setLoading ] = useState(false)
    const toast = props.toast
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const { note, clearNote } = useStore()
    
    const ValorFinal = (vf) => {
        if (vf.vf) {
            if (vf.vf.length > 0) {
                return `R$ ${vf.vf}`
            }
        }
        return ``
    }

    const startBet = (user, valor, retornoPotencial) => {
        setLoading(true)
        axios.post('/api/betApi/toBet', {
            points: user.points,
            email: user.email,
            bets: note,
            potencialReturn: retornoPotencial,
            value: valor
        })
            .then(function (response) {
                axios.post('/api/email/send', {
                    subject: `${process.env.NEXT_PUBLIC_APP_NAME} - Aposta Realizada`,
                    html: HtmlEmailSendBet(note, process.env.NEXTAUTH_URL),
                }).then(async function (response) {
                    setLoading(false)
                        toast.success("Aposta Realizada com sucesso!",{
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: true,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            })
                        
                        clearNote()
                        props.setToggleNoteBets(false)
                       await userUpdate(user.email)
                        router.push(`/user/hystory`)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            })
            .catch(function (error) {
                console.log(error);
            });
        //limpar note
    }

    return <><button onClick={() => {
        if (props.vf < user.points) {
            if (props.vf < props.config.min_value) {
                toast.warn(`O valor mínimo para uma aposta é de ${props.config.min_value}, por favor aumente sua aposta.`,{
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    })
            }else {
                if (note.length > 0) {
                    setOpen(true)
                } else {
                    toast.info("Primeiro faça uma escolha.",{
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        })
    
                }
            }
        } else {
            toast.warn("Você não tem pontos suficientes, faça um depósito.",{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        }

    }} className="w-full bg-primary hover:bg-primary-ligth cursor-pointer font-semibold text-md text-white uppercase p-3">Fazer Aposta <ValorFinal vf={props.vf} /><span className="text-xs font-bold block text-gray-100">Potencial Retorno: {props.retornoPotencial}</span> </button>
        <ConfirmDialog open={open} setOpen={setOpen} onConfirm={() => {
                startBet(user, props.vf, props.retornoPotencial)
        }}>
            {/* <h1 className="font-bold uppercase">Confirmar Aposta ? R${props.vf.toFixed(2)}</h1> */}
            <div className="overflow-scroll max-h-64">
                {note.map((bet, indice) => {
                    return <ItemBetNote setVf={props.setVf} key={bet.fix.fixture.id} bet={bet} indice={indice} vf={props.vf} />

                })}
            </div>
        </ConfirmDialog>
        {loading && <FullLoading />}
    </>
}