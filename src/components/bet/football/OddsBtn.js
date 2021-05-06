import { FcLock, FcSynchronize } from 'react-icons/fc'
import Link from 'next/link'
import GetOdds from '../../../utills/getOdds'
import useSWR from 'swr'

export default function OddsBtn(props) {
    const onSubmit = data => {

        const choice = data.target.id.substring(0, 7)
        const betsOn = {
            bet: JSON.parse(data.target.value),
            buttonId: data.target.id,
            checked: data.target.checked,
            choice,
            value:0
        }
        if (props.listBetState.length == 0) {
             props.setListBetState([betsOn])
            return ''
        }
        for (let i = 0; i < props.listBetState.length; i++) {
            if (props.listBetState[i].bet.id == betsOn.bet.id) {
                const ListBetStateDuplicate = [...props.listBetState]
                betsOn.value = props.listBetState[i].value
                ListBetStateDuplicate[i] = betsOn
                props.setListBetState(ListBetStateDuplicate)
                return ''
            }
        }
        props.setListBetState([...props.listBetState, betsOn])
    }


    const game = props.game
    const { data, error } = useSWR(`/api/betApi/odds/${game.id}`, GetOdds(game.id))
    if(!data) {
        return <>
            <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcSynchronize className="animate-spin" /></div>
            <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcSynchronize className="animate-spin" /></div>
            <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcSynchronize  className="animate-spin" /></div>
        </>
    }

    if (typeof data.odds.response[0] === "undefined") { 
        return <>
            <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcLock /></div>
        </>
    }
    let statusChecked = [false, false, false]
    const odds = data.odds.response[0].bookmakers[0].bets[0].values
    game.odds = data.odds.response[0]
    const gameText = JSON.stringify(game)
        props.listBetState.map((BetState, indice) => {
            if (props.listBetState[indice].bet.id == game.id) {
                switch (BetState.choice) {
                    case "bethome":
                        statusChecked = [true, false, false]
                        break
                    case "betdraw":
                        statusChecked = [false, true, false]
                        break
                    case "betaway":
                        statusChecked = [false, false, true]
                        break

                }
            }
        })
        return <div className="h-full">
                <div className="inline-block h-full">
                    <input
                        type="radio"
                        id={`bethome-${game.id}`}
                        name={`bet-${game.id}`}
                        value={gameText}
                        checked={statusChecked[0]}
                        onChange={onSubmit}
                        className="hidden" />
                    <label className="pt-5 h-full inline-block md:px-6 text-sm text-gray-700 cursor-pointer hover:bg-yellow-200 label-checked:bg-yellow-500 label-checked:text-white font-normal" htmlFor={`bethome-${game.id}`}>{odds[0].odd}</label>
                </div>
                <div className="inline-block h-full">
                    <input
                        type="radio"
                        id={`betdraw-${game.id}`}
                        name={`bet-${game.id}`}
                        value={gameText}
                        checked={statusChecked[1]}
                        onChange={onSubmit}
                        className="hidden" />
                    <label className="pt-5 h-full inline-block md:px-6 text-sm text-gray-700 cursor-pointer hover:bg-yellow-200 label-checked:bg-yellow-500 label-checked:text-white font-normal" htmlFor={`betdraw-${game.id}`}>{odds[1].odd}</label>
                </div>
                <div className="inline-block h-full">
                    <input
                        type="radio"
                        id={`betaway-${game.id}`}
                        name={`bet-${game.id}`}
                        value={gameText}
                        checked={statusChecked[2]}
                        onChange={onSubmit}
                        className="hidden" />
                    <label className="pt-5 h-full inline-block md:px-6 text-sm text-gray-700 cursor-pointer hover:bg-yellow-200 label-checked:bg-yellow-500 label-checked:text-white font-normal" htmlFor={`betaway-${game.id}`}>{odds[2].odd}</label>
                </div>
                <Link href={`/sports/footbal/more-options?fixture=${game.id}`}><a className="pt-5 h-full inline-block md:px-6 text-sm text-gray-700 cursor-pointer hover:bg-yellow-200 label-checked:bg-yellow-500 label-checked:text-white font-normal">+</a></Link>
        </div>
    }