import Head from 'next/head'
import Layout from '../components/layouts/home/layout'
import SoccerLive from '../components/bet/football/live'
import NoteBets from '../components/bet/football/noteBets'
import { useState, useEffect } from 'react'
import ValorFinal from '../utills/valofFinal'
import { getSession } from 'next-auth/client'
import getUser from '../utills/getUser.js'

export default function Home(props) {
//   const user = JSON.parse(props.userString)
// console.log(user)

  const [listBetState, setListBetState] = useState([])
  const [getTimeBet, setTimeBet] = useState([])
  const [getValorFinal, setValorFinal] = useState(0)
  useEffect(() => {
    setValorFinal(ValorFinal(listBetState))
  })

  return (
    <>
      <Head>
        <title>Betbol - Futebol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="flex flex-col md:flex-row px-4 select-none">
          <SoccerLive getTimeBet={getTimeBet} setTimeBet={setTimeBet} setListBetState={setListBetState} listBetState={listBetState} />
          <NoteBets setListBetState={setListBetState} listBetState={listBetState} valorFinal={getValorFinal} />
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
    }if (user.nivel == 5) {
      return {
        redirect: {
          destination: '/adm/dash',
          permanent: false,
        },
      }
    }
    return {
      props: {userString},
    }
  }
  return {
    props: {},
  }
}