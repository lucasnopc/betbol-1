import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import { useEffect, useState } from 'react'
import useFetch from '../../utills/useFetch'
import FullLoading from '../../components/fullloading'
import { useRouter } from 'next/router'
import { oddBets } from '../../utills/oddBets'
import useUser from '../../utills/hooks/useUser'
import MultipleBetsBlock from '../../components/multiplebetsblock'
import serverSidePropsClientNotRedirect from '../../utills/serverSitePRopsClientNotRedirect'
import { useStore } from '../../context/store'

export default function Fix(props) {
  const { note } = useStore()
  const user = useUser(props.userString)
  const router = useRouter()
  const { id } = router.query
  const [resFixture, setResFixture] = useState(false)
  const [odd, setOdd] = useState(false)
  const { data, error } = useFetch(`/api/betApi/fixture/${id}/`)

  useEffect(() => {
    if (data) {
      const { res_fixture, odds } = data
      setResFixture(res_fixture.response[0])
      let oddsValues = []
      if (odds.bookmakers[0].bets.length > 0) {
        oddsValues = odds.bookmakers[0].bets

        const oddValueTranslations = []
        for (let value of oddsValues) {
          for (let i = 0; i < oddBets.length; i++) {
            if (oddBets[i].id == value.id) {
              value.name = oddBets[i].name
              oddValueTranslations.push(value)
            }
          }
        }
        setOdd(oddValueTranslations)
      }
    }

  }, [data])

  if (error) return console.log(error)
  if (!data) return <FullLoading />

  return (
    <>
      <Head>
        <title>Betbol - Futebol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout userString={user}>
        
        {resFixture && <>
          <span className="text-xs w-56 h-96">{resFixture.league.country} {resFixture.league.name}</span>
          <span className="text-lg block font-bold">{resFixture.teams.home.name} v {resFixture.teams.away.name}</span>
        </>}
        
        {odd && <>
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[1, 13, 3]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[5, 6, 26]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[8, 34, 35]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[12, 20, 33]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[21, 22, 63, 23]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[2]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[10]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[14, 15]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[16, 17]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[29, 30]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[10, 31, 62]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[38, 40, 41, 42]} />
        </>}

      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const ret = serverSidePropsClientNotRedirect(context);
  return ret
}