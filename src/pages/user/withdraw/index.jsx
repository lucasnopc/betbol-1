import Head from 'next/head'
import serverSidePropsClient from '../../../utills/serverSitePropsClient'
import { useMercadopago } from 'react-sdk-mercadopago';
import LayoutUser from '../../../components/layouts/user';
import Link from 'next/link'
import useUser from '../../../utills/hooks/useUser';

export default function withdraw(props) {
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
          <span className="p-2">Solicite o saque no bilhete premiado.</span>
          <div>
          {/* {!user.payment_method && <span className='inline-block w-auto bg-gray-50 text-yellow-700 rounded-md shadow-sm my-3'>Não há modos de recebimento disponíveis. <Link href={'/user/withdraw/paymethods'}><a className='font-normal text-gray-800 uppercase underline'>Adicione sua chave PIX.</a></Link></span>} */}
          </div>
          <Link href="/user/withdraw/paymethods"><a className='cursor-pointer'>Inserir chave PIX</a></Link>

        </div>
      </LayoutUser>
    </>
  )
}
export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}