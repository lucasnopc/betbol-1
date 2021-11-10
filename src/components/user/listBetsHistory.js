import useSWR from 'swr'
import axios from 'axios'
import { format } from 'date-fns'
import Translate from '../../utills/translate'
import { oddBets } from '../../utills/oddBets'

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
        console.log('r ', r)
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
                    const betName = (oddBets) => {
                        const oddBet = oddBets.find(x => x.id == b.choice.betsChoice)
                        return oddBet
                    }
                    return <tr key={i}>
                         <td className="p-2 border-2 border-gray-200">{b.fix.teams.home.name} X {b.fix.teams.away.name}</td>
                        <td className="p-2 border-2 border-gray-200"><span className="bg-gray-200 p-1" >{Translate(betName(oddBets).name)}</span> - {Translate(b.choice.value)}</td>
                        <td className="p-2 border-2 border-gray-200">{b.choice.odd}</td>
                        {/* <td className="p-2 border-2 border-gray-200">R$ {b.choice.valor.value}</td> */}
                       {/* <td className="p-2 border-2 border-gray-200">R$ {b.choice.valor.value * b.choice.odd}</td> */}
                    </tr>
                })
            }
        </tbody></table></div>)
    })
    return <>
            {historyBetsList}
    </>
}