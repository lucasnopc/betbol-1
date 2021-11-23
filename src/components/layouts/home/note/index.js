import { useEffect, useState } from 'react'
import { useStore } from '../../../../context/store'
import NoteBtn from './note-btn'
import ItemBetNote from './item-bet-note'
import { Dialog } from '../../../confirm-dialog'

export default function Note(props) {

    const { note } = useStore()
    const [toggleNoteBets, setToggleNoteBets] = useState(false)
    const [vf, setVf] = useState(10)
    const [retornoPotencial, setRetornoPotencial] = useState()
    useEffect(() => {
        if (note.length != 0) {
            setToggleNoteBets(true)
        }
        retornosPotenciais(note, vf, setRetornoPotencial)
        console.log('cheguei aqui', note)
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
    <div className="rounded-full absolute right-1 bottom-1 bg-primary hover:bg-primary text-white font-bold">{note.lenght}</div>
        <Dialog open={toggleNoteBets} >
            <div onClick={() => setToggleNoteBets(!toggleNoteBets)} className="text-white bg-black border-b border-gray-200">
                <h2 className="p-2 text-xs uppercase font-bold inline-block">
                    Caderneta de apostas
                    <span className="absolute right-5 font-bold">{toggleNoteBets ? `-` : `+`}</span>
                </h2>
            </div>
            <div className={`${toggleNoteBets ? `block` : `hidden`} w-full static max-h-screen md:max-h-full overflow-auto`}>
                {EmptyListBetState()}
                {note.length != 0 && note.map((bet, indice) => {
                    return <ItemBetNote setVf={setVf} key={bet.fix.fixture.id} bet={bet} indice={indice} vf={vf} />

                })}
                <div className="block p-1 border-t border-gray-300 bg-gray-100">
                    <span className="text-sm text-black font-semibold pl-1 w-2/12">R$</span>
                    <input onChange={(r) => {
                        changeInputValue({ obj: r, setVf: setVf, note })
                    }} type="number" className="w-10/12 font-semibold focus:outline-none float-right bg-transparent" min="0" max="2000" step="10" defaultValue="10" />
                </div>
                <div className={`block bg-white bottom-0`}><NoteBtn vf={vf} user={user} retornoPotencial={retornoPotencial} /></div>

            </div>
        </Dialog>
    </>
}