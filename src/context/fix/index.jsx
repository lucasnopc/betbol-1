import { createContext, useContext, useState } from 'react'

const fixInitial = {}

export const FixContext = createContext(fixInitial)

export const FixProvider = ({ children }) => {
    const [live, setLive] = useState([])
    const [highlights, setHighlights] = useState([])

    const setLiveOHighlightsState = (lv, isAlive) => {
      if(isAlive) {
        setLive(lv)
      }else {
        setHighlights(lv)
      }
    }

    const removeFix = (idFix, isAlive) => {
        const fix = isAlive ? live : highlights
        const newFix = [...fix]
        const indexFix = fix.findIndex((f) => f.fixture.id == idFix)
        newFix.splice(indexFix, 1)
        
        setLiveOHighlightsState(newFix, isAlive)
    }

    const fixList = (isAlive) => {
      if(isAlive) {
        return live
      }else {
        return highlights
      }
    }

    const fix = {
      live,
      highlights,
      fixList,
      removeFix,
      setLiveOHighlightsState,
    }

    return <>
        <FixContext.Provider value={fix}>
            {children}
        </FixContext.Provider>
    </>
}
export const useFix = () => useContext(FixContext)