import Head from 'next/head'
import LayoutUser from '../../../components/layouts/user'
import serverSidePropsClient from '../../../utills/serverSitePropsClient'
import { useState } from 'react';
import useUser from '../../../utills/hooks/useUser'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import QrcodeComponent from './QrcodeComponent';
import AllPays from './allpays';

export default function withDraw(props) {
  const [qrCode , setQrCode] = useState({})
  const [valueDeposit, setValueDeposit] = useState(10.00)
  const user = useUser(props.userString)

  const deposit = async valueDeposit => {
    const qrcode = await axios.post(`/api/pix/reqqrcode?value=${valueDeposit}`)
    setQrCode(qrcode.data)
  }
console.log(qrCode)
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
              <span className='block text-center rounded-md p-2 cursor-pointer uppercase bg-primary text-white font-semibold w-full my-1' onClick={() => deposit(valueDeposit.toFixed(2))}>Fazer Depósito</span>
            </div>
            <div className=''>
              <div id="paym">
                  <AllPays />
              </div>
            </div>
          {qrCode.qrcodeResponde && <QrcodeComponent user={user} valueDeposit={valueDeposit} qrCode={qrCode.qrcodeResponde} setQrCode={setQrCode} txid={qrCode.cobResponde.txid} />}
          </div>
        </div>
        <ToastContainer />
      </LayoutUser>
    </>
  )
}
export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}