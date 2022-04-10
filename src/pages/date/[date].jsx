import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import serverSidePropsClientNotRedirect from '../../utills/serverSitePRopsClientNotRedirect'
import { useRouter } from 'next/router'
import useFetch from '../../utills/useFetch'
import { useEffect, useState } from 'react'
import FullLoading from '../../components/fullloading'
import Highlights from '../../components/main/highlights/'
import { FixProvider } from '../../context/fix'
import useUser from '../../utills/hooks/useUser'

export default function LeaguePage(props) {
    const user = useUser(props.userString)
    const [live, setLive] = useState([])
    const router = useRouter()
    const { date } = router.query
    const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const { data, error } = useFetch(`/api/betApi/soccer?date=${date}&tzid=${tzid}`)

    useEffect(() => { if (data) setLive(data.soccer.response) }, [data])

    if (error) return console.log(error)
    if (!data) return <FullLoading />
    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME} - Futebol</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout userString={user}>
                <FixProvider>
                    {live.length > 0 && <Highlights highlights={live} title={`Jogos de ${date}`} qtd={10} />}
                </FixProvider>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    const ret = serverSidePropsClientNotRedirect(context);
    return ret
}