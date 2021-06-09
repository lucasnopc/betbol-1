import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import compareAsc from 'date-fns/compareAsc'

export default function ListMenu() {
    const ListMenuBR = () => {

        const fetcher = async () => {
            const data = await axios.get('/api/betApi/leagues?code=BR')
            return data
        }
        const { data, error } = useSWR('/api/betApi/leagues?code=BR', fetcher, { refreshInterval: (1000 * 60 * 5) })
        if(!data) {
            return <>loading...</>
        } 
        const leagues = data.data.legues
        const ListLeagues = leagues.map((league) => {   
            const endLeague = new Date(league.seasons[0].end)
            const compareDate = compareAsc(endLeague, new Date())
            if(compareDate == 1) {
                return <li key={league.league.id}><Link href={`/sports/league/${league.league.id}/${league.seasons[0].year}`}><a className="text-sm p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800 block">{league.league.name}</a></Link></li>
            }
            return ""
        })
        return <>{ListLeagues}</>
    }
    return <>
    <ul>
        <li>
            <span className="uppercase font-semibold text-white block px-2 py-1 bg-gradient-to-r from-green-600 to-yellow-400">Brasil</span>
            <ul>
                <ListMenuBR />
            </ul>
        </li>
    </ul>
    </>
}