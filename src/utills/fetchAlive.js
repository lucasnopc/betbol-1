import axios from "axios"

export const fetchAlive = async (date) => {
    const url = date ? `/api/betApi/soccer?date=${date}` : `/api/betApi/soccer`
    const data = await axios.get(url)
    const alive = await data.data
    return alive  
}