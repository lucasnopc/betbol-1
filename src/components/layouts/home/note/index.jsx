import { useEffect, useState } from 'react'
import { useStore } from '../../../../context/store'
import WithoutAccountButtom from './without-account-buttom'
import NoteBtn from './note-btn'
import ItemBetNote from './item-bet-note'
import { Dialog } from '../../../confirm-dialog'
import { ToastContainer, toast } from 'react-toastify';
import useFetch from '../../../../utills/useFetch'
import FullLoading from '../../../fullloading'
import retornoPotencialCalc from '../../../../utills/retornoPotencial'
import { CgRemove } from 'react-icons/cg'
import { useSession } from "next-auth/client"

export default function Note() {
    const { note } = useStore()
    const [config, setConfig] = useState({})
    const [toggleNoteBets, setToggleNoteBets] = useState(false)
    const [vf, setVf] = useState(10)
    const [retornoPotencial, setRetornoPotencial] = useState()
    const { data, error } = useFetch('/api/adm/config')
    const [session] = useSession()

    useEffect(() => { if (data) setConfig(data.config[0].config) }, [data])
    useEffect(() => setRetornoPotencial(retornoPotencialCalc(note, vf, config)), [note])

    const changeInputValue = (change) => {
        const value = change.obj.target.value
        change.setVf(value)
        setRetornoPotencial(retornoPotencialCalc(change.note, value, config))
    }

    const EmptyListBetState = () => {
        if (note.length == 0) {
            return <div className="w-full p-3">Caderneta de apostas vazia</div>
        }
        return <></>
    }

    if (config.length == 0) return <FullLoading />

    return <>
        <div onClick={e => setToggleNoteBets(true)} className={`${note.length != 0 ? '' : 'hidden'} absolute bottom-1 right-1 bg-primary hover:bg-primary-ligth cursor-pointer w-10 h-10 text-center rounded-tl-xl rounded-full shadow-xl flex items-center justify-center`}>
            <span className="font-bold text-lg text-white">{note.length}</span>
        </div>
        <div className="rounded-full absolute right-1 bottom-1 bg-primary hover:bg-primary text-white font-bold">{note.lenght}</div>
        <Dialog open={toggleNoteBets} >
            <div onClick={() => setToggleNoteBets(!toggleNoteBets)} className="text-white bg-black border-b border-gray-200">
                <h2 className="p-2 text-xs text-white  uppercase font-bold inline-block">
                    Caderneta de apostas
                    <span className="absolute right-5 font-bold text-white text-2xl"><CgRemove /></span>
                </h2>
            </div>
            <div className={`${toggleNoteBets ? `block` : `hidden`} w-full static max-h-screen md:max-h-full overflow-auto`}>
                {EmptyListBetState()}
                {note.length != 0 && note.map((bet, indice) => {
                    return <ItemBetNote setVf={setVf} key={bet.fix.fixture.id} bet={bet} indice={indice} vf={vf} />
                })}
                <form onSubmit={e => e.preventDefault()}>
                    <div className="block p-1 border-t border-gray-300 bg-gray-100">
                        <span className="text-sm text-black font-semibold pl-1 w-2/12">R$</span>
                        <input onChange={(r) => {
                            if (r.target.value.length >= 2) {
                                if (r.target.value < config.min_value) r.target.value = config.min_value
                                if (r.target.value > config.max_value) r.target.value = config.max_value
                            }
                            changeInputValue({ obj: r, setVf, note })
                        }} type="number" className="w-10/12 font-semibold focus:outline-none float-right bg-transparent" min={config.min_value} max={config.max_value} step="10" defaultValue={config.min_value} />
                    </div>
                    {session &&  <div className={`block bg-white bottom-0`}><NoteBtn config={config} vf={vf} retornoPotencial={retornoPotencial} toast={toast} setToggleNoteBets={setToggleNoteBets} /></div>}
                    {!session && <div className={`block bg-white bottom-0`}><WithoutAccountButtom config={config} vf={vf} retornoPotencial={retornoPotencial} toast={toast} setToggleNoteBets={setToggleNoteBets} /></div>}
                </form>
            </div>
        </Dialog>
        <ToastContainer />
    </>
}