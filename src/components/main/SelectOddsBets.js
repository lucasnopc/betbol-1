import { oddBets } from '../../utills/oddBets'

export default function SelectOddsBets(props) {
    return <div className="inline-block w-full p-1">
            <select className="bg-gray-200 border-none float-right border border-gray-300 p-2 rounded-lg cursor-pointer" value={props.bets} onChange={(change) => {
                props.setBets(change.target.value)
            }}>
                {oddBets.map((bet, i) => {
                    return <option className="text-gray-500 uppercase text-normal" key={bet.id} value={bet.id}>{bet.name}</option>
                })}
            </select>
        </div>
}