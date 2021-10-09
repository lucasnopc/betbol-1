import { useStore } from "../../context/store"
import League from "./League"


export default function Main() {
    const { choiceForMenu } = useStore()
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