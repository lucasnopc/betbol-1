import Layout from '../components/layouts/home/layout'
import getUser from '../utills/getUser.js'
import { getSession } from 'next-auth/client'
import BlockBet from '../components/BlockBet'
import useSWR from 'swr'
import axios from 'axios'
import { format } from 'date-fns'

export default function myBetsHistory(props) {
    const ListBetsHistory = () => {
        const urlBetsHistoryApi = '/api/user/betsHistory'
        const fetcher = async () => {
            const data = await axios.get(urlBetsHistoryApi)
            return data
        }
        const { data, error } = useSWR(urlBetsHistoryApi, fetcher)
        if (error) console.log(error)
        if (!data) {
            return <>
                Loading
            </>
        }
        const historyBets = data.data.betHistory
        const historyBetsList = historyBets.map((r, i) => {
            const datePlayBet = format(new Date(r.date), 'dd/MM/yyyy HH:mm')
            return (<div key={i}>
            <span>Aposta realizada em: {datePlayBet}</span>
                <table className="table-auto">
                <thead>
                    <tr>
                        <th className="text-left font-medium p-2 border-2 border-gray-200">Escolha:</th>
                        <th className="text-left font-medium p-2 border-2 border-gray-200">Probabilidade</th>
                        <th className="text-left font-medium p-2 border-2 border-gray-200">Valor Apostado</th>
                    </tr>
                </thead>
            <tbody>
                {
                    r.bets.map((b, i) => {
                        const oddsNumberChoice = () => {
                            switch (b.choice) {
                                case "betaway":
                                    return (b.bet.odds.bookmakers[0].bets[0].values[2].odd)
                                case "bethome":
                                    return (b.bet.odds.bookmakers[0].bets[0].values[0].odd)
                                case "betdraw":
                                    return (b.bet.odds.bookmakers[0].bets[0].values[1].odd)
                            }
                        }
                        const choice = () => {
                            switch (b.choice) {
                                case "betaway":
                                    return (b.bet.teams.away.name)
                                case "bethome":
                                    return (b.bet.teams.home.name)
                                case "betdraw":
                                    return (`Empate ${b.bet.teams.home.name} X ${b.bet.teams.away.name}`)
                            }
                        }
                        return <tr key={i}>
                            <td className="p-2 border-2 border-gray-200">{choice()}</td>
                            <td className="p-2 border-2 border-gray-200">{oddsNumberChoice()}</td>
                            <td className="p-2 border-2 border-gray-200">{b.value}</td>
                        </tr>
                    })
                }
            </tbody></table></div>)
        })
        return <>
                {historyBetsList}
        </>
    }
    return <>
        <Layout userString={props.userString}>
            <div className="p-3">
                <BlockBet title="Histórico de Apostas">
                    <ListBetsHistory />
                </BlockBet>
            </div>
        </Layout>
    </>
}
export async function getServerSideProps(context) {
    const session = await getSession(context)
    if(!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    if (session) {
        const user = await getUser(session.user.email)
        const userString = JSON.stringify(user)
        if (typeof user.user == 'undefined') {
            return {
                redirect: {
                    destination: '/register',
                    permanent: false,
                },
            }
        } if (user.nivel == 5) {
            return {
                redirect: {
                    destination: '/adm/dash',
                    permanent: false,
                },
            }
        }
        return {
            props: { userString },
        }
    }
    return {
        props: {},
    }
}