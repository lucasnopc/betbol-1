import axios from 'axios'
import Link from 'next/link'
import Select from 'react-select'
import { BiFootball, BiWorld } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FcSynchronize } from 'react-icons/fc'
import { format, isTomorrow } from 'date-fns'

export default function ListMenu(props) {
    const [countries, setCountries] = useState([])
    const [toggle, setToggle] = useState(false)
    const [leagues, setLeagues] = useState(false)
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const today = format(new Date(), 'yyyy-MM-dd')
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow = format(tomorrow, 'yyyy-MM-dd')

    useEffect(() => {
        const getCountries = async () => {
            const countriesLocal = await JSON.parse(localStorage.getItem('betbol@countries'))
            if (countriesLocal && countriesLocal.length > 0) {
                setCountries(countriesLocal)
            } else { 
                const urlGetCountries = `/api/getCountryes`
                const data = await axios.get(urlGetCountries)
                const countriesData = await data.data
                setCountries(countriesData.countries)
            }
        }
        getCountries()
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
    const optionsLeagues = false

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
                {loading && <div className="text-center"><FcSynchronize className="text-5xl animate-spin  mx-auto text-yellow-400 p-3" /></div>}
                {message && <div className="text-xs bg-red-400 border border-red-600 p-1 mt-1 text-white font-bold">{message}</div>}
            </div>
        }
        return ""
    }
    return <div className="bg-white shadow-md">
        <div onClick={() => setToggle(!toggle)} className="bg-gray-50 p-1">
            <BiFootball className="inline-block" />
            <span className="inline-block text-xs ml-2 page-title"> Filtro de jogos</span>
        </div>
        <ul className={`${toggle ? `block` : `hidden md:block`} max-h-32 md:max-h-80 overflow-auto`}>
            <li >
                <Link className="inline-block" href="/">
                    <a className="list-styles block">
                        <span className="inline-block text-sm ml-2 font-medium">Ao Vivo</span>
                    </a>
                </Link>
            </li>
            <li >
                <Link className="inline-block" href={`/date/${today}`}>
                    <a className="list-styles block">
                        <span className="inline-block text-sm ml-2 font-medium">Próximos</span>
                    </a>
                </Link>
            </li>
            <li >
                <Link className="inline-block" href={`/date/${tomorrow}`}>
                    <a className="list-styles block">
                        <span className="inline-block text-sm ml-2 font-medium">Amanhã</span>
                    </a>
                </Link>
            </li>
        </ul>
        <div className={`${toggle ? `block` : `hidden md:block`} p-2`}>
            <Select options={options} instanceId="1" placeholder="Filtrar por país" onChange={e => changeSelectCountry(e)} />
            {loading && <div className="text-center"><FcSynchronize className="text-5xl animate-spin  mx-auto text-yellow-400 p-3" /></div>}
            {!loading && <SelectLeague />}
        </div>
    </div>
}