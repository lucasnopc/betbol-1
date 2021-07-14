import { CgRemove } from 'react-icons/cg'
import CalcValorFinal from '../../../utills/valofFinal'
import { useSession } from "next-auth/client"
import axios from 'axios'

export default function NoteBets(props) {
    let user = false
    if (props.userString) {
        user = JSON.parse(props.userString)
    }
    const BtnBet = (user) => {
        const [session] = useSession()
        const startBet = (user) => {
            if(user){
                let valorTotal = 0
                console.log(props.listBetState)
                props.listBetState.map((bet, indice) => {
                    valorTotal += Number(bet.value)
                })
                if(valorTotal > 0 && valorTotal < user.points) {
                    const setPoints = user.points - valorTotal
                    axios.post('/api/betApi/toBet', {
                        points: setPoints,
                        email: user.email,
                        bets: props.listBetState
                    })
                    .then(function (response) {
                        alert('Aposta Realizada com sucesso!')
                         location.reload()
                       })
                       .catch(function (error) {
                         console.log(error);
                       });
                }else {
                    if(valorTotal == 0){
                        alert('Selecione as apostas e insira os valores')
                    }
                alert('Você não tem pontos suficientes')
                }
            }else {
                alert('Faça login para continuar')
            }
        }

        if (!session) {
            return <>
            <button className="w-full bg-green-400 cursor-not-allowed font-semibold text-md text-green-900 hover:text-green-100 uppercase p-3 disabled:opacity-50" disabled>Fazer Aposta <ValorFinal /><br />
    </button>
            <span className="text-sm">Faça Login para finalizar a aposta</span>
    
    </>
        }
        
        return <button onClick={() => {startBet(user.user)}} className="w-full bg-green-400 hover:bg-green-700 cursor-pointer font-semibold text-md text-green-900 hover:text-green-100 uppercase p-3">Fazer Aposta <ValorFinal /></button>
      }
    
    const DeleteBetInList = (indice) => {
        const ListBetStateDuplicate = [...props.listBetState]
        ListBetStateDuplicate.splice(indice, 1)
        props.setListBetState(ListBetStateDuplicate)
        const valorfinal = CalcValorFinal(props.listBetState) - props.listBetState[indice].value
        props.setValorFinal(valorfinal)
        console.log(props.GetValorFinal)
    }
    const ValorFinal = () => {
        if(props.getValorFinal == 0) return ""
        return props.getValorFinal
    }
    const changeInputValue = data => {
        const id = data.target.alt
        const ListBetStateDuplicate = [...props.listBetState]

        for(let i = 0; i < ListBetStateDuplicate.length; i++) {
            if(ListBetStateDuplicate[i].bet.id == id) {
                ListBetStateDuplicate[i].value = data.target.value
            }
        }
        props.setListBetState(ListBetStateDuplicate)
        props.setValorFinal(CalcValorFinal(props.listBetState))
    }

    return <>
    <div className="max-w-sm border-2 rounded-lg  border-gray-200 mt-3 flex-grow ml-3">
    <h2 className="text-lg rounded-t-lg font-semibold text-gray-800 uppercase bg-gray-100 px-3 border-b py-1 border-gray-200">CADERNETA DE APOSTAS</h2>
    <div className="h-60 overflow-auto">
        {props.listBetState.map((bet, indice) => {
            const choice = bet.choice.substr(3, 4)
            const name = () => {
                if (choice == 'draw') return 'Empate'
                return bet.bet.teams[choice].name
            }
            const OddNumber = (choice) => {
                const choiceValues = bet.bet.odds.bookmakers[0].bets[0].values
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
    <BtnBet user={user} /> 
    </div>
</div></>
}