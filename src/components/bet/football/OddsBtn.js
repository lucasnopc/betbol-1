import { FcLock, FcSynchronize } from 'react-icons/fc'
import { useEffect, useState } from 'react'
import GetOdds from '../../../utills/getOdds'
import ChangeOverflowLive from '../../../utills/changeOverflowLive'
import CalcValorFinal from '../../../utills/valofFinal'
import Translate from '../../../utills/translate'
import useSWR from 'swr'


export default function OddsBtn(props) {
    const [moreOptions, setMoreOptions] = useState(false)

    const addOddInListBetState = ({ odd, game, odds }) => {
        const betsOn = {
            odd,
            game,
            odds
        }
        if (props.listBetState.length == 0) {
            props.setListBetState([betsOn])
            return ''
        }
        console.log(props.listBetState)
        for (let i = 0; i < props.listBetState.length; i++) {
            if (props.listBetState[i].odd.odd == betsOn.odd.odd && props.listBetState[i].game.id == betsOn.game.id) {
                        // const ListBetStateDuplicate = [...props.listBetState]
                        // betsOn.value = props.listBetState[i].value
                        // ListBetStateDuplicate[i] = betsOn
                        // props.setListBetState(ListBetStateDuplicate)
                            alert('você já adicionou esta chance na caderneta de apostas')
                        return
                    }
                }
                props.setListBetState([...props.listBetState, betsOn])
                props.setValorFinal(CalcValorFinal(props.listBetState))

    }


    const game = props.game
    const { data, error } = useSWR(`/api/betApi/odds/${game.id}`, GetOdds(game.id))
    if (error) {
        console.log(error)
        return <>
            <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"> error</div>
            <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"> error</div>
            <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"> error</div>
        </>
    }
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
    const odds = data.odds.response[0].bookmakers[0]
    if (typeof data.odds.response[0] === "undefined") {
        if (typeof game.index != "undefined") {
            game.odds = 'undefined'
        }
        return <>
            <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcLock /></div>
        </>
    }
    let statusChecked = [false, false, false]
    game.odds = data.odds.response[0]
    const gameText = JSON.stringify(game)
    // props.listBetState.map((BetState, indice) => {
    //     if (props.listBetState[indice].bet.id == game.id) {
    //         switch (BetState.choice) {
    //             case "home":
    //                 statusChecked = [true, false, false]
    //                 break
    //             case "draw":
    //                 statusChecked = [false, true, false]
    //                 break
    //             case "away":
    //                 statusChecked = [false, false, true]
    //                 break

    //         }
    //     }
    // })
    let othersOdds = 0
    game.odds.bookmakers[0].bets.map((bet, i) => {
        othersOdds = othersOdds + bet.values.length
    })
    const inputsOdds = (game, odds, classes) => {
        const gameText = JSON.stringify(game)
        return <>
            {odds.values.map((odd, i) => {
                odd.value = Translate(odd.value)
                return <div key={i} className={`flex-1 ${classes}`}>
                    <button onClick={() => { addOddInListBetState({ odd, game, odds }) }} className="odds-btn w-full">
                        <span>{odd.odd}</span>
                        <span>{odd.value}</span>
                    </button>
                </div>
            })}
        </>
    }
    return <div className="h-full flex">
        {inputsOdds(game, odds.bets[0])}
        <div className="flex-1">
            <button onClick={() => {
                setMoreOptions(!moreOptions)
                ChangeOverflowLive(moreOptions)
            }} className="odds-btn mr-0">
                <span>MAIS</span>
                <span>{othersOdds}</span>
            </button>
        </div>
        <div className={`${moreOptions ? `block` : `hidden`} bg-white absolute top-0 left-0 block w-full h-full  overflow-auto`}>
            <div className={`absolute w-full text-center`}>
                <div className="bg-gray-800 text-white">

                <span onClick={() => {
                    setMoreOptions(!moreOptions)
                    ChangeOverflowLive(moreOptions)
                }} className="text-left p-3 hover:font-medium cursor-pointer">  Voltar </span>
                {game.odds.league.country}: {game.teams.home.name} x {game.teams.away.name}
                    </div>
                <ul>
                    {game.odds.bookmakers[0].bets.map((bet, i) => {
                        //treicho de código lento, verificar e otimizar
                        return <li key={i} className="border p-2 m-2 bg-gray-100 rounded-md">
                            <span className="w-full block font-medium p-3">
                                {Translate(bet.name)}
                            </span>
                            <div className="flex flex-wrap">
                                {inputsOdds(game, bet, "p-2")}
                            </div>
                            {/* <div className="flex flex-wrap p-3">
                            {bet.values.map((odd, i) => {
                                odd.value = Translate(odd.value)
                                return <button onClick={() => { addOddInListBetState({ odd, game, odds: bet }) }} key={i} className="hover:bg-yellow-200 bg-blue-50 my-4 rounded-lg mx-1 border-2 border-blue-200 flex-auto p-3">
                                    <span>{odd.odd}</span><br />
                                    <span>{odd.value}</span>
                                </button>
                            })}
                        </div> */}
                        </li>
                    })}</ul>
            </div>
        </div>
    </div>
}