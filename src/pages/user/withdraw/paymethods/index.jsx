import Head from 'next/head'
import serverSidePropsClient from '../../../../utills/serverSitePropsClient'
import LayoutUser from '../../../../components/layouts/user'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/router'
import useUser from '../../../../utills/hooks/useUser'

export default function payMethods(props) {
  const user = useUser(props.userString)
  const router = useRouter()
  const { register, handleSubmit } = useForm()

  const setPix = async data => {
    const postUrl = "/api/user/paymethods"
    const resSetPix = await axios.post(postUrl, { data })
    if(resSetPix.status == 203) {
      alert('Pix atualizado com sucesso')
      router.push('/user/hystory')
    }
  }
  return (
    <>
      <Head>
        <title>Betbol - Método de recebimento PIX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutUser userString={user}>
        <div className="w-10/12 mx-auto p-2 mt-3 md:col-span-7 col-span-full bg-white shadow-md">
          <h2 className="page-title border-b border-gray-100">Método de recebimento PIX</h2>
        <form onSubmit={handleSubmit(setPix)} className='flex flex-col'>
         Chave Pix      <input {...register("pix", { required: true })}  defaultValue={user.payment_method ? user.payment_method.pix : ``} className='border border-gray-200 p-1 focus:border-gray-400 focus:outline-none' type="text" />
         Nome Completo  <input {...register("name", { required: true })} defaultValue={user.payment_method ? user.payment_method.name: ``} className='border border-gray-200 p-1 focus:border-gray-400 focus:outline-none' type="text" />
                        <input type="submit" value="Salvar" className='mt-2 p-1 cursor-pointer hover:bg-primary font-normal hover:text-white' />
        </form>
        <div className='flex flex-col divide divide-gray-400'>
        {user.payment_method &&<div className='flex justify-between p-1 bg-gray-50'>
            <span>{user.payment_method.pix}</span>
            <span>{user.payment_method.name }</span>
            <div className='text-left'>
              {/* <span className="p-0.5 bg-red-600 hover:bg-red-500 text-white flex items-center justify-center font-bold rounded-full w-4 h-4 text-xs">x</span> */}
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