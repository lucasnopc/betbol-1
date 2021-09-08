import { useStore } from "../../context/store"
import League from "./League"


export default function Main() {
    const { choiceForMenu } = useStore()
    console.log('main initial choiceformenu ', choiceForMenu )
    return <>
        {choiceForMenu.leagues && choiceForMenu.leagues.map((league, i) => {
           return <div key={i}> 
           <League league={league} idLeague={i} />
           </div>
        })}
    </>
}