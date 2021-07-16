import axios from 'axios'
import useSWR from 'swr'
import { useState } from 'react'
import { compareDateFuture } from '../../../utills/compareDate'

export default function ListMenu(props) {
    const hoje = new Date()
    const Alive = () => {
        const aliveChoice = () => {
            props.setTimeBet([])
        }
        return <li key="Alive" onClick={() => aliveChoice()} className={`hover:bg-green-100 cursor-pointer text-xs p-2 text-green-600 font-bold`}>AO VIVO</li>
    }
    const ListMenuCountry = () => {

        const fetcher = async () => {
            const data = await axios.get('/api/betApi/leagues')
            return data
        }
        const { data, error } = useSWR('/api/betApi/leagues', fetcher)
        if (!data) {
            return <>loading...</>
        }
        const leagues = data.data.legues
        const ChoiceSession = async (league) => {
            // props.setLeague({leagueId: league.league.id, leagueSession: league.seasons[0].year})
            const data = await axios.get(`/api/betApi/fix-to-league?league=${league.league.id}&season=${league.seasons[0].year}`)
            let newLeagues = []
            for (let fix in data.data.res_fixture.response) {
                const response_fix = data.data.res_fixture.response[fix]
                if (compareDateFuture(response_fix.fixture.date)) {
                    newLeagues.push(response_fix)
                }
            }
            if(newLeagues.length != 0){

                props.setTimeBet({
                    'select': newLeagues[0].league.country,
                    'response': newLeagues
                })
            }
            else {
                alert(`no momento não existem jogos para serem mostrados na liga: ${league.league.name}`)
            }
            
        }
        let country = []
        for (let a = 0; a < leagues.length; a++) {
            let sameCountry = false
            for (let b = 0; b < a; b++) {
                if (country[b] && leagues[a].country.code == country[b].country.code) {
                    country[b].leagues.push({
                        league: leagues[a].league,
                        seasons: leagues[a].seasons
                    })
                    sameCountry = true
                    break
                }
            }
            if (!sameCountry) {
                country.push({
                    country: leagues[a].country,
                    leagues: [{
                        league: leagues[a].league,
                        seasons: leagues[a].seasons
                    }]
                })
            }
        }
        const countryReOrg = country.map((c, i) => {
            if(c.country.code == 'BR') {
                country.splice(i)
                country.unshift(c)

            }
        })
        const MenuCoutry = country.map((c) => {
            const ListCouturyAndLeagues = () => {
                const [toggle, setToggle] = useState(false)
                const classChanges = toggle ? `list-item`: `hidden` 
                return <>
                    {toggle}<li key={c.country.code} onClick={() => {
                        setToggle(!toggle)
                    }} key={c.country.code} className="group text-sm p-2 bg-gray-100  cursor-pointer text-gray-800 block"><span>{c.country.name}</span>
                        <ul>{
                            c.leagues.map((league) => {
                                return <li key={league.league.id} onClick={() => ChoiceSession(league)} className={`${classChanges} hover:bg-gray-200 cursor-pointer text-xs p-2 text-blue-900`}>{league.league.name}</li>
                            })
                        }
                        </ul>
                    </li>
                </>
            }

            return <>
                <ListCouturyAndLeagues  />
            </>
        })
        return <>{MenuCoutry}</>
    }
    return <>
        <ul>
            <li>
                <h2 className="block-title">Ligas</h2>
                <div className="max-h-32 md:max-h-screen overflow-auto">
                <ul><Alive /></ul>
                <ul className="">
                    <ListMenuCountry />
                </ul>
                </div>
            </li>
        </ul>
    </>
}