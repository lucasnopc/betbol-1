import Link from 'next/link'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Bilhete from '../../../../components/bilhete';
import { useStore } from '../../../../context/store';

export default function Rescue({ id }) {
  const { user } = useStore()
  const [bilhete, setBilhete] = useState({})
  
  const handlerGetBilhete = async (id) => {
    const data = await axios(`http://localhost:3000/api/sis/bilhete?id=${id}`)
    const bilheteData = await data.data
    if (bilheteData.result) {
      return bilheteData
    }
}

useEffect(() => {
  handlerGetBilhete(id).then(res => {
    setBilhete(res) 
  })
}, [id])

  return <>
        <div className="mx-3 mt-3 md:col-span-7 col-span-full bg-white">
          <h2 className="page-title border-b border-gray-100">Solicitar saque para o bilhete <span className='text-gray-700'>${id}</span></h2>
          <div>
           {!user.payment_method && <span className='inline-block w-auto bg-gray-50 text-yellow-700 rounded-md shadow-sm my-3'>Não há modos de recebimento disponíveis. <Link href={'/user/withdraw/paymethods'}><a className='font-normal text-gray-800 uppercase underline'>Adicione sua chave PIX.</a></Link></span>}
          </div>
          <p>Clique em "Resgatar para Bônus", para re-investir seus ganhos.</p>
          {user.payment_method && <>
          <p>Clique em "Resgatar para pix", para solicitar recebimento do seu ganho via PIX.</p>
          <span className='cursor-pointer p-1 bg-blue-100 hover:bg-blue-200 m-0.5 text-blue-800 font-normal border border-blue-300'>Resgatar para bônus</span><br />
          <span className='mt-5 cursor-pointer p-1 hover:bg-green-200 bg-green-100 m-0.5 text-green-800 font-normal border border-green-300'>Resgatar para PIX</span></>}
          {bilhete.result && <div className="mt-2"><Bilhete bilhete={bilhete.result} /></div>}
          <div className='mt-3'>
          </div>
        </div>
      </>
}
