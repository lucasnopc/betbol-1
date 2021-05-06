import useSWR from 'swr'
import axios from 'axios'

export default async function Swr(url) {
    const fetcher = await axios.get(url)
    const { data, error } = useSWR(url, fetcher)
    return { data, error }
}
