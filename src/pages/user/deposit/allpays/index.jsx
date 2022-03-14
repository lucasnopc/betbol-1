import useFetch from '../../../../utills/useFetch'
import { format } from 'date-fns'
import { MdOutlineSchedule, MdMonetizationOn } from 'react-icons/md'
import { ImSpinner9 } from 'react-icons/im'

export default function AllPays() {
    const { data, error } = useFetch(`/api/payments/getpayments`)  
    if (error) return `ERROR`
    if (!data) return <div className="text-center flex items-center">
        <ImSpinner9 className="text-5xl animate-spin  mx-auto text-primary p-3" />
    </div>
    const payments = data.payments

    return <div className='mt-2'>
    <div className='uppercase font-semibold bg-gray-200 text-sm p-1 rounded-t-md'>Depositos</div>
       <div className={` delay-100 transition-opacity`}>
    <div className={``}>
        {payments.map(pay => {
            const date = format(new Date(pay.pix.horario), 'dd.MM.yy | hh:mm')
            return <div className="bg-gray-100 text-sm shadow-sm my-1 flex justify-between px-3 py-1" key={pay._id}>
                <div className="inline-block md:block"><MdOutlineSchedule className="inline-block" /> {date}</div>
                <div className="inline-block md:block text-primary"><MdMonetizationOn className="inline-block" /> R${pay.pix.valor}</div>
            </div>
        })}
 </div>
    </div>
    </div>
}