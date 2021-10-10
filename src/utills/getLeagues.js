import axios from 'axios'
import { fetchAlive } from './fetchAlive'

export default async function getLeagues(country){
    if(country == `live`) {
        const fetcherAlive = async () => {
            const fetch = await fetchAlive()
            setChoiceForMenu(`ALIVE`, fetch)   
        }
        fetcherAlive()

        return ``
    }
    const urlMenuSearchLeachesForCountry = `/api/menu/searchLeaguesForCountry?query=${country}`
        const data = await axios.get(urlMenuSearchLeachesForCountry)
        const leagues = await data.data
        return {country, leagues}
    }