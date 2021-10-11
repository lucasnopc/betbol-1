import { createContext, useCallback, useContext, useState } from 'react'

const storeInitial = {}

export const StoreContext = createContext(storeInitial)

export const StoreProvider = ({ children }) => {
    const [note, setNote] = useState([])
    const [fix, setFix] = useState([])

    const setGoBetsInNote = (bet, fix) => {
        console.log('adicionando note')
        const newNote = {...bet, fix}
        setNote([...note, newNote])
    }
    const removeBetsInNote = (i) => {
        const newNote = note
        newNote.splice(i, 1)
        console.log(newNote, note)
        
        // setNote([...note, newNote])
    }

    const setFixState = (fix) => {
        setFix(fix)
    }

    const store = {
        note,
        fix,
        setGoBetsInNote,
        removeBetsInNote,
        setFixState
    }

    return <>
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    </>
}
export const useStore = () => useContext(StoreContext)