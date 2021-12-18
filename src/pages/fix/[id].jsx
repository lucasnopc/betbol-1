import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import { useEffect, useState } from 'react'
import serverSidePropsClient from '../../utills/serverSitePropsClient'
import { useStore } from '../../context/store'
import useFetch from '../../utills/useFetch'
import FullLoading from '../../components/fullloading'
import { useRouter } from 'next/router'
import { oddBets } from '../../utills/oddBets'
import Button from '../../components/main/Button'
import { FixProvider } from '../../context/fix'

export default function Fix(props) {
  const router = useRouter()
  const { id } = router.query
  const urlFix = `/api/betApi/fixture/${id}/`
  const [live, setLive] = useState([])
  const [bets, setBets] = useState(1)
  const { setFixState } = useStore()
  const { data, error } = useFetch(urlFix)

  useEffect(() => {
    if (data) setLive(data)

  }, [data])

  useEffect(() => {
    setFixState(live)
  }, [live])

  if (error) return console.log(error)
  if (!data) return <FullLoading />
  const { res_fixture, odds } = data
  let oddsValues = []
  if (odds.bookmakers[0].bets.length > 0) {
    oddsValues = odds.bookmakers[0].bets
  }
  const oddValueTranslations = []
  oddsValues.map(value => {
    for (let i = 0; i < oddBets.length; i++) {
      if (oddBets[i].id == value.id) {
        value.name = oddBets[i].name
        oddValueTranslations.push(value)
      }
    }
  })
  
  return (
    <>
      <Head>
        <title>Betbol - Futebol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout userString={props.userString}>
        <FixProvider>
        <span className="text-xs">{res_fixture.response[0].league.country} {res_fixture.response[0].league.name}</span>
        <span className="text-lg block font-bold">{res_fixture.response[0].teams.home.name} v {res_fixture.response[0].teams.away.name}</span>
        {oddValueTranslations.map(odd => {
          return <div key={odd.id}>
            <h3 className="font-semibold border-b border-primary p-3 text-gray-800"> {odd.name}</h3>
            <div className="flex flex-wrap">
              {odd.values.map((val, i) => {
                return <div key={val.value} className="flex-1 gap-0 h-full ">
                  <Button full="true" key={i} val={val} fixId={res_fixture.response[0]} bets={bets} />
                </div>
              })}
            </div>
          </div>
        })}
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}
</FixProvider>