import Head from 'next/head'
import serverSidePropsClient from '../../../utills/serverSitePropsClient'
import useFetch from '../../../utills/useFetch'
import FullLoading from '../../../components/fullloading'
import ItemListTicket from '../../../components/altickets/itemlistticket'
import LayoutUser from '../../../components/layouts/user'
import { useState } from 'react'

export default function Home(props) {
  const [statusSearch, setStatusSearch] = useState('Todos');
  const user = JSON.parse(props.userString)
  const { data, error } = useFetch(`/api/user/betsHistory?email=${user.email}`)

  if (error) return console.log(error)
  if (!data) return <FullLoading />
  return (
    <>
      <Head>
        <title>Betbol - Futebol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutUser userString={props.userString}>
      <div className="p-2">
        <h1 className="font-bold text-sm">Histórico de Apostas</h1>
        <div>
        <span onClick={ () => setStatusSearch('Todos')}  className={`${statusSearch == "Todos" ? `bg-gray-600 text-white` : `bg-gray-200 hover:bg-gray-300`} uppercase text-xs font-semibold p-0.5 cursor-pointer transition-colors`}>Todos</span>
        <span onClick={ () => setStatusSearch('Ganhou')} className={`${statusSearch == "Ganhou" ? `bg-green-600 text-white` : `bg-gray-200 hover:bg-gray-300`} uppercase text-xs font-semibold p-0.5 ml-1 cursor-pointer transition-colors`}>Ganhou</span>
        <span onClick={ () => setStatusSearch('Perdeu')} className={`${statusSearch == "Perdeu" ? `bg-red-600 text-white` : `bg-gray-200 hover:bg-gray-300`} uppercase text-xs font-semibold p-0.5 cursor-pointer transition-colors`}>Perdeu</span>
      </div>
      <div className="bg-gray-100 flex justify-between px-2 border-b border-gray-200">
        <span className="text-xs font-semibold text-gray-500 uppercase">
          Data | Hora
        </span>
        <span className="text-xs font-semibold text-gray-500 uppercase">
          Escolhas
        </span>
        <span className="text-xs font-semibold text-gray-500 uppercase">
          Status
        </span>
      </div>
      <div className="h-36 overflow-auto">
            {data &&
          data.betHistory.reverse().map((bi) => {
            return (
              <ItemListTicket
                key={bi._id}
                bi={bi}
                statusSearch={statusSearch}
              />
            );
          })}
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