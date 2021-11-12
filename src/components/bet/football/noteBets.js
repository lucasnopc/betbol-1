import { CgRemove } from 'react-icons/cg'
import { useEffect, useState } from 'react'
import Translate from '../../../utills/translate'
import { useStore } from '../../../context/store'
import BtnBet from './noteBetsBtn'
import { oddBets } from '../../../utills/oddBets'

export default function NoteBets(props) {
    const { note, removeBetsInNote, changeVf } = useStore()
    const [toggleNoteBets, setToggleNoteBets] = useState(false)
    const [vf, setVf] = useState([])
    const [retornoPotencial, setRetornoPotencial] = useState()
    useEffect(() => {
        if(note.length != 0 ) {
            setToggleNoteBets(true)
        }
        retornosPotenciais(note, vf, setRetornoPotencial)
    }, [note])

    let user = false
    if (props.userString) {
        user = JSON.parse(props.userString)
    }

    const removedItem = (indice, vf, bet) => {
        const newVf = [...vf]
        if (newVf.length > 0) {
            const indexElement = newVf.findIndex((element) => {
                return element.id === bet.fix.fixture.id
            })
            if (indexElement >= 0) {
                newVf.splice(indexElement, 1)
                setVf(newVf)
            }
        }
        removeBetsInNote(indice)
    }

    const changeInputValue = (change) => {
        const value = change.obj.target.value
        change.setVf(value)
        retornosPotenciais(change.note, value, setRetornoPotencial)
    }
    const hiddenOrStaticToggle = (toggleNoteBets) => {
        if (!toggleNoteBets) return `hidden md:block`
        return `static`
    }
    const EmptyListBetState = () => {
        if (note.length == 0) {
            return <div className="w-full p-3">Caderneta de apostas vazia</div>
        }
        return <></>
    }

    const retornosPotenciais = (note, vf, setRetornoPotencial) => {
        if (note.length != 0 && vf != 0) {
            const singleValue = vf / note.length
            const response = note.map((n, i) => {
                return Number(n.choice.odd) * singleValue
            }).reduce((total, n) => total + n)
            setRetornoPotencial(response.toFixed(2))
        } else {
            setRetornoPotencial(0)
        }
    }

    return <>
        <div className=" bg-white w-full fixed bottom-0 left-0 md:relative max-w-sm shadow-md border-gray-200 mt-3 flex-grow">
            <h2 onClick={() => {
                setToggleNoteBets(!toggleNoteBets)
            }} className="relative font-normal p-2 text-gray-100 text-center md:text-gray-900 bg-gray-800 md:bg-gray-50 border-b border-gray-200">
                CADERNETA DE APOSTAS
                <span className="md:hidden absolute right-5 font-bold">{toggleNoteBets ? `-` : `+`}</span>
            </h2>

            <div className={`${hiddenOrStaticToggle(toggleNoteBets)} w-full static max-h-60 md:max-h-full overflow-auto`}>
                {EmptyListBetState()}
                {note.map((bet, indice) => {
                    const oddNumber = bet.choice.odd
                    const nameBets =  oddBets.find(n => {
                        return n.id == bet.choice.betsChoice
                    })
                    return <div key={bet.fix.fixture.id} className="relative p-2 border-b border-yellow-500 flex flex-col">
                        <div className="absolute right-0" onClick={() => { removedItem(indice, vf, bet) }}>
                            <span className="inline-block mr-2 font-normal uppercase text-sm text-gray-600">{Translate(bet.choice.value)}</span>
                            <span className="inline-block mr-2 font-bold text-gray-600">{oddNumber}</span>
                            <CgRemove className="inline-block text-xs text-gray-500 hover:text-red-600 cursor-pointer mr-2" />
                        </div>
                        <span className="inline-block text-sm font-bold" >
                            <span className="block"> {bet.fix.teams['home'].name} </span> <span className="block">{bet.fix.teams['away'].name}</span>
                        </span>
                        <div className="">
                            <span className=" text-gray-500 inline-block text-sm font-normal"><span className="text-blue-800">{nameBets.name}</span> </span>
                        </div>
                    </div>

                })}
                <div className="block p-1 border-t border-gray-300 bg-green-100">
                    <form className="inline-block w-full">
                        <span className="text-sm text-green-800 pl-1 w-2/12">R$</span>
                        <input onChange={(r) => {
                            changeInputValue({ obj: r, setVf: setVf, note })
                        }} type="number" className="w-10/12 focus:outline-none float-right bg-transparent" min="0" max="2000" step="10" />
                    </form>
                </div>
                <div className={`block bg-white bottom-0`}><BtnBet vf={vf} user={user} retornoPotencial={retornoPotencial} /></div>
            </div>
        </div>
    </>
}