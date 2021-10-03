import Head from 'next/head'
import Layout from '../components/layouts/home/layout'
import SoccerLive from '../components/bet/football/live'
import NoteBets from '../components/bet/football/noteBets'
import { useState } from 'react'
import { getSession } from 'next-auth/client'
import getUser from '../utills/getUser.js'
import ListMenu from '../components/layouts/home/listMenu'
import useSWR from 'swr'
import BlockBet from '../components/BlockBet'
import axios from 'axios'
import { VscLoading } from 'react-icons/vsc'
import Main from '../components/main'

export default function Home(props) {

  const [listBetState, setListBetState] = useState([])
  const [getTimeBet, setTimeBet] = useState([])
  const [getValorFinal, setValorFinal] = useState(0)
  const [getLeague, setLeague] = useState({})
  const LiveUpdate = () => {
    const urlSoccerApi = '/api/betApi/soccer'
    const fetcher = async () => {
      const data = await axios.get(urlSoccerApi)
      if (getTimeBet.length == 0) {
        setTimeBet({
          'select': 'AO VIVO',
          'response': data.data.soccer.response
        })
      }
      return data
    }
    const { data, error } = useSWR(urlSoccerApi, fetcher, { refreshInterval: (1000 * 60 * 5) })
    if (error) {
      console.log(error)
      return <BlockBet title="CARREGANDO">
        <span className="text-center bg-yellow-300">Carregamento Falhou <button >Carregar Novamente ?</button></span>
      </BlockBet>
    }
    if (!data) return <>
      <BlockBet title="CARREGANDO">
        loading...
      </BlockBet>
    </>
    if (getTimeBet.length == 0) {
      return <>
        <BlockBet title="CARREGANDO">
          <VscLoading className="animate-spin" />
          <h1>No momento, não há eventos ao vivo deste esporte para mostrar.</h1>
        </BlockBet>
      </>
    }
    return <>
      <BlockBet title={getTimeBet.select} id="live">
        <SoccerLive data={data} getTimeBet={getTimeBet.response} setTimeBet={setTimeBet} setListBetState={setListBetState} listBetState={listBetState} getValorFinal={getValorFinal} setValorFinal={setValorFinal} />
      </BlockBet>
    </>
  }
  return (
    <>
      <Head>
        <title>Betbol - Futebol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout userString={props.userString}>
        <div className="page grid grid-cols-12 bg-gray-100">
          <div className="col-span-full md:col-span-2 mt-3 mx-3">
            <ListMenu getLeague={getLeague} setLeague={setLeague} setTimeBet={setTimeBet} />
          </div>
          <div className="mx-3 mt-3 md:col-span-7 col-span-full">
            {/* <LiveUpdate /> */}
            <Main />
          </div>
          <div className="mx-3 md:col-span-3 col-span-full">
            <NoteBets userString={props.userString} setListBetState={setListBetState} listBetState={listBetState} getValorFinal={getValorFinal} setValorFinal={setValorFinal} />
          </div>
        </div>
      </Layout>
    </>
  )
}
export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session) {
    const user = await getUser(session.user.email)
    const userString = JSON.stringify(user)
    if (typeof user.user == 'undefined') {
      return {
        redirect: {
          destination: '/register',
          permanent: false,
        },
      }
    } if (user.nivel == 5) {
      return {
        redirect: {
          destination: '/adm/dash',
          permanent: false,
        },
      }
    }
    return {
      props: { userString },
    }
  }
  return {
    props: {},
  }
}