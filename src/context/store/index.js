import { createContext, useContext, useState } from 'react'

const storeInitial = {
    choiceForMenu: `live`
}

export const StoreContext = createContext(storeInitial)

export const StoreProvider = ({ children }) => {
    const [listBet, setListBet] = useState({})
    const [choiceForMenu, setChoice] = useState(storeInitial)

    const setFixToLeaguesInChoiceForMenu = (fix, i) => {
        const leagues = choiceForMenu.leagues
        const newLeague = {
            ...leagues[i],
            fix
        }
        leagues[i] = newLeague
        if(fix.results > 0) {
            const new_sessionInChoice = {
                ...choiceForMenu, 
                leagues
            }
            setChoice(new_sessionInChoice)
        }
        console.log('fim ', choiceForMenu)
    }

    const setChoiceForMenu = (code, leagues) => {
        console.log(leagues)
        const choice = {
            choiceForMenu: code
        }
        
        if(leagues.leagues) {
            const leaguesFiltered = leagues.leagues.filter((league) => {
                return league.seasons[0].coverage.odds == true
            })
            choice.leagues = leaguesFiltered
        }if(leagues.soccer) {
            choice.live = {
               fix: leagues.soccer.response,
               seasons: {}
            }
        }
        console.log('set choice com => ', choice)
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