import Translate from "../../../../utills/translate"
import { CgRemove } from 'react-icons/cg'
import { oddBets } from "../../../../utills/oddBets"
import removedItem from "./remove-item-bet-note"
import { useStore } from "../../../../context/store"

export default function ItemBetNote(props) {
    const { removeBetsInNote } = useStore()
    const bet = props.bet
    const nameBets =  oddBets.find(n => {
        return n.id == bet.choice.betsChoice
    })
    console.log(bet.choice.value)
    return <div className="relative p-2 border-t border-primary-ligth flex flex-col">
    <div className="absolute right-0" onClick={() => { removedItem(props.indice, props.vf, bet, props.setVf, removeBetsInNote) }}>
        <span className="inline-block mr-2 font-normal uppercase text-sm text-gray-600">{Translate(bet.choice.value)}</span>
        <span className="inline-block mr-2 font-bold text-gray-600">{bet.choice.odd}</span>
        <CgRemove className="inline-block text-xs text-gray-500 hover:text-red-600 cursor-pointer mr-2" />
    </div>
    <span className="inline-block text-sm font-bold" >
        <span className="block"> {bet.fix.teams['home'].name} </span> <span className="block">{bet.fix.teams['away'].name}</span>
    </span>
    <div className="">
        <span className=" text-gray-500 inline-block text-sm font-normal"><span className="text-blue-800">{nameBets.name}</span> </span>
    </div>
</div>
}