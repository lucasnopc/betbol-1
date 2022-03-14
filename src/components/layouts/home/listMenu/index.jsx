import axios from 'axios'
import Link from 'next/link'
import Select from 'react-select'
import { BiFootball, BiWorld } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ImSpinner9 } from 'react-icons/im'
import { format, isTomorrow } from 'date-fns'
import { bestLeagues } from '../bestLeagues'
import getCountries from './get_country'

export default function ListMenu(props) {
    const [countries, setCountries] = useState([])
    const [toggle, setToggle] = useState(false)
    const [leagues, setLeagues] = useState(false)
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const today = format(new Date(), 'yyyy-MM-dd')
    const todayYear = new Date().getFullYear()
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow = format(tomorrow, 'yyyy-MM-dd')

    useEffect(() => {
        getCountries(setCountries)
    }, [])
    useEffect(() => {
        localStorage.setItem('betbol@countries', JSON.stringify(countries))
    }, [countries])

    const options = countries.map(country => {

        return {
            value: country.code,
            label: <span>
                {country.name}</span>
        }
    })

    const changeSelectCountry = async (e) => {
        setLoading(true)
        const urlMenuSearchLeachesForCountry = `/api/menu/searchLeaguesForCountry?query=${e.value}`
        const data = await axios.get(urlMenuSearchLeachesForCountry)
        const leaguesData = await data.data
        setLoading(false)
        setLeagues(leaguesData)
    }
    const SelectLeague = e => {
        const [loading, setLoading] = useState(false)
        const [message, setMesage] = useState(false)
        if (leagues) {
            const changeSelectLeague = async (e) => {
                setLoading(true)
                const urlSearchFixToLeagues = `/api/betApi/fix-to-league?league=${e.value.id}&season=${e.value.year}`
                const data = await axios.get(urlSearchFixToLeagues)
                const fixData = await data.data.res_filter
                if (fixData.length > 0) {
                    router.push(`/league/${e.value.id}?year=${e.value.year}&name=${e.value.name}`)
                } else {
                    setLoading(false)
                    setMesage(`Não há jogos esta semana em ${e.value.name}`)
                }

            }

            const optionsLeagues = leagues.leagues.map(e => {
                return {
                    value: { id: e.league.id, year: e.seasons[0].year, name: e.league.name },
                    label: e.league.name
                }
            })
            return <div className="mt-1">
                <Select options={optionsLeagues} instanceId="2" placeholder="Filtrar por Liga" onChange={e => changeSelectLeague(e)} />
                {loading && <div className="text-center"><ImSpinner9 className="text-5xl animate-spin  mx-auto text-primary p-3" /></div>}
                {message && <div className="text-xs bg-red-400 border border-red-600 p-1 mt-1 text-white font-bold">{message}</div>}
            </div>
        }
        return ""
    }
    return <div>
        <div onClick={() => setToggle(!toggle)} className="p-1">
            <BiFootball className="inline-block" />
            <span className="inline-block text-xs ml-2 page-title">Buscar Jogos</span>
        </div>
        <div className="shadow-md" style={{
        height: toggle ? window.innerHeight - 50 : 0
    }}>
        
        <div className={`${toggle ? `block` : `hidden md:block`} bg-gray-50`}>
            <div>
                <Select className="rounded-none" options={options} instanceId="1" placeholder="Buscar" onChange={e => changeSelectCountry(e)} />
                {loading && <div className="text-center"><ImSpinner9 className="text-5xl animate-spin  mx-auto text-primary p-3" /></div>}
                {!loading && <SelectLeague />}
            </div>
            <ul>
                <li >
                    <Link className="inline-block" href="/">
                        <a className="list-styles block pl-3">
                            <span className="inline-block font-medium">Ao Vivo</span>
                        </a>
                    </Link>
                </li>
                <li >
                    <Link className="inline-block" href={`/date/${today}`}>
                        <a className="list-styles block pl-3">
                            <span className="inline-block font-medium">Próximos Jogos</span>
                        </a>
                    </Link>
                </li>
                <li >
                    <Link className="inline-block" href={`/date/${tomorrow}`}>
                        <a className="list-styles block pl-3">
                            <span className="inline-block font-medium">Jogos de Amanhã</span>
                        </a>
                    </Link>
                </li>
            </ul>
            <ul>
                {bestLeagues.map(l => <li key={l.id}><Link href={`/league/${l.id}?year=${todayYear}&name=${l.name}`}><a className="list-styles block pl-3">{l.name}</a></Link></li>
                )}
            </ul>
        </div>
    </div>
    </div>
}