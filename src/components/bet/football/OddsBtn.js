import { FcLock, FcSynchronize } from 'react-icons/fc'
import { useEffect, useState } from 'react'
import GetOdds from '../../../utills/getOdds'
import CalcValorFinal from '../../../utills/valofFinal'
import useSWR from 'swr'

export default function OddsBtn(props) {
    const [moreOptions, setMoreOptions] = useState(false)
    const changeOverflowLive = () => {
        const live = document.querySelector(`#live`);
        if (moreOptions) {
            live.style.overflow = "auto"
        } else {
            live.style.overflow = "hidden"
        }
        window.scrollTo(0, 0);
        live.scrollTo(0, 0);
    }
    const onSubmit = data => {

        const choice = data.target.id.substring(0, 7)
        const betsOn = {
            bet: JSON.parse(data.target.value),
            buttonId: data.target.id,
            checked: data.target.checked,
            choice,
            value: 0
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
        props.setValorFinal(CalcValorFinal(props.listBetState))

    }


    const game = props.game
    const { data, error } = useSWR(`/api/betApi/odds/${game.id}`, GetOdds(game.id))
    if (error) { console.log(error) }
    if (!data) {
        return <>
            <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcSynchronize className="animate-spin" /></div>
            <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcSynchronize className="animate-spin" /></div>
            <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcSynchronize className="animate-spin" /></div>
        </>
    }
    if (data.odds.results == 0) {
        return <>
            <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcLock /></div>
        </>
    }
    const odds = data.odds.response[0].bookmakers[0].bets[0].values
    if (typeof data.odds.response[0] === "undefined" || odds.length < 3) {
        if (typeof game.index != "undefined") {
            game.odds = 'undefined'
            // console.log(game.index)
            // const getTimeBetDuplicate = [...props.getTimeBet]
            // getTimeBetDuplicate.splice(game.index, 1)
            // props.setTimeBet(getTimeBetDuplicate)
        }
        return <>
            <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcLock /></div>
        </>
    }
    let statusChecked = [false, false, false]
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
    let othersOdds = 0
    game.odds.bookmakers[0].bets.map((bet, i) => {
        othersOdds = othersOdds + bet.values.length
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
            <label className="pt-5 px-5 h-full inline-block md:px-6 text-sm text-gray-700 cursor-pointer hover:bg-yellow-200 label-checked:bg-yellow-500 label-checked:text-white font-normal" htmlFor={`bethome-${game.id}`}>{odds[0].odd}</label>
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
            <label className="pt-5 px-5 h-full inline-block md:px-6 text-sm text-gray-700 cursor-pointer hover:bg-yellow-200 label-checked:bg-yellow-500 label-checked:text-white font-normal" htmlFor={`betdraw-${game.id}`}>{odds[1].odd}</label>
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
            <label className="pt-5 px-5 h-full inline-block md:px-6 text-sm text-gray-700 cursor-pointer hover:bg-yellow-200 label-checked:bg-yellow-500 label-checked:text-white font-normal" htmlFor={`betaway-${game.id}`}>{odds[2].odd}</label>
        </div>
        <a onClick={() => {
            setMoreOptions(!moreOptions)
            changeOverflowLive()
        }} className="pt-5 h-full inline-block md:px-6 text-sm text-gray-700 cursor-pointer hover:bg-yellow-200 label-checked:bg-yellow-500 label-checked:text-white font-normal">+ {othersOdds}</a>
        <div className={`${moreOptions ? `block` : `hidden`} absolute top-0 left-0 block w-full h-full bg-white overflow-auto`}>
            <div className={`absolute w-full text-center`}>
                <span onClick={() => {
                    setMoreOptions(!moreOptions)
                    changeOverflowLive()
                }} className="text-left block p-3 hover:font-medium cursor-pointer text-gray-700">  Voltar </span>
                {game.odds.league.country}: {game.teams.home.name} x {game.teams.away.name}
                <ul>{game.odds.bookmakers[0].bets.map((bet, i) => {
                    return <li key={i}>
                        <span className="bg-blue-100 w-full block font-medium p-3">
                            {bet.name}
                        </span>
                        <ul>
                            {bet.values.map((val, i) => {
                                return <li key={i} className="bg-blue-50 my-4 rounded-lg mx-1 border-2 border-blue-200">
                                    <span>{val.odd}</span><br />
                                    <span>{val.value}</span>
                                </li>
                            })}
                        </ul>
                    </li>
                })}</ul>
            </div>
        </div>
    </div>
}