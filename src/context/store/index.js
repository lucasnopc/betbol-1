import { createContext, useContext, useState } from 'react'

const storeInitial = {
    choiceForMenu: `live`
}

export const StoreContext = createContext(storeInitial)

export const StoreProvider = ({ children }) => {
    const [listBet, setListBet] = useState({})
    const [choiceForMenu, setChoice] = useState(storeInitial)

    const setFixToLeaguesInChoiceForMenu = (fix, i) => {
        console.log(choiceForMenu.leagues, fix.res_fixture.results)
    }

    const setChoiceForMenu = (code, leagues) => {
        const choice = {
            choiceForMenu: code
        }
        
        if(leagues.leagues) {
            const leaguesFiltered = leagues.leagues.filter((league) => {
                return league.seasons[0].coverage.odds == true
            })
            choice.leagues = leaguesFiltered
        }
        setChoice(choice)
    }

    const addListBetState = (value) => {
        const newValue = {
            ...listBet,
            value
        }
        console.log('new value ', newValue)
        setListBet(newValue)
    }

    const store = {
        choiceForMenu,
        listBet,
        setChoiceForMenu,
        addListBetState,
        setFixToLeaguesInChoiceForMenu
    }

    return <>
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    </>
}
export const useStore = () => useContext(StoreContext)