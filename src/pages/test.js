import Head from 'next/head'
import Layout from '../components/layouts/home/layout'
import { soccerfake } from '../utills/responselive'
import SoccerLive from '../components/bet/football/live'
import { useState, useEffect } from 'react'
import ValorFinal from '../utills/valofFinal'
import { getSession } from 'next-auth/client'
import getUser from '../utills/getUser.js'

export default function Home() {
  

  const [listBetState, setListBetState] = useState([])
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
        <SoccerLive setListBetState={setListBetState} listBetState={listBetState} valorFinal={getValorFinal} />
      </Layout>
    </>
  )
}
export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session) {
    const user = await getUser(session.user.email)
    if (typeof user.user == 'undefined') {
      return {
        redirect: {
          destination: '/register',
          permanent: false,
        },
      }
    }
  }
  return {
    props: {},
  }
}