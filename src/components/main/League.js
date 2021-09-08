import axios from 'axios'
import { useEffect, useState } from 'react'
import { BiDownArrow, BiRightArrow } from 'react-icons/bi'
import { ImSpinner } from 'react-icons/im'
import useSWR from 'swr'
import compareAsc from 'date-fns/compareAsc'
import Fix from './Fix'
import SelectOddsBets from './SelectOddsBets'
import { useStore } from '../../context/store'

export default function League(props) {
    const [toggle, setToggle] = useState(false)
    const [bets, setBets] = useState(1)
    const { setFixToLeaguesInChoiceForMenu, choiceForMenu } = useStore()

    const ToggleIcon = () => {
        if (toggle) return <BiDownArrow className="inline-block mr-2" />
        return <BiRightArrow className="inline-block mr-2" />
    }

    const ToggleContent = () => {
        if (toggle) {
            const leagueId = props.league.league.id
            const seasonYear = props.league.seasons[0].year
            const urlFixToLeague = `/api/betApi/fix-to-league?league=${leagueId}&season=${seasonYear}`
            const fetcher = async () => {
                const data = await axios.get(urlFixToLeague)
                const fix = await data.data
                const res_filter = fix.res_fixture.response.filter((res) => {
                    const date = new Date(res.fixture.date)
                    const today = new Date()
                    const fiveDaysInFuture = new Date()
                    fiveDaysInFuture.setDate(fiveDaysInFuture.getDate() + 5)
                    const compareifDateIsFuture = compareAsc(date, new Date())
                    const compareIfDateIsFiveDaysInFuture = compareAsc(date, fiveDaysInFuture)
                    if (compareifDateIsFuture >= 0 && compareIfDateIsFiveDaysInFuture <= 0 ) {
                        return true
                    } else {
                        return false

                    }
                })
                if (res_filter.length > 0) setFixToLeaguesInChoiceForMenu(res_filter, props.idLeague)
                return res_filter
            }
            let response = {}
            if (props.league.fix) {
               response = props.league.fix
            } else {
                const { data, error } = useSWR(urlFixToLeague, fetcher)
                if (error) console.log(error)
                if (!data) {
                    return <>
                        <ImSpinner />
                    </>
                }
                response = data
            }

            if (response.length == 0) {
                return <>Esta Liga não tem jogos para os pŕoximos dias!</>
            }
            return <>
                <SelectOddsBets setBets={setBets} bets={bets} />
                <div className="p-2">
                    {response.map((res, i) => {
                        return <Fix key={i} fix={res} bets={bets} />

                    })}
                </div>
            </>
        } else {
            return <></>
        }
    }

    return <div className="shadow-sm hover:shadow-md">
        <h3 onClick={() => setToggle(!toggle)} className="font-normal p-2 text-gray-700 text-sm cursor-pointer hover:text-gray-400">
            <ToggleIcon />
            {props.league.league.name}
        </h3>
        <ToggleContent />

    </div>
}