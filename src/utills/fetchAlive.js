import axios from "axios"

export const fetchAlive = async () => {
    const data = await axios.get(`/api/betApi/soccer`)
    const alive = await data.data
    return alive  
}