import { CgRemove } from 'react-icons/cg'
import { useEffect, useState } from 'react'
import Translate from '../../../utills/translate'
import { useStore } from '../../../context/store'
import BtnBet from './noteBetsBtn'

export default function NoteBets(props) {
    const { note, removeBetsInNote, changeVf } = useStore()
    const [toggleNoteBets, setToggleNoteBets] = useState(false)
    const [vf, setVf] = useState([])
    let user = false
    if (props.userString) {
        user = JSON.parse(props.userString)
    }

    const removedItem = (indice, vf, bet) => {
        const newVf = [...vf]
        console.log('bet', bet.fix.fixture.id, newVf)
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
        const idBet = change.value
        const idNote = change.idNote
        const newVf = [...vf]

        const valorUnicoVF = { id: idBet, value: value, idNote }

        if (newVf.length == 0) {
            newVf.push(valorUnicoVF)
            setVf(newVf)
            changeVf(valorUnicoVF)
        } else {
            const indiceIfValueExist = newVf.find((r, i) => {
                if (r.id == idBet) {
                    newVf[i] = valorUnicoVF
                    setVf(newVf)
                    changeVf(valorUnicoVF)

                    return true
                } else {
                    return false
                }
            })
            if (!indiceIfValueExist) {
                newVf.push(valorUnicoVF)
                setVf(newVf)
            }
        }
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
    return <>
        <div className=" bg-white fixed bottom-0 left-0 md:relative max-w-sm shadow-md border-gray-200 mt-3 flex-grow">
            <h2 onClick={() => {
                setToggleNoteBets(!toggleNoteBets)
            }} className="block-title">CADERNETA DE APOSTAS</h2>

            <div className={`${hiddenOrStaticToggle(toggleNoteBets)} w-full static max-h-60 md:max-h-full overflow-auto`}>
                {EmptyListBetState()}
                {note.map((bet, indice) => {
                    console.log('bet noteBets ', bet)
                    const choice = bet.choice.value
                    const oddNumber = bet.choice.odd
                    const RetornosPotenciais = (bet, oddNumber) => {
                        if (bet.value > 0) {

                            return <>
                                <span className="text-xs w-10">Retornos Potenciais: R$ {Math.floor(bet.value * oddNumber)}</span>
                            </>
                        }
                        return ""
                    }

                    return <div key={bet.fix.fixture.id} className="p-2 bg-gray-50 border-b border-yellow-500 flex flex-col">
                        <div className="inline-block">
                            <div className="flex flex-col">
                                <span className="flex-1 inline-block text-sm font-normal" onClick={() => { removedItem(indice, vf, bet) }}>
                                    <CgRemove className="inline-block text-xs text-gray-500 hover:text-red-600 cursor-pointer mr-2" />
                                    <div className="inline-block">{bet.fix.teams['home'].name} <span className="font-normal">vs</span> {bet.fix.teams['away'].name}</div>

                                </span>
                                <span className="text-sm">{bet.fix.league.country}/{bet.fix.league.name}</span>
                                <div className="flex-1">
                                    <span className="bg-yellow-200 mx-2 rounded-md font-normal text-yellow-600">{oddNumber}</span>
                                    <span className=" text-gray-500 inline-block text-sm font-normal">{bet.odd} - <span className="text-blue-800">{Translate(bet.value)}</span> </span>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block">
                            <div className="border border-gray-200">
                                <form className="bg-white inline-block w-full">
                                    <span className="text-sm text-green-800 pl-1 w-2/12">R$</span>
                                    <input onChange={(r)=> {
                                        changeInputValue({ obj: r, value: bet.fix.fixture.id, idNote: indice })
                                        }} type="number" className="w-10/12 focus:outline-none float-right" alt={bet.fix.id} min="0" />
                                </form>
                            </div>
                            <RetornosPotenciais bet={bet} oddNumber={oddNumber} />
                        </div>
                    </div>
                })}
                <div className={`block bg-white bottom-0`}><BtnBet vf={vf} user={user} /></div>
            </div>
        </div>
    </>
}