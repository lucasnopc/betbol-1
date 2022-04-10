import Head from 'next/head'
import serverSidePropsClient from '../../../utills/serverSitePropsClient'
import LayoutUser from '../../../components/layouts/user';
import Link from 'next/link'
import useUser from '../../../utills/hooks/useUser';
import useFetch from '../../../utills/useFetch';
import FullLoading from '../../../components/fullloading';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default function withdraw(props) {
  const user = useUser(props.userString)
  const [onlyPaysWithState, setOnlyPaysWithState] = useState([])
  const { data, error } = useFetch(`/api/user/betsHistory?email=${user.email}`)
  useEffect(() => {
    if (data) {
      const onlypaysLocal = []
      for (var m in data.betHistory) {
        if (data.betHistory[m].status) {
          onlypaysLocal.push(data.betHistory[m])
        }
      }
      setOnlyPaysWithState(onlypaysLocal)
    }
  }, [data])
  if (error) return console.log(error)
  if (!data) return <FullLoading />

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME} - Saque</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutUser userString={user}>
        <div className="mx-3 mt-3 md:col-span-7 col-span-full bg-white shadow-md">
          <h2 className="page-title border-b border-gray-100">Saques</h2>
          <div className='flex justify-between'>
            <Link href="/user/withdraw/paymethods"><a className='cursor-pointer bg-primary hover:bg-primary-ligth block text-white font-semibold p-2'>Inserir chave PIX</a></Link>
          </div>
          <div>{onlyPaysWithState && onlyPaysWithState.map(m => {
            const date = format(new Date(m.status.date), 'dd/MM/yyyy')
            console.log('date', date)
            return <div className='text-sm font-semibold uppercase my-1 p-1 bg-gray-200 border-b border-gray-200 items-center flex justify-between' key={m.status.date}>
              <div className="flex flex-col">
              <div>
                Status: {m.status.state == 'request' ? <span className=''>Transferência solicitada no dia {date}!</span> : ``}
                {m.status.state == 'payment_made' ? <span className='text-primary'>{date} Transferência efeituada! </span> : ``}
                {m.status.state == 'deny' ? <span className=''>{date} Transferência negado, revise sua chave pix!</span> : ``}
              </div>
              <div>
                <span className=''>Comprovante: {m.status.code}</span>
              </div>
              </div>
              <span className=''>Método: {m.status.method}</span>
              <span className=''>Valor: R$ {Number(m.potencialReturn).toFixed(2)}</span>
            </div>
          })}
            {onlyPaysWithState.length == 0 && <div className='text-base font-semibold p-2'>
              Não há Transferências programados, primeiramente solicite o saque no <Link href="/user/hystory">bilhete premiado.</Link>
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