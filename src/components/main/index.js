import axios from "axios"
import { useEffect } from "react"
import { useStore } from "../../context/store"
import { fetchAlive } from "../../utills/fetchAlive"
import Alive from "./Alive"
import League from "./League"


export default function Main() {
    const { choiceForMenu, setChoiceForMenu } = useStore()
    useEffect(() => {
        const fetcherAlive = async () => {
            const fetch = await fetchAlive()
            setChoiceForMenu(`ALIVE`, fetch)
        }
        fetcherAlive()
    }, [])
    return <div className="">
        {/* <Alive /> */}
        {choiceForMenu.live &&
                <League live={choiceForMenu.live} />
        }
        {choiceForMenu.leagues && choiceForMenu.leagues.map((league, i) => {
            return <div key={i}>
                <League league={league} idLeague={i} />
            </div>
        })}
    </div>
}