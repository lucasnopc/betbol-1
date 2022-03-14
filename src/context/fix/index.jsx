import { createContext, useContext, useState } from 'react'
const fixInitial = {}

export const FixContext = createContext(fixInitial)

export const FixProvider = ({ children }) => {
    const [live, setLive] = useState([])
    const [fixHighlights, setFixHighlights] = useState([])

    const setHighlightsState = (Highlights) => {
      setFixHighlights(Highlights)
    }

    const removeFix = (idFix) => {
        const newFix = [...fixHighlights]
        const indexFix = fixHighlights.findIndex((f) => f.fixture.id == idFix)
        newFix.splice(indexFix, 1)        
        setFixHighlights(newFix)
    }

    const fixValue = {
      live,
      fixHighlights,
      removeFix,
      setHighlightsState,
    }

    return <>
        <FixContext.Provider value={fixValue}>
            {children}
        </FixContext.Provider>
    </>
}
export const useFix = () => useContext(FixContext)