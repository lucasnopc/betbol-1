import axios from 'axios'
import { useEffect, useState } from 'react'
import { BiDownArrow, BiExitFullscreen, BiRightArrow } from 'react-icons/bi'
import { ImSpinner } from 'react-icons/im'
import useSWR from 'swr'
import compareAsc from 'date-fns/compareAsc'
import Fix from './Fix'
import SelectOddsBets from './SelectOddsBets'
import { useStore } from '../../context/store'

export default function League(props) {
    const { setFixToLeaguesInChoiceForMenu, setToggle } = useStore()
    const [bets, setBets] = useState(1)
    const [toggle, setToggleState] = useState(false)

    useEffect(() => {
        setToggle(props.idLeague, toggle)
    }, [toggle])

    const ToggleIcon = () => {
        if (toggle) return <BiDownArrow className="inline-block mr-2" />
        return <BiRightArrow className="inline-block mr-2" />
    }

    const ToggleContent = () => {
        const leagueId = props.league ? props.league.league.id : null
        let response = {}
        if (props.league) {
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
                    if (compareifDateIsFuture >= 0 && compareIfDateIsFiveDaysInFuture <= 0) {
                        return true
                    } else {
                        return false

                    }
                })
                if (res_filter.length > 0) setFixToLeaguesInChoiceForMenu(res_filter, props.idLeague)
                return res_filter
            }
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

        } else if (props.live) {
            response = props.live.fix
        }
        if (response.length == 0) {
            return <div className="p-2 bg-primary"><h3 className="text-gray-700 font-normal">0 Jogos a serem exibidos!</h3></div>
        }
        return <>
            {props.league.toggle &&
                <SelectOddsBets setBets={setBets} bets={bets} />
            }
            <div>
                {response && response.length > 0 && response.map((res, i) => {
                    return <div className="p-2" key={res.fixture.id}>
                        <Fix leagueId={leagueId} chave={i} fix={res} bets={bets} />

                    </div>
                })}
            </div>
        </>
    }
    return <div className="shadow-sm hover:shadow-md p-2 mb-2 bg-white">
        <h3 onClick={() => setToggleState(!toggle)} className="font-normal p-2 text-gray-500 text-sm cursor-pointer hover:text-gray-900">
            <ToggleIcon />
            {props.league && props.league.league.name}
            {!props.league && `AO VIVO`}

        </h3>
        {props.league &&
            <ToggleContent />
        }
        {props.live &&
            <ToggleContent />
        }

    </div>
}