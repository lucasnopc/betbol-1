import { useEffect, useState } from 'react'
import { useStore } from '../../../../context/store'
import NoteBtn from './note-btn'
import ItemBetNote from './item-bet-note'

export default function Note(props) {

    const { note } = useStore()
    const [toggleNoteBets, setToggleNoteBets] = useState(false)
    const [vf, setVf] = useState(10)
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
                    return <ItemBetNote setVf={setVf} key={bet.fix.fixture.id} bet={bet} indice={indice} vf={vf} />

                })}
                <div className="block p-1 border-t border-gray-300 bg-green-100">
                        <span className="text-sm text-green-800 pl-1 w-2/12">R$</span>
                        <input onChange={(r) => {
                            changeInputValue({ obj: r, setVf: setVf, note })
                        }} type="number" className="w-10/12 focus:outline-none float-right bg-transparent" min="0" max="2000" step="10" defaultValue="10" />
                </div>
                <div className={`block bg-white bottom-0`}><NoteBtn vf={vf} user={user} retornoPotencial={retornoPotencial} /></div>
            
            </div>
        </div>
    </>
}