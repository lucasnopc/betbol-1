import { createContext, useCallback, useContext, useState } from 'react'

const storeInitial = {
    choiceForMenu: `live`
}

export const StoreContext = createContext(storeInitial)

export const StoreProvider = ({ children }) => {
    const [listBet, setListBet] = useState({})
    const [choiceForMenu, setChoice] = useState(storeInitial)

    const LiveOrLeague = () => {
        if(choiceForMenu.choiceForMenu == `ALIVE`) {
            return choiceForMenu.live.fix
        }else {
            return choiceForMenu.leagues
        }
    }

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

    const setToggle = (idLeague, valueToggle) => {
        let leagues = choiceForMenu.leagues
        if(idLeague) {
            const newLeague = {
                ...leagues[idLeague],
                toggle: valueToggle
            }
            leagues[idLeague] = newLeague
            setChoice({
                ...choiceForMenu,
                leagues
            })
        }
        
    }
    const setoddinChoiceforMenu = useCallback((idFix, odds, leagueId) => {
        if(idFix) {
            const fix = LiveOrLeague()
            const newFix = {
                ...fix[idFix],
                odds
            }
            const selectleagueorlive = choiceForMenu.live ? {live:choiceForMenu.live} : {leagues:choiceForMenu.leagues}
            const replace = {
                    ...choiceForMenu,
                }
                if(choiceForMenu.leagues) {
                    replace.leagues[leagueId] = newFix
                }if(choiceForMenu.live) {
                    replace.live.fix[idFix] = newFix
                }
            // setChoice(replace)
        }
        
    }, [choiceForMenu])

    const setChoiceForMenu = (code, leagues) => {
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
        setChoice(choice)
    }

    const addListBetState = (value) => {
        const newValue = {
            ...listBet,
            value
        }
        setListBet(newValue)
    }

    const store = {
        choiceForMenu,
        listBet,
        setChoiceForMenu,
        addListBetState,
        setToggle,
        setFixToLeaguesInChoiceForMenu,
        setoddinChoiceforMenu
    }

    return <>
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    </>
}
export const useStore = () => useContext(StoreContext)