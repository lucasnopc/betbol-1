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
        <title>Betbol - Atualize seus dados</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutUser userString={props.userString}>
      <div className="p-2 w-10/12 mx-auto">
    <h1 className='text-lg font-semibold'>Seus dados</h1>
    </div>
      </LayoutUser>
    </>
  )
}

export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}