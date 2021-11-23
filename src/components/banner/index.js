import { format } from "date-fns"
import useFetch from "../../utills/useFetch"
import FullLoading from "../fullloading"
import { bestLeagues } from "../layouts/home/bestLeagues"
import Image from 'next/image'

export default function Banner() {
    const date = format(new Date(), 'yyyy-MM-dd')
    const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const { data, error } = useFetch(`/api/betApi/soccer?date=${date}&tzid=${tzid}`)

    if (error) return console.log(error)
    if (!data) return <FullLoading />
    const primaryFix = []
    primaryFix = data.soccer.response.filter((l) => {
        for (let i = 0; i < bestLeagues.length; i++) {
            if (bestLeagues[i].id == l.league.id) {
                return true
            }
        }
        return false
    })
    if (primaryFix.length < 0) {
        return <></>
    }
    const itens = primaryFix.map(f => {
        const date = new Date(f.fixture.date)
        const object = {
            date: format(date, 'dd.MM.yyyy'),
            teams: f.teams,
            league: f.league,
            fixture: f.fixture
        }
        return object
    })
    return <>
        <div className="flex flex-row flex-nowrap overflow-x-scroll md:mt-3">
            {itens.map(i => {
                return <div 
                key={i.fixture.id}
                className="bg-gray-100 shadow-lg flex-none">
                    {i.date}
                    <span className="inline-block">{i.teams.home.name}<img src={i.teams.home.logo} width="50" height="50" /></span>
                    <span className="inline-block">{i.teams.away.name}<img src={i.teams.away.logo} width="50" height="50" /></span>
                </div>
            })}
        </div>
    </>
}