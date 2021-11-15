import Head from 'next/head'
import Layout from '../components/layouts/home/layout'
import { useEffect, useState } from 'react'
import serverSidePropsClient from '../utills/serverSitePropsClient'
import { useStore } from '../context/store'
import useFetch from '../utills/useFetch'
import FullLoading from '../components/fullloading'
import Alive from '../components/main/Alive'

export default function Home(props) {

  const [live, setLive] = useState([])
  const [bets, setBets] = useState(1)
  const { setFixState } = useStore()
  const { data, error } = useFetch(`/api/betApi/soccer`)

  useEffect(() => {
    if (data) setLive(data.soccer.response)

  }, [data])

  useEffect(() => {
    setFixState(live)
  }, [live])

  if (error) return console.log(error)
  if (!data) return <FullLoading />

  return (
    <>
      <Head>
        <title>Betbol - Futebol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout userString={props.userString}>
        <Alive live={live} bets={bets} setBets={setBets} />
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}