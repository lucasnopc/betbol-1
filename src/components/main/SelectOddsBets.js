import { oddBets } from '../../utills/oddBets'

export default function SelectOddsBets(props) {
    return <div className="h-8 w-full p-1">
            <select className="float-right border border-gray-300 p-1 rounded-lg cursor-pointer" value={props.bets} onChange={(change) => {
                props.setBets(change.target.value)
            }}>
                {oddBets.map((bet, i) => {
                    return <option key={i} value={bet.id}>{bet.name}</option>
                })}
            </select>
        </div>
}