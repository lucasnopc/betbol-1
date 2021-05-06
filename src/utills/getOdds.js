import axios from 'axios'

export default async function GetOdds(id, getListBetState, setListBetState) {
    const urlSoccerApi = `/api/betApi/odds/${id}`
        const data = await axios.get(urlSoccerApi)
        const odds = await data.data
        return odds
    }