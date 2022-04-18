import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import { useEffect, useState } from 'react'
import serverSidePropsClient from '../../utills/serverSitePropsClient'
import { useRouter } from 'next/router'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import useUser from '../../utills/hooks/useUser'

export default function CodePage(props) {
  const router = useRouter()
  const [leagues, setLeagues] = useState([])
  const { code, name } = router.query
  const user = useUser(props.userString)


  useEffect(() => {
    const getLeagueForCountry = async (country) => {
      const urlMenuSearchLeachesForCountry = `/api/menu/searchLeaguesForCountry?query=${country}`
      const data = await axios.get(urlMenuSearchLeachesForCountry)
      const leaguesData = await data.data
      setLeagues(leaguesData.leagues)
    }
    getLeagueForCountry(code)
  }, [code])
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME} - {code}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <div className="mx-3 mt-3 md:col-span-7 col-span-full">
            <h2 className="page-title">{name}</h2>
            {leagues.map((lea) => {
              return <div key={lea.league.id} className="flex align-middle shadow-sm hover:shadow-md p-2 mb-2 bg-white cursor-pointer uppercase font-light text-gray-600 hover:text-gray-800">
                <Link href={{
                  pathname: `/league/${lea.league.id}`,
                  query: { year: lea.seasons[0].year, name: lea.league.name },
                }}>
                  <a><Image src={lea.league.logo} width="30" height="30" className="p-1" />
                    <span className="px-4">{lea.league.name}</span>
                  </a>
                </Link>
              </div>
            })}
          </div>
      </Layout>
    </>
  )
}
export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}