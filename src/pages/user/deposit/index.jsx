import Head from 'next/head'
import LayoutUser from '../../../components/layouts/user'
import serverSidePropsClient from '../../../utills/serverSitePropsClient'
import AllPays from './allpays'
import { useMercadopago } from 'react-sdk-mercadopago'
import { useState } from 'react';
import useUser from '../../../utills/hooks/useUser'
import axios from 'axios'

export default function withDraw(props) {
  const [qrCode , setQrCode] = useState({})
  const [valueDeposit, setValueDeposit] = useState(0.1)
  const user = useUser(props.userString)
  // TEST-6f7c3cbe-bc40-43ca-ab7a-76ba61d93fb9
  // APP_USR-9bee11b4-7b73-4936-8610-9cfa6797e650
  const mercadopago = useMercadopago.v2('TEST-6f7c3cbe-bc40-43ca-ab7a-76ba61d93fb9', {
    locale: 'pt-BR'
  });

  const deposit = async valueDeposit => {
    const qrcode = await axios.get(`https://api-betbol.herokuapp.com`, {value: valueDeposit})
    setQrCode(qrcode.data)
    // const orderData = {
    //   quantity: valueDeposit,
    //   description: `${valueDeposit} Pontos - Betbol`,
    //   price: 1
    // }

    // fetch("/api/mp", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(orderData),
    // })
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (preference) {
    //     if (mercadopago) {
    //       mercadopago.checkout({
    //         preference: {
    //           id: preference.id
    //         },
    //         autoOpen: true,
    //       })
    //     }
    //   })
  }
  return (
    <>
      <Head>
        <title>Betbol - Financeiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutUser userString={user}>
        <div className="mx-3 mt-3 md:col-span-7 col-span-full bg-white">
          <h2 className="page-title border-b border-gray-100">Depósito</h2>
          <div className="">
            <div className=''>
              <span className='font-bold text-lg text-center bg-gray-100 block p-2 mb-1 text-gray-800'>R$ {valueDeposit.toFixed(2)}</span>
              <div className='grid grid-cols-6 gap-1'>
                <div className='uppercase bg-gray-200 hover:bg-gray-300 text-center py-1 text-gray-600 font-bold' onClick={() => setValueDeposit(valueDeposit + 10)}>+10</div>
                <div className='uppercase bg-gray-200 hover:bg-gray-300 text-center py-1 text-gray-600 font-bold' onClick={() => setValueDeposit(valueDeposit + 50)}>+50</div>
                <div className='uppercase bg-gray-200 hover:bg-gray-300 text-center py-1 text-gray-600 font-bold' onClick={() => setValueDeposit(valueDeposit + 100)}>+100</div>
                <div className='uppercase bg-gray-200 hover:bg-gray-300 text-center py-1 text-gray-600 font-bold' onClick={() => setValueDeposit(valueDeposit + 500)}>+500</div>
                <div className='uppercase bg-gray-200 hover:bg-gray-300 text-center py-1 text-gray-600 font-bold' onClick={() => setValueDeposit(valueDeposit + 1000)}>+1000</div>
                <div className='uppercase bg-gray-200 hover:bg-gray-300 text-center py-1 text-gray-600 font-bold' onClick={() => setValueDeposit(0)}>Limpar</div>
              </div>
              <span className='block text-center rounded-md p-2 cursor-pointer uppercase bg-primary text-white font-semibold w-full my-1' onClick={() => deposit(valueDeposit)}>Fazer Depósito</span>
            </div>
            <div className=''>
              <div id="paym">
                {/* <AllPays user={user} mercadopago={mercadopago} /> */}
              </div>
            </div>
          {qrCode.imagemQrcode && <div id="qrcode" className='bg-black bg-opacity-70 absolute flex items-center justify-center w-full h-full top-0 left-0 z-40'>
            <div className='w-3/5 h-3/5 p-2 bg-white flex flex-col'>
             <h2 className='font-semibold text-base text-center'>Faça o pagamento de R$ {Number(valueDeposit).toFixed(2)} via Pix com o qrcode abaixo</h2>    
              <div className='flex justify-center items-center'>
                <img src={qrCode.imagemQrcode} className="min-h-full" />
              </div>
              <span className='text-red-600 hover:text-red-700 text-center font-semibold cursor-pointer' onClick={() => setQrCode({})}>[x] fechar</span>
            </div>
          </div>}
          </div>
        </div>
      </LayoutUser>
    </>
  )
}
export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}