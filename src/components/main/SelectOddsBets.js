import { oddBets } from '../../utills/oddBets'

export default function SelectOddsBets(props) {
    return <div className="inline-block mt-1 float-right md:px-1">
            <select className="overflow-auto bg-gray-200 hover:bg-gray-100 float-right border border-gray-200 p-1 outline-none cursor-pointer" onChange={(change) => {
                props.setBets(change.target.value)
                console.log(change.target.value)
            }}>
                {oddBets.map((bet, i) => {
                    return <option className="text-gray-900 text-normal text-xs" key={bet.id} value={bet.id}>{bet.name}</option>
                })}
            </select>
        </div>
}