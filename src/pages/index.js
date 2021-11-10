import Head from 'next/head'
import Layout from '../components/layouts/home/layout'
import NoteBets from '../components/bet/football/noteBets'
import { useEffect, useState } from 'react'
import ListMenu from '../components/layouts/home/listMenu'
import serverSidePropsClient from '../utills/serverSitePropsClient'
import { useStore } from '../context/store'
import { fetchAlive } from '../utills/fetchAlive'
import SelectOddsBets from '../components/main/SelectOddsBets'
import Fix from '../components/main/Fix'

export default function Home(props) {

  const [listBetState, setListBetState] = useState([])
  const [getValorFinal, setValorFinal] = useState(0)
  const [getLeague, setLeague] = useState({})
  const [live, setLive] = useState([])
  const [bets, setBets] = useState(1)
  const { setFixState, fix } = useStore()

  useEffect(() => {
    const fetcherAlive = async () => {
      const fetch = await fetchAlive()
      setLive(fetch.soccer.response)
    }
    fetcherAlive()
  }, [])
  useEffect(() => {
    setFixState(live)
  }, [live])
  return (
    <>
      <Head>
        <title>Betbol - Futebol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout userString={props.userString}>
        <div className="page grid grid-cols-12">
          <div className="col-span-full md:col-span-2 mt-3 mx-3">
            <ListMenu getLeague={getLeague} setLeague={setLeague} />
          </div>
          <div className="mx-3 mt-3 md:col-span-7 col-span-full bg-white shadow-md">
            <h2 className="page-title">AO VIVO</h2>
            <SelectOddsBets setBets={setBets} bets={bets} />
            <div className="overflow-auto">
              {live && live.map(f => {
                return <Fix key={f.fixture.id} fix={f} bets={bets} />
              })}
            </div>
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
  const ret = serverSidePropsClient(context)
  return ret
}