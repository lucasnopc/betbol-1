import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios';
import { useStore } from '../../../../context/store';
import { ToastContainer, toast } from 'react-toastify';

export default function Rescue({ id, value }) {
  const router = useRouter()
  const { user } = useStore()

  const setRescue = async (method, _id, value) => {
    const body = { _id, method, points: user.points + value }
    const data = await axios.post(`/api/user/rescue`, body)
    if (data.status == 200) {
      console.log(data)

      toast.success("Transferência solicitada, o procecimento pode levar até 48 horas, você será notificado!",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }
    setTimeout(() => router.push('/user/withdraw'), 2000)
    
  }
  return <>
    <div className="mx-3 mt-3 md:col-span-7 col-span-full bg-white">
      <h2 className="page-title border-b border-gray-100">Como deseja resgatar seu lucro ? <span className='text-gray-700'>${id}</span></h2>
      {!user.payment_method && <span className='inline-block w-auto bg-gray-50 text-yellow-700 rounded-md shadow-sm my-3'>Não há modos de Transferência disponíveis. <Link href={'/user/withdraw/paymethods'}><a className='font-normal text-gray-800 uppercase underline'>Adicione sua chave PIX.</a></Link></span>}
      <div className='flex justify-between'>

        <div onClick={() => { setRescue('bonus', id, value) }} className='cursor-pointer p-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-normal border border-gray-300 w-full'>
          <p>Re-invista seus ganhos e aumente suas chances.</p>
        </div>
        <div onClick={() => { setRescue('pix', id, value) }} className='cursor-pointer p-1 hover:bg-gray-200 bg-gray-100 text-gray-800 font-normal border border-gray-300 w-full'>

          {user.payment_method && <>
            <p>Solicitar transferência via PIX.</p>
          </>}
</div>
      </div>
    </div>
    <ToastContainer />
  </>
}
