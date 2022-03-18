import { useEffect, useState } from "react"
import { useStore } from "../../context/store"
import useFetch from "../../utills/useFetch"
import FullLoading from "../fullloading"
import { toast } from 'react-toastify';
import Translate from '../../utills/translate'

export default function Button({ fix, val, bets, value }) {
    const [checked, setChecked] = useState(false)
    const [config, setConfig] = useState({})
    const { data, error } = useFetch('/api/adm/config')
    const { setGoBetsInNote, removeBetsInNote, note, replaceBetsInNote } = useStore()
    useEffect(() => {if(data) setConfig(data.config[0].config)}, [data])
    useEffect(() => {
        note.map((n, i) => {
            if (n.fix.fixture.id == fix.fixture.id && n.choice.betsChoice == bets) {
                if (n.choice.value == val.value && n.choice.odd == val.odd) {
                    setChecked(true)
                } else {
                    if (checked) setChecked(false)
                }
            }
        })
        
    }, [])
    useEffect(()=> {
        note.map((n, i) => {
            if (n.fix.fixture.id == fix.fixture.id && n.choice.betsChoice == bets) {
                if (n.choice.value == val.value && n.choice.odd == val.odd) {
                    setChecked(true)
                } else {
                    if (checked) setChecked(false)
                }
            }
        })
    },[note])
    if(!config) return <FullLoading />
    const betGo = (val, fix, bets) => {
        const bet = {
            fix,
            choice: {
                ...val,
                betsChoice: bets
            }
        }
        if (checked) {
            note.map((n, i) => {
                if (n.fix.fixture.id == fix.fixture.id) {
                    removeBetsInNote(i)
                    setChecked(false)
                }
            })
        } else {
            if(note.length <= config.max_events_ticket -1) {
                const indexNoteEquals = note.findIndex((n, i) => n.fix.fixture.id == fix.fixture.id)
                if (indexNoteEquals < 0) {
                    setGoBetsInNote(bet)
                } else {
                    replaceBetsInNote(bet)
                }
            }else {
                toast.success("Limite de jogos por bilhete alcançado!",{
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    })
            }
        }
    }
    console.log('val', val)
 return <div className="group font-medium inline-block relative w-full h-full">
        <button onClick={() => betGo(val, fix, bets)} className={`${checked ? `bg-primary hover:bg-primary-ligth text-white` : ` hover:bg-gray-200 text-primary`} px-1.5 py-3 cursor-pointer active:outline-none focus:outline-none md:w-20 min-w-full h-full text-base font-bold`}>
            {val.odd}
           {value && <span className="block font-medium text-xs">{Translate(val.value)}</span>}
        </button>
 </div>
}