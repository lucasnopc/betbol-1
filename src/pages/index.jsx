import Head from 'next/head'
import Layout from '../components/layouts/home/layout'
import { useEffect, useState } from 'react'
import serverSidePropsClient from '../utills/serverSitePropsClient'
import { useStore } from '../context/store'
import useFetch from '../utills/useFetch'
import FullLoading from '../components/fullloading'
import Banner from '../components/banner'
import Alive from '../components/main/Alive'
import { format } from 'date-fns'

export default function Home(props) {

  const [live, setLive] = useState([])
  const [master, setMaster] = useState([])
  const { setFixState } = useStore()
  const date =  format(new Date(), 'yyyy-MM-dd')
  const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const { data, error } = useFetch(`/api/betApi/soccer`)
  const { data: data_master, error: error_master } = useFetch(`/api/betApi/soccer?date=${date}&tzid=${tzid}`)

  useEffect(() => {if (data) setLive(data.soccer.response)}, [data])
  useEffect(() => {if (data_master) setMaster(data_master.soccer.response)}, [data_master])

  useEffect(() => {
    setFixState(live)
  }, [live])

  if (error || error_master) return console.log(error)
  if (!data || !data_master) return <FullLoading />
  
  return (
    <>
      <Head>
        <title>Betbol - Futebol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout userString={props.userString}>
        {/* <Banner live={live} /> */}
        <div className="grid gap-0 grid-cols-5">
          <div className="col-span-5 md:col-span-3 md:col-start-1 bg-gray-100">
            <Alive live={live}  title="Futebol Ao vivo" isAlive={true} />
          </div>
          <div className="col-span-5 md:col-span-2 md:col-start-4">
            <Alive live={master} title="Destaques" />
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}