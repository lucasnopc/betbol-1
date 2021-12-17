import { createContext, useCallback, useContext, useState } from 'react'

const storeInitial = {}

export const StoreContext = createContext(storeInitial)

export const StoreProvider = ({ children }) => {
    const [note, setNote] = useState([])
    const [fix, setFix] = useState([])


    const setGoBetsInNote = (bet) => {
        const newNote = { ...bet }
        setNote([...note, newNote])
    }
    const replaceBetsInNote = (bet) => {
        const idFix = bet.fix.fixture.id
        for(let n in note) {
            if(note[n].fix.fixture.id == idFix) {
                const newNote = [...note]
                newNote.splice(n, 1, bet)
                setNote([...newNote])
                console.log('replace', newNote, note)
            }
        }
    }

    const removeBetsInNote = (i) => {
        const newNote = [...note]
        newNote.splice(i, 1)

        setNote(newNote)
    }

    const changeVf = (i) => {
        const thisNote = note[i.idNote]
        const indexNote = i.idNote
        const newNote = [...note]
        newNote[indexNote].choice.valor = i
        setNote(newNote)
    }

    const setFixState = (fix) => {
        setFix(fix)
    }

    const clearNote = () => {
        console.log('note antes ', note)
        setNote([])
        console.log('note depois ', note)
    }

    const store = {
        note,
        fix,
        setGoBetsInNote,
        replaceBetsInNote,
        removeBetsInNote,
        setFixState,
        changeVf,
        clearNote
    }

    return <>
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    </>
}
export const useStore = () => useContext(StoreContext)