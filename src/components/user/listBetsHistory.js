import useSWR from 'swr'
import axios from 'axios'
import { format } from 'date-fns'
import Translate from '../../utills/translate'

export default function ListBetsHistory (props) {
    const urlBetsHistoryApi = `/api/user/betsHistory?email=${props.email}`
    const fetcher = async () => {
        const data = await axios.get(urlBetsHistoryApi)
        return data
    }
    const { data, error } = useSWR(urlBetsHistoryApi, fetcher)
    if (error) console.log(error)
    if (!data) {
        return <>
            Carregando ...
        </>
    }
    const historyBets = data.data.betHistory
    const historyBetsList = historyBets.map((r, i) => {
        const datePlayBet = format(new Date(r.date), 'dd/MM/yyyy HH:mm')
        return (<div className="border-2 border-gray-500 p-3 bg-white my-2" key={i}>
        <span>Aposta realizada em: {datePlayBet}</span>
            <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="text-left font-medium p-2 border-2 border-gray-200">Jogo:</th>
                    <th className="text-left font-medium p-2 border-2 border-gray-200">Escolha:</th>
                    <th className="text-left font-medium p-2 border-2 border-gray-200">Probabilidade</th>
                    <th className="text-left font-medium p-2 border-2 border-gray-200">Valor Apostado</th>
                    <th className="text-left font-medium p-2 border-2 border-gray-200">Ganho Potencial</th>
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
                    const choice = (r, b) => {
                        switch (b.choice) {
                            case "betaway":
                                return (b.bet.teams.away.name)
                            case "bethome":
                                return (b.bet.teams.home.name)
                            case "betdraw":
                                return (`Empate ${b.bet.teams.home.name} X ${b.bet.teams.away.name}`)
                        }
                    }
                    console.log(b)
                    return <tr key={i}>
                        <td className="p-2 border-2 border-gray-200">{b.game.teams.home.name} X {b.game.teams.away.name}</td>
                        <td className="p-2 border-2 border-gray-200">{Translate(b.odds.name)} - {b.odd.value}</td>
                        <td className="p-2 border-2 border-gray-200">{b.odd.odd}</td>
                        <td className="p-2 border-2 border-gray-200">{b.value}</td>
                        <td className="p-2 border-2 border-gray-200">R$ {Math.floor(b.value * b.odd.odd)}</td>
                    </tr>
                })
            }
        </tbody></table></div>)
    })
    return <>
            {historyBetsList}
    </>
}