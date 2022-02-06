import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import serverSidePropsClient from '../../utills/serverSitePropsClient'
import { useRouter } from 'next/router'
import useFetch from '../../utills/useFetch'
import { useState } from 'react'
import Alive from '../../components/main/Alive'
import { FixProvider } from '../../context/fix'

export default function LeaguePage(props) {
    const [bets, setBets] = useState(1)
    const router = useRouter()
    const { id, year, name } = router.query
    const { data, error } = useFetch(`/api/betApi/fix-to-league?league=${id}&season=${year}`)

    let fix = {}
    if (error) console.log(error)
    if (data) {
        fix = data.res_filter
    }
console.log(fix)
    return (
        <>
            <Head>
                <title>Betbol - Futebol</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout userString={props.userString}>
            <FixProvider>
                <Alive live={fix} bets={bets} setBets={setBets} title={name} />
            </FixProvider>
            </Layout>
        </>
    )
}
export async function getServerSideProps(context) {
    const ret = serverSidePropsClient(context)
    return ret
}