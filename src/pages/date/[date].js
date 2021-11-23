import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import serverSidePropsClient from '../../utills/serverSitePropsClient'
import { useRouter } from 'next/router'
import useFetch from '../../utills/useFetch'
import { useEffect, useState } from 'react'
import { useStore } from '../../context/store'
import FullLoading from '../../components/fullloading'
import Alive from '../../components/main/Alive'

export default function LeaguePage(props) {

    const [live, setLive] = useState([])
    const router = useRouter()
    const [bets, setBets] = useState(1)
    const { date } = router.query
    const { setFixState } = useStore()
    const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const { data, error } = useFetch(`/api/betApi/soccer?date=${date}&tzid=${tzid}`)
    useEffect(() => {
        if (data) setLive(data.soccer.response)

    }, [data])
    useEffect(() => {
        setFixState(live)
    }, [live])

    if (error) return console.log(error)
    if (!data) return <FullLoading />
    
    return (
        <>
            <Head>
                <title>Betbol - Futebol</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout userString={props.userString}>
                <Alive live={live} bets={bets} setBets={setBets} title={`Jogos de ${date}`} />
            </Layout>
        </>
    )
}
export async function getServerSideProps(context) {
    const ret = serverSidePropsClient(context)
    return ret
}