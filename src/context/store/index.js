import { createContext, useCallback, useContext, useState } from 'react'

const storeInitial = {}

export const StoreContext = createContext(storeInitial)

export const StoreProvider = ({ children }) => {
    const [note, setNote] = useState([])
    const [fix, setFix] = useState([])

    const setGoBetsInNote = (bet, fix) => {
        const newNote = {...bet, fix}
        setNote([...note, newNote])
    }
    const setFixState = (fix) => {
        setFix(fix)
    }

    const store = {
        note,
        fix,
        setGoBetsInNote,
        setFixState
    }

    return <>
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    </>
}
export const useStore = () => useContext(StoreContext)