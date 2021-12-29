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

    const removeFix = (indexFix, isAlive) => {
      // if(indexFix){
      //   const newFix = [...fix]
      //   newNote.splice(i, 1)

      //   setNote(newNote)
      // }
      console.log('removeFix ', indexFix, isAlive)
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