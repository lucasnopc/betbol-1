import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import { useRouter } from 'next/router'
import useFetch from '../../utills/useFetch'
import { useEffect, useState } from 'react'
import { FixProvider } from '../../context/fix'
import useUser from '../../utills/hooks/useUser'
import Highlights from '../../components/main/highlights'
import serverSidePropsClientNotRedirect from '../../utills/serverSitePRopsClientNotRedirect'

export default function LeaguePage(props) {
    const user = useUser(props.userString)
    const [fix, setFix] = useState(1)
    const router = useRouter()
    const { id, year, name } = router.query
    const { data, error } = useFetch(`/api/betApi/fix-to-league?league=${id}&season=${year}`)

    if (error) console.log(error)
    useEffect(()=> {if(data) setFix(data.res_filter)},[data])
    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME} - Futebol</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout userString={user}>
            <FixProvider>
          {fix.length > 0 && <Highlights highlights={fix} title={name} qtd={10} /> }
          {fix.length == 0 && <>
         <h1 className="font-semibold text-center pt-7 text-lg">{name} não joga essa semana.</h1>  
          </> }
            </FixProvider>
            </Layout>
        </>
    )
}
export async function getServerSideProps(context) {
    const ret = serverSidePropsClientNotRedirect(context)
    return ret
}