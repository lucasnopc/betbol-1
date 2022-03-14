import Head from 'next/head'
import Layout from '../components/layouts/home/layout'
import { useEffect, useState } from 'react'
import serverSidePropsClient from '../utills/serverSitePropsClient'
import useFetch from '../utills/useFetch'
import FullLoading from '../components/fullloading'
import Highlights from '../components/main/highlights'
import { format } from 'date-fns'
import useUser from '../utills/hooks/useUser'

export default function Home(props) {
  const user = useUser(props.userString)
  const [live, setLive] = useState([])
  const [master, setMaster] = useState([])
  const date =  format(new Date(), 'yyyy-MM-dd')
  const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const { data, error } = useFetch(`/api/betApi/live?tzid=${tzid}`)
  const { data: data_master, error: error_master } = useFetch(`/api/betApi/soccer?date=${date}&tzid=${tzid}`)

  useEffect(() => {if (data) setLive(data.soccer.response)}, [data])
  useEffect(() => {if (data_master) setMaster(data_master.soccer.response)}, [data_master])

  if (error || error_master) return console.log(error)
  if (!data || !data_master) return <FullLoading />

  return (
    <>
      <Head>
        <title>Betbol - Futebol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout userString={user}>
        <div className="grid gap-0 grid-cols-5">
          {/* <FixProvider> */}
          <div className="col-span-5 md:bg-gray-100">
            {/* <Banner live={master} />   */}
            {/* <LiveFix live={live} /> */}
          </div>
          <div className="col-span-5">
          { master.length > 0 && <Highlights highlights={master} title="Destaques" /> }
          </div>
          {/* </FixProvider> */}
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}