import Head from 'next/head'
import Layout from '../components/layouts/home/layout'
import { soccerfake } from '../utills/responselive'
import SoccerLive from '../components/bet/football/live'
import { useState, useEffect } from 'react'
import ValorFinal from '../utills/valofFinal'
import axios from 'axios'
import useSWR from 'swr'

export default function Home() {

  // const soccer_api = axios.get('/api/betApi/soccer')

  const [listBetState, setListBetState] = useState([])
  const [getValorFinal, setValorFinal] = useState(0)
  useEffect(() => {
    setValorFinal(ValorFinal(listBetState))
  })

  const soccer = soccerfake
  const ligas = []
  for (let i = 0; i < soccer.length; i++) {
    let ligaIgual = false;
    for (let j = 0; j < i; j++) {
      if (ligas[j] && soccer[i].league.id == ligas[j].liga.id) {
        ligas[j].games.push({
          teams: soccer[i].teams,
          goals: soccer[i].goals
        })
        ligaIgual = true
        break
      }
    }
    if (!ligaIgual) {
      ligas.push({
        liga: soccer[i].league,
        games: [{
          teams: soccer[i].teams,
          goals: soccer[i].goals,
          odds: soccer[i].odds.response,
          id: soccer[i].fixture.id
        }]
      })
    }
  }


  return (
    <>
      <Head>
        <title>Betbol - Futebol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <SoccerLive soccer={soccer} ligas={ligas} setListBetState={setListBetState} listBetState={listBetState} valorFinal={getValorFinal} />
      </Layout>
    </>
  )
}
// export async function getServerSideProps(context) {
//   const soccer_res = await fetch(`${process.env.APISPORT}/fixtures?live=all`, 
//   {
//     headers: {
//       'Content-Type': 'application/json',
//       'x-apisports-key': process.env.APISPORT_KEY
//     },
//     method: 'GET'
//   })
//   const soccer = await soccer_res.json()

//   for(let i = 0; i < soccer.response.length; i++) {
//     const odds_res = await fetch(`${process.env.APISPORT}/odds?fixture=${soccer.response[i].fixture.id}&bookmaker=6&bet=1`, 
//   {
//     headers: {
//       'Content-Type': 'application/json',
//       'x-apisports-key': process.env.APISPORT_KEY
//     },
//     method: 'GET'
//   })
//   const odds = await odds_res.json()
//     soccer.response[i].odds = odds
//   }
//   return {
//     props: { soccer },
//   }
// }