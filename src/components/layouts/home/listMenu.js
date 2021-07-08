import axios from 'axios'
import useSWR from 'swr'
import compareAsc from 'date-fns/compareAsc'

export default function ListMenu(props) {
    const hoje = new Date()

    const ListMenuBR = () => {

        const fetcher = async () => {
            const data = await axios.get('/api/betApi/leagues')
            return data
        }
        const { data, error } = useSWR('/api/betApi/leagues', fetcher, { refreshInterval: (1000 * 60 * 5) })
        if (!data) {
            return <>loading...</>
        }
        const leagues = data.data.legues
        const ChoiceSession = async (league) => {
            // props.setLeague({leagueId: league.league.id, leagueSession: league.seasons[0].year})
            const data = await axios.get(`/api/betApi/fix-to-league?league=${league.league.id}&season=${league.seasons[0].year}`)
            //console.log('data fix-to-league', sizeof(data.data.res_fixture.response))
            const antesdeantesdeantesdeantesdeontem = new Date()
            const amanha = new Date()
            antesdeantesdeantesdeantesdeontem.setDate(antesdeantesdeantesdeantesdeontem.getDate() - 4);
            amanha.setDate(amanha.getDate() + 1);
            let newLeagues = []
            for (let fix in data.data.res_fixture.response) {
                const response_fix = data.data.res_fixture.response[fix]
                const compareDate = compareAsc(new Date(response_fix.fixture.date), antesdeantesdeantesdeantesdeontem)
                const compareDateFuture = compareAsc(new Date(response_fix.fixture.date), amanha)
                if (compareDate == 1 && compareDateFuture == -1) {
                    console.log(response_fix.fixture.date, compareDate, compareDateFuture )
                    newLeagues.push(response_fix)
                }
            }
            console.log('newLeagues', newLeagues)
            props.setTimeBet(newLeagues)
        }
        let paises = []
        const ListLeagues = leagues.map((league) => {
            const endLeague = new Date(league.seasons[0].end)
            const amanha = hoje.setDate(hoje.getDate() + 1)
            const compareDate = compareAsc(endLeague, new Date(amanha))
            if (compareDate == 1) {
                paises.push({ "liga": league.country.name })
                return <li key={league.league.id} onClick={() => ChoiceSession(league)}><span className="text-sm p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800 block">{league.league.name}</span></li>
            }
            return <li key={league.league.id}></li>
            // console.log('listMenu.js:34 - country', league.country.name)
        }
            //x' return <li key={league.league.id} onClick={() => ChoiceSession(league)}><span className="text-sm p-2 hover:bg-gray-200 cursor-pointer text-gray-800 block">{league.league.name}</span></li>
        )
        paises = paises.filter(function (a) {
            return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
        }, Object.create(null))

        return <>{ListLeagues}</>
    }
    return <>
        <ul>
            <li>
                <span className="uppercase font-semibold block px-2 py-1 bg-gray-200 text-gray-800">Ligas</span>
                <ul>
                    <ListMenuBR />
                </ul>
            </li>
        </ul>
    </>
}