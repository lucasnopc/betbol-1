import useFetch from '../../../../utills/useFetch'
import { format } from 'date-fns'
import { MdOutlineSchedule, MdMonetizationOn } from 'react-icons/md'
import axios from 'axios'
import { ImSpinner9 } from 'react-icons/im'
import { useState } from 'react'

export default function AllPays(props) {
    const [toggle, setToggle] = useState(false)
    const mercadopago = props.mercadopago

    const url = `/api/payments/getpayments`
    const { data, error } = useFetch(url)   
    if (error) return `ERROR`
    if (!data) return <div className="text-center flex items-center">
        <ImSpinner9 className="text-5xl animate-spin  mx-auto text-primary p-3" />
    </div>
    const payments = data.payments


    const receiverPoints = async (pay, e) => {
        await axios.post('/api/payments/received', { pay, points: props.user.points })
            .then(function (response) {
                location.reload()
            })
    }

    const finishPay = (pay, e) => {
        if (mercadopago) {
            mercadopago.checkout({
                preference: {
                    id: pay.id
                },
                autoOpen: true,
            })
        }
    }

    const cancelPay = async (pay) => {
        const deletedPay = await axios.delete(`/api/mp?id=${pay.id}`)
        // console.log('cancel pay ', pay, deletedPay.data) 
        location.reload()
    }

    return <>
    <div onClick={() => setToggle(!toggle)} className='uppercase font-semibold bg-gray-200 hover:bg-gray-300 cursor-pointer text-sm p-1 rounded-t-md'>Todos pagamentos</div>
       <div className={`${toggle ? `opacity-100` : `opacity-0`} delay-100 transition-opacity`}>
    <div className={`${toggle ? `block` : `hidden`}`}>

        {payments.map(pay => {
            const date = format(new Date(pay.date), 'dd.MM.yy')
            return <div className="bg-gray-100 text-sm shadow-sm my-1 grid grid-cols-3" key={pay.id}>
                <div className="inline-block md:block"><MdOutlineSchedule className="inline-block" /> {date}</div>
                <div className="inline-block md:block"><MdMonetizationOn className="inline-block" /> R${pay.points.toFixed(2)}</div>
                <div>
                    {!pay.received && pay.values && pay.values.collection_status == 'approved' && <button onClick={e => receiverPoints(pay, e)} className="float-right font-semibold text-white bg-primary hover:bg-green-400 p-1">Resgatar Pontos</button>
                    }
                    {pay.received && <span className="float-right font-semibold text-white bg-gray-300 p-1 cursor-not-allowed">
                        Recebido
                    </span>}
                    {!pay.values && <div className="md:float-right"><button onClick={e => cancelPay(pay)} className="inline-block font-semibold text-sm text-red-600 p-1">Cancelar</button><button onClick={e => finishPay(pay, e)} className="inline-block font-semibold text-sm text-primary p-1">Finalizar</button></div>}
                    {pay.values && pay.values.collection_status == 'pending' && <span className="md:float-right font-semibold text-gray-600"> Pendente</span>}
                    {pay.values && pay.values.collection_status == 'rejected' && <span className="md:float-right font-semibold text-red-600">Rejeitado</span>}
                </div>
            </div>
        })}
 </div>
    </div>
    </>
}