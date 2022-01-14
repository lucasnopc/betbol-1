import useFetch from '../../../utills/useFetch'
import { format } from 'date-fns'
import { MdOutlineSchedule, MdMonetizationOn, MdDangerous, MdDoneOutline } from 'react-icons/md'
import axios from 'axios'
import { ImSpinner9 } from 'react-icons/im'

export default function AllPays(props) {
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
        console.log('cancel pay ', ) 
      await axios.delete('/api/mp', {id: pay.id})
    }

    return <>
        {payments.reverse().map(pay => {
            const date = format(new Date(pay.date), 'dd.MM.yy')
            return <div className="bg-gray-100 p-2 shadow-sm my-1 block md:grid md:grid-cols-3" key={pay.id}>
                <div className="inline-block md:block"><MdOutlineSchedule className="inline-block" /> {date}</div>
                <div className="inline-block md:block"><MdMonetizationOn className="inline-block" /> R${pay.points.toFixed(2)}</div>
                <div>
                    {!pay.received && pay.values && pay.values.collection_status == 'approved' && <button onClick={e => receiverPoints(pay, e)} className="float-right uppercase font-semibold text-sm text-white bg-primary hover:bg-green-400 p-1">Resgatar Pontos</button>
                    }
                    {pay.received && <span className="float-right uppercase font-semibold text-sm text-white bg-gray-300 p-1 cursor-not-allowed">
                        Recebido
                    </span>}
                    {!pay.values && <div className="md:float-right"><button onClick={e => cancelPay(pay)} className="inline-block uppercase font-semibold text-sm text-white bg-red-600 hover:bg-red-400 p-1">Cancelar</button><button onClick={e => finishPay(pay, e)} className="inline-block uppercase font-semibold text-sm text-white bg-primary hover:bg-green-400 p-1">Finalizar</button></div>}
                    {pay.values && pay.values.collection_status == 'pending' && <span className="md:float-right uppercase font-semibold text-sm text-white bg-yellow-500 p-1">Pagamento Pendente</span>}
                    {pay.values && pay.values.collection_status == 'rejected' && <span className="md:float-right uppercase font-semibold text-sm text-white bg-red-600 p-1">Pagamento Rejeitado</span>}
                </div>
            </div>
        })}
    </>
}