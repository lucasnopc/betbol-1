import axios from 'axios'
import useSWR from 'swr'
import { useStore } from '../../../context/store'
import { fetchAlive } from '../../../utills/fetchAlive'

export default function ListMenu(props) {
    const { setChoiceForMenu, choiceForMenu } = useStore()
    const getLeagues = async (country) => {
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
            setChoiceForMenu(country, leagues)
            return ``
        }
    return <div className="bg-white shadow-md">
        <h1 className="block-title">DESTAQUES</h1>
        <ul>
            <li onClick={() => { getLeagues(`live`) }}  className="p-1 font-normal hover:bg-gray-200  cursor-pointer">
                AO VIVO
            </li>
            <li onClick={() => { getLeagues(`BR`) }} className="p-1 font-normal hover:bg-gray-200  cursor-pointer">
                BRASIL
            </li>
            <li onClick={() => { getLeagues(`world`) }}  className="p-1 font-normal hover:bg-gray-200  cursor-pointer">
                INTERNACIONAL
            </li>
            <li onClick={() => { getLeagues(`US`) }}  className="p-1 font-normal hover:bg-gray-200  cursor-pointer">
                AMERICANO
            </li>
            {/* <li  onClick={() => { ChangeLeagues() }}  className="p-1 font-normal bg-gray-100 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">OUTROS</li> */}
        </ul>
    </div>
}