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
        setTimeBet(data.data.soccer.response)
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
        <BlockBet title="SEM EVENTOS">
          <h1>No momento, não há eventos ao vivo deste esporte para mostrar.</h1>
        </BlockBet>
      </>
    }
    return <>
      <BlockBet title="AO VIVO">
        <SoccerLive data={data} getTimeBet={getTimeBet} setTimeBet={setTimeBet} setListBetState={setListBetState} listBetState={listBetState} getValorFinal={getValorFinal} setValorFinal={setValorFinal} />
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
        <div className="page grid grid-cols-7">
          <div className="col-span-1 mt-3 ml-3 border border-gray-200 rounded-md">
            <ListMenu getLeague={getLeague} setLeague={setLeague} setTimeBet={setTimeBet} />
          </div>
          <div className="col-span-6">
            <div className="flex flex-col md:flex-row px-4 select-none">

              <LiveUpdate />
              <NoteBets setListBetState={setListBetState} listBetState={listBetState} getValorFinal={getValorFinal} setValorFinal={setValorFinal} />
            </div>
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