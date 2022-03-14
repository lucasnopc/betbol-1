import { useEffect, useState } from 'react'
import Select from 'react-select'
import getCountries from './get_country'
import { ImSpinner9 } from 'react-icons/im'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Search() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [leagues, setLeagues] = useState(false)
  const router = useRouter()

  const changeSelectCountry = async (e) => {
    setLoading(true)
    const urlMenuSearchLeachesForCountry = `/api/menu/searchLeaguesForCountry?query=${e.value}`
    const data = await axios.get(urlMenuSearchLeachesForCountry)
    const leaguesData = await data.data
    setLoading(false)
    setLeagues(leaguesData)
}

  useEffect(() => {
    getCountries(setCountries)
}, [])

useEffect(() => {
  localStorage.setItem('betbol@countries', JSON.stringify(countries))
}, [countries])

const customStyles = {
    options: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
        padding: 20,
      })
  }
  const options = countries.map(country => {
    return {
        value: country.code,
        label: <span>
            {country.name}</span>
    }
  })

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
            <Select styles={customStyles} options={optionsLeagues} instanceId="2" placeholder="Filtrar por Liga" onChange={e => changeSelectLeague(e)} />
            {loading && <div className="text-center"><ImSpinner9 className="text-5xl animate-spin  mx-auto text-primary p-3" /></div>}
            {message && <div className="text-xs bg-red-400 border border-red-600 p-1 mt-1 text-white font-bold">{message}</div>}
        </div>
    }
    return ""
}

  return <div>
    <Select styles={customStyles} options={options} instanceId="1" placeholder="Buscar País" onChange={e => changeSelectCountry(e)} />
    {loading && <div className="text-center"><ImSpinner9 className="text-5xl animate-spin  mx-auto text-primary p-3" /></div>}
    {!loading && <SelectLeague />}
  </div>
}