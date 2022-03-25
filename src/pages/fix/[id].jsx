import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import { useEffect, useState } from 'react'
import serverSidePropsClient from '../../utills/serverSitePropsClient'
import useFetch from '../../utills/useFetch'
import FullLoading from '../../components/fullloading'
import { useRouter } from 'next/router'
import { oddBets } from '../../utills/oddBets'
import Button from '../../components/main/Button'
import useUser from '../../utills/hooks/useUser'
import translateBetsName from '../../utills/translates/translate-bets-name'
import MultipleBetsBlock from '../../components/multiplebetsblock'


export default function Fix(props) {
  const user = useUser(props.userString)
  const router = useRouter()
  const { id } = router.query
  const [resFixture, setResFixture] = useState(false)
  const [bets, setBets] = useState(1)
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
        {resFixture && <><span className="text-xs w-56 h-96">{resFixture.league.country} {resFixture.league.name}</span>
          <span className="text-lg block font-bold">{resFixture.teams.home.name} v {resFixture.teams.away.name}</span>
        </>}
        {odd && <>
          <MultipleBetsBlock oddList={odd} fix={resFixture} arrayIds={[1, 13, 3]} />
          <MultipleBetsBlock oddList={odd} fix={resFixture} arrayIds={[2]} />
          <MultipleBetsBlock oddList={odd} fix={resFixture} arrayIds={[8, 34, 35]} />
          <MultipleBetsBlock oddList={odd} fix={resFixture} arrayIds={[10]} />
          <MultipleBetsBlock oddList={odd} fix={resFixture} arrayIds={[5, 6, 26]} />
          <MultipleBetsBlock oddList={odd} fix={resFixture} arrayIds={[14, 15]} />
          <MultipleBetsBlock oddList={odd} fix={resFixture} arrayIds={[12, 20, 33]} />
          <MultipleBetsBlock oddList={odd} fix={resFixture} arrayIds={[16, 17]} />
          <MultipleBetsBlock oddList={odd} fix={resFixture} arrayIds={[21, 22, 63, 23]} />
          <MultipleBetsBlock oddList={odd} fix={resFixture} arrayIds={[29, 30]} />
          <MultipleBetsBlock oddList={odd} fix={resFixture} arrayIds={[12, 20, 33]} />
          <MultipleBetsBlock oddList={odd} fix={resFixture} arrayIds={[10, 31, 62]} />
        </>}
        {/* {odd && odd.map(odd => {
          return <div key={odd.id}>
            <h3 className="font-semibold border-b border-primary p-1 text-white bg-primary"> {translateBetsName(odd.id)}</h3>
            <div className=" flex flex-nowrap md:flex-none h-full border-l border-gray-200 divide-x">
              {odd.values.map((val, i) => {
                return <div key={val.value} className="flex-1 gap-0 h-full ">
                  <Button key={i} val={val} value="true" fix={resFixture} bets={bets} />
                </div>
              })}
            </div>
          </div>
        })} */}
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}