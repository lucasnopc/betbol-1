import { oddBets } from '../../utills/oddBets'

export default function SelectOddsBets(props) {
    return <div className="inline-block md:float-right">
            <select className="font-semibold overflow-auto text-right bg-gray-50 uppercase hover:bg-gray-100 float-right border border-gray-100 p-1 mr-2 outline-none cursor-pointer w-full text-gray-700 text-sm" onChange={(change) => {
                props.setBets(change.target.value)
            }}>
                {oddBets.map((bet, i) => {
                    return <option className="text-gray-700 font-semibold uppercase text-xs" key={bet.id} value={bet.id}>{bet.name}</option>
                })}
            </select>
        </div>
}