import useFetch from '../../../utills/useFetch'
import { format } from 'date-fns'
import { MdOutlineSchedule, MdMonetizationOn, MdDangerous, MdDoneOutline } from 'react-icons/md'
import axios from 'axios'
import { ImSpinner9 } from 'react-icons/im'
import { useEffect, useState } from 'react'

export default function AllPays(props) {
    const [mercadoPago, setMercadopago] = useState()
    useEffect(() => {
        let { MercadoPago } = window
        const instMercadopago = new MercadoPago(`TEST-6f7c3cbe-bc40-43ca-ab7a-76ba61d93fb9`, {
          locale: 'pt-BR'
        });
        setMercadopago(instMercadopago)
      }, [])

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
        console.log('finishpay ?', mercadoPago, pay, e)
        if (mercadoPago) {
            const checkout = mercadoPago.checkout({
              preference: {
                id: pay.id
              },
              autoOpen: true,
            })
          }
    }
    const status = (value) => {
        if (value) {
            if (value.status = `approved`) return true
            return false
        }
    }
    return <>
        {payments.reverse().map(pay => {
            const date = format(new Date(pay.date), 'dd.MM.yy')
            return <div className="bg-gray-100 p-2 shadow-sm my-1 block md:grid md:grid-cols-4" key={pay.id}>
                <div className="inline-block md:block"><MdOutlineSchedule className="inline-block" /> {date}</div>
                <div className="inline-block md:block"><MdMonetizationOn className="inline-block" /> R${pay.points.toFixed(2)}</div>
                <div className={`${status(pay.values) ? `text-green-500` : `text-red-600 md:block inline-block`}`} >STATUS: {status(pay.values) ? <MdDoneOutline className="inline-block text-green-500" /> : <MdDangerous className="inline-block text-red-600" />}</div>
                <div> {status(pay.values) && !pay.received && <button onClick={e => receiverPoints(pay, e)} className="float-right uppercase font-semibold text-sm text-white bg-primary hover:bg-green-400 p-1">Resgatar Pontos</button>
                }
                    {pay.received && <span className="float-right uppercase font-semibold text-sm text-white bg-gray-300 p-1 cursor-not-allowed">
                        Recebido
                    </span>}
                    {!pay.values && <button onClick={e => finishPay(pay, e)} className="md:float-right uppercase font-semibold text-sm text-white bg-primary hover:bg-green-400 p-1">Finalizar Pagamento</button>}
                </div>
            </div>
        })}
    </>
}