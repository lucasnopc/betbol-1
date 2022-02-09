import { createContext, useCallback, useContext, useState } from 'react'

const storeInitial = {}

export const StoreContext = createContext(storeInitial)

export const StoreProvider = ({ children }) => {
    const [note, setNote] = useState([])
    const [user, setUser] = useState({})

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

    const clearNote = () => {
        setNote([])
    }

    const store = {
        note,
        user,
        setUser,
        setGoBetsInNote,
        replaceBetsInNote,
        removeBetsInNote,
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