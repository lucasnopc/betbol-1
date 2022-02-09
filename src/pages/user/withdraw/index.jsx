import Head from 'next/head'
import serverSidePropsClient from '../../../utills/serverSitePropsClient'
import { useMercadopago } from 'react-sdk-mercadopago';
import LayoutUser from '../../../components/layouts/user';
import Link from 'next/link'
import useUser from '../../../utills/hooks/useUser';

export default function deposit(props) {
  const user = useUser(props.userString)

  return (
    <>
      <Head>
        <title>Betbol - Depśito</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutUser userString={user}>
        <div className="mx-3 mt-3 md:col-span-7 col-span-full bg-white shadow-md">
          <h2 className="page-title border-b border-gray-100">Saques</h2>
          <span className="p-2">Não ha saques disponíveis no momento.</span>
          <div>
          {!user.payment_method && <span className='inline-block w-auto bg-gray-50 text-yellow-700 rounded-md shadow-sm my-3'>Não há modos de recebimento disponíveis. <Link href={'/user/withdraw/paymethods'}><a className='font-normal text-gray-800 uppercase underline'>Adicione sua chave PIX.</a></Link></span>}
          </div>
          <p>Adicione a chave PIX da conta que irá receber seus lucros.</p>
          <Link href="/user/withdraw/paymethods"><a className='cursor-pointer p-1 hover:bg-green-200 bg-green-100 m-0.5 text-green-800 font-normal border border-green-300'>Inserir chave PIX</a></Link>
         

        </div>
      </LayoutUser>
    </>
  )
}
export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}