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

      let top_betslenth 
        for(let book of odds.bookmakers) {
            if(top_betslenth) {
               if(book.bets.length > top_betslenth.bets.length) top_betslenth = book
            }else { top_betslenth = book }
        }


      if (top_betslenth.bets.length > 0) {
        oddsValues = top_betslenth.bets

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
        <title>{process.env.NEXT_PUBLIC_APP_NAME} - Futebol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        
        {resFixture && <>
          <span className="ml-3 text-xs w-56 h-96">{resFixture.league.country} {resFixture.league.name}</span>
          <span className="ml-3 text-lg block font-bold">{resFixture.teams.home.name} v {resFixture.teams.away.name}</span>
        </>}
        
        {odd && <>
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[1, 13, 3]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[2]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[5, 6, 26]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[8, 34, 35]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[9, 18]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[32]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[59]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[12, 20, 33]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[24, 25, 51]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[27, 28]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[29, 30]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[21, 22, 63]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[60, 23]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[47]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[37, 53]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[43, 44]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[10]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[14, 15]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[16, 17]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[10, 31, 62]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[38, 40, 41]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[42, 46]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[45, 57, 58]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[42, 46]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[51, 52]} />
          <MultipleBetsBlock note={note} oddList={odd} fix={resFixture} arrayIds={[54]} />

        </>}

      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const ret = serverSidePropsClientNotRedirect(context);
  return ret
}