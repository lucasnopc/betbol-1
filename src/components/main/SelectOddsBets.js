import { oddBets } from '../../utills/oddBets'

export default function SelectOddsBets(props) {
    return <div className="inline-block w-full p-1">
            <select className="overflow-auto w-full bg-gray-50 hover:bg-gray-100 float-right border border-gray-200 p-3 outline-none cursor-pointer" value={props.bets} onChange={(change) => {
                props.setBets(change.target.value)
            }}>
                {oddBets.map((bet, i) => {
                    return <option className="text-gray-500 uppercase text-normal" key={bet.id} value={bet.id}>{bet.name}</option>
                })}
            </select>
        </div>
}