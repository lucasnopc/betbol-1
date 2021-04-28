import OddsBtn from './OddsBtn'
import { CgRemove } from 'react-icons/cg'

export default function SoccerLive(props) {
    const changeInputValue = data => {
        const id = data.target.alt
        const ListBetStateDuplicate = [...props.listBetState]

        for(let i = 0; i < ListBetStateDuplicate.length; i++) {
            if(ListBetStateDuplicate[i].bet.id == id) {
                ListBetStateDuplicate[i].value = data.target.value
            }
        }
        props.setListBetState(ListBetStateDuplicate)
    }
    const DeleteBetInList = (indice) => {
        const ListBetStateDuplicate = [...props.listBetState]
        ListBetStateDuplicate.splice(indice, 1)
        props.setListBetState(ListBetStateDuplicate)
    }
    const ValorFinal = () => {
        if(props.valorFinal == 0) return ""
        return props.valorFinal
    }
    if (props.soccer.length == 0) {
        return (
            <>

                <h1>No momento, não há eventos ao vivo deste esporte para mostrar.</h1>
            </>
        )
    }
    return (
        <div className="flex flex-col md:flex-row px-4 select-none">
            <div className="border-2 rounded-lg border-gray-200 mt-3 flex-grow">
                <h2 className="text-lg rounded-t-lg font-semibold text-gray-800 uppercase bg-gray-100 px-3 border-b py-1 border-gray-200 mb-2">AO VIVO</h2>
                <div className="h-96 overflow-auto p-3">
                    {props.ligas.map((liga, indice) => {
                        return (
                            <div key={indice} className="">
                                <div className="text-md font-normal uppercase text-gray-800">
                                    <span className="text-gray-500 font-normal">liga: </span>{liga.liga.name}<span className="text-gray-500 font-normal"> | Pais: </span>{liga.liga.country}
                                </div>
                                {liga.games.map((game, index) => {
                                    return (
                                        <div key={index} className="bg-gray-100 rounded-md border-2 border-gray-200 mb-2 h-16 overflow-hidden">
                                            <div className="inline-block">
                                                <div><span className="text-xs mr-2 text-center inline-block">{game.goals.home}</span><span className="text-gray-600 font-normal text-sm inline-block">{game.teams.home.name}</span></div>
                                                <div><span className="text-xs mr-2 text-center inline-block">{game.goals.away}</span><span className="text-gray-600 font-normal text-sm inline-block">{game.teams.away.name}</span></div>
                                            </div>
                                            <div className="inline-block float-right h-full bg-white">
                                                <OddsBtn game={game} setListBetState={props.setListBetState} listBetState={props.listBetState} />
                                            </div>


                                        </div>
                                    )
                                })}

                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="max-w-sm border-2 rounded-lg  border-gray-200 mt-3 flex-grow ml-3">
                <h2 className="text-lg rounded-t-lg font-semibold text-gray-800 uppercase bg-gray-100 px-3 border-b py-1 border-gray-200">CADERNETA DE APOSTAS</h2>
                <div className="h-96 overflow-auto">
                    {props.listBetState.map((bet, indice) => {
                        const choice = bet.choice.substr(3, 4)
                        const name = () => {
                            if (choice == 'draw') return 'Empate'
                            return bet.bet.teams[choice].name
                        }
                        const OddNumber = (choice) => {
                            const choiceValues = bet.bet.odds[0].bookmakers[0].bets[0].values
                                if (choice == 'home') return choiceValues[0].odd                           
                                if (choice == 'draw') return choiceValues[1].odd                           
                                if (choice == 'away') return choiceValues[2].odd                     
                        }
                        const RetornosPotenciais = () => {
                        if(bet.value > 0) {

                            return<>
                                <span className="text-xs w-10">Retornos Potenciais: R$ {Math.floor(bet.value * OddNumber(choice))}</span>
                            </>
                            }
                            return ""
                        }
                        return <div key={indice} className="p-2 bg-yellow-50 border-b-2 border-yellow-500 flex">
                            <div className="inline-block w-1/2">
                                <span onClick={() => DeleteBetInList(indice)}><CgRemove className="inline-block text-xs text-gray-500 hover:text-red-600 cursor-pointer mr-2" /></span>
                                <div className="inline-block"><span className=" inline-block line-clamp-1 text-sm font-normal w-20 overflow-hidden overflow-ellipsis">{name()} </span><span className="text-xs p-1 rounded-md font-normal text-blue-800 inline-block">{OddNumber(choice)}</span></div>
                                <div className="ml-5 text-xs">{bet.bet.teams['home'].name} vs {bet.bet.teams['away'].name}</div>
                            </div>
                            <div className="inline-block w-1/2">
                               <div className="border border-gray-200">
                                        <form onChange={changeInputValue} className="bg-white inline-block">
                                            <span className="text-sm text-green-800 pl-1">R$</span> 
                                            <input type="number" className="w-10/12 focus:outline-none float-right" alt={bet.bet.id} /> 
                                        </form>
                               </div>
                                    <RetornosPotenciais />
                            </div>
                        </div>
                    })}
                </div>
            <button className="w-full bg-green-400 hover:bg-green-700 cursor-pointer font-semibold text-md text-green-900 hover:text-green-100 uppercase p-3">Fazer Aposta <ValorFinal /></button>
            </div>
        </div>
    )
}