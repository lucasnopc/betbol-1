import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import NoteBets from '../../components/bet/football/noteBets'
import { useEffect, useState } from 'react'
import ListMenu from '../../components/layouts/home/listMenu'
import serverSidePropsClient from '../../utills/serverSitePropsClient'
import { useRouter } from 'next/router'
import axios from 'axios'
import compareAsc from 'date-fns/compareAsc'
import Fix from '../../components/main/Fix'
import Link from 'next/link'
import SelectOddsBets from '../../components/main/SelectOddsBets'
import useFetch from '../../utills/useFetch'

export default function LeaguePage(props) {

    const [bets, setBets] = useState(2)
    const [listBetState, setListBetState] = useState([])
    const [getValorFinal, setValorFinal] = useState(0)
    const [getLeague, setLeague] = useState({})
    const router = useRouter()
    const { id, year, name } = router.query

    // useEffect(() => {
    //     const getFixToLeague = async (id, year) => {
    //         const urlFixToLeague = `/api/betApi/fix-to-league?league=${id}&season=${year}`
    //         const data = await axios.get(urlFixToLeague)
    //         const fixToLeague = await data.data

    //         const res_filter = fixToLeague.res_fixture.response.filter((res) => {
    //             const date = new Date(res.fixture.date)
    //             const fiveDaysInFuture = new Date()
    //             fiveDaysInFuture.setDate(fiveDaysInFuture.getDate() + 5)
    //             const compareifDateIsFuture = compareAsc(date, new Date())
    //             const compareIfDateIsFiveDaysInFuture = compareAsc(date, fiveDaysInFuture)
    //             if (compareifDateIsFuture >= 0 && compareIfDateIsFiveDaysInFuture <= 0) {
    //                 return true
    //             } else {
    //                 return false

    //             }
    //         })
    //         if (res_filter.length > 0) setfix(res_filter)
    //     }
    //     getFixToLeague(id, year)
    // }, [id, year])
    let fix = {}
    const {data, error } = useFetch(`/api/betApi/fix-to-league?league=${id}&season=${year}`)
    if(error) console.log(error)
    if(data) {
        const res_filter = data.res_fixture.response.filter((res) => {
            const date = new Date(res.fixture.date)
            const fiveDaysInFuture = new Date()
            fiveDaysInFuture.setDate(fiveDaysInFuture.getDate() + 5)
            const compareifDateIsFuture = compareAsc(date, new Date())
            const compareIfDateIsFiveDaysInFuture = compareAsc(date, fiveDaysInFuture)
            if (compareifDateIsFuture >= 0 && compareIfDateIsFiveDaysInFuture <= 0) {
                return true
            } else {
                return false

            }
        })
        fix = res_filter
    }
    console.log(fix.length)
    return (
        <>
            <Head>
                <title>Betbol - Futebol</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout userString={props.userString}>
                <div className="page grid grid-cols-12">
                    <div className="col-span-full md:col-span-2 mt-3 mx-3">
                        <ListMenu getLeague={getLeague} setLeague={setLeague} />
                    </div>
                    <div className="mx-3 mt-3 md:col-span-7 col-span-full bg-white p-3">
                        <h2 className="page-title">{name}</h2>
                        <SelectOddsBets setBets={setBets} bets={bets} />
                        {!data &&
                         <>Carregando...</>
                        }
                        {fix.length == 0 &&
                            <span className="p-3 bg-yellow-100 block">Não há jogos disponíeis</span>
                           }
                        {fix.length > 0 && fix.map(f => {
                            return <Link key={f.fixture.id} href="/">
                                <a>
                                    <Fix fix={f} bets={bets} />
                                </a>
                            </Link>
                        })}
                    </div>
                    <div className="mx-3 md:col-span-3 col-span-full">
                        <NoteBets userString={props.userString} setListBetState={setListBetState} listBetState={listBetState} getValorFinal={getValorFinal} setValorFinal={setValorFinal} />
                    </div>
                </div>
            </Layout>
        </>
    )
}
export async function getServerSideProps(context) {
    const ret = serverSidePropsClient(context)
    return ret
}