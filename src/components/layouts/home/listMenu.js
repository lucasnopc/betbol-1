import axios from 'axios'
import Link from 'next/link'
import Select from 'react-select'
import { BiFootball, BiWorld } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FcSynchronize } from 'react-icons/fc'

export default function ListMenu(props) {
    const [countries, setCountries] = useState([])
    const [toggle, setToggle] = useState(false)
    const [leagues, setLeagues] = useState(false)
    const router = useRouter()
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const getCountries = async () => {
            const countriesLocal = JSON.parse(localStorage.getItem('betbol@countries'))
            if (countriesLocal) {
                if (countriesLocal.length > 0) {
                    setCountries(countriesLocal)
                }
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
        if (country.name == "World") {
            return {
                value: 'World',
                label: 'Mundial'
            }
        }
        return {
            value: country.code,
            label: <span>
                {/* <img src={country.flag} className="py-1 mr-4 inline-block w-5 h-5" /> */}
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
                <Select options={optionsLeagues} instanceId="2" placeholder="Filtre por Liga" onChange={e => changeSelectLeague(e)} />
                {loading && <div className="text-center"><FcSynchronize className="text-5xl animate-spin  mx-auto text-yellow-400 p-3" /></div>}
                {message && <div className="text-xs bg-red-400 border border-red-600 p-1 mt-1 text-white font-bold">{message}</div>}
            </div>
        }
        return ""
    }

    return <div className="bg-white shadow-md">
        {/* <h1 onClick={e => setToggle(!toggle)} className="block-title">MENU</h1> */}
        <ul className={`${toggle ? `block` : `hidden md:block`} max-h-32 md:max-h-80 overflow-auto`}>
            <li >
                <Link className="inline-block" href="/">
                    <a className="p-1 hover:bg-gray-100 border-b text-green-700 font-normal hover:border-yellow-600 hover:text-yellow-600 cursor-pointer w-full block">
                        <BiFootball className="inline-block" />
                        <span className="inline-block mt-1"> Futebol</span>
                    </a>
                </Link>
            </li>
        </ul>
        <div className="p-2">
            <Select options={options} instanceId="1" placeholder="Filtre por país" onChange={e => changeSelectCountry(e)} />
            {loading && <div className="text-center"><FcSynchronize className="text-5xl animate-spin  mx-auto text-yellow-400 p-3" /></div>}
            {!loading && <SelectLeague /> }
        </div>
    </div>
}