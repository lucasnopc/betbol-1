import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import serverSidePropsClient from '../../utills/serverSitePropsClient'
import { useRouter } from 'next/router'
import useFetch from '../../utills/useFetch'
import { useEffect, useState } from 'react'
import { FixProvider } from '../../context/fix'
import useUser from '../../utills/hooks/useUser'
import Highlights from '../../components/main/highlights'

export default function LeaguePage(props) {
    const user = useUser(props.userString)
    const [fix, setFix] = useState(1)
    const router = useRouter()
    const { id, year, name } = router.query
    const { data, error } = useFetch(`/api/betApi/fix-to-league?league=${id}&season=${year}`)

    if (error) console.log(error)
    useEffect(()=> setFix(data.res_filter),[])
    if (data) {
        fix = data.res_filter
    }
    return (
        <>
            <Head>
                <title>Betbol - Futebol</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout userString={user}>
            <FixProvider>
          {fix.length > 0 && <Highlights highlights={fix} title={name} /> }
            </FixProvider>
            </Layout>
        </>
    )
}
export async function getServerSideProps(context) {
    const ret = serverSidePropsClient(context)
    return ret
}