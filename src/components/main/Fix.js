import FixDate from './FixDate'
import Odd from './Odd'
import VisibilitySensor from 'react-visibility-sensor'
import { useState } from 'react'

export default function Fix(props) {
    const [visibleState, setVisibleState] = useState(false)
    const onChange = (isVisible) => {
        if(isVisible) {
            setVisibleState(true)
        }
    }
    const fix = props.fix
    return <>
        <div className={`pl-2 grid grid-cols-12 gap-0 border-b border-gray-200 hover:border-primary-ligth bg-white`}>
            <div className="col-start-1 col-span-6 text-xs">
                <span className="mt-1.5 block"><span className="font-semibold text-primary">{fix.goals.home}</span> {fix.score.fulltime.home} {fix.teams.home.name}</span>
                <span className="mt-0.5 block"><span className="font-semibold text-primary">{fix.goals.away}</span> {fix.score.fulltime.away} {fix.teams.away.name}</span>
                <span className="block mt-1"><FixDate fix={fix} /></span>
            </div>
            <div className="col-start-7 col-span-6">
                <VisibilitySensor onChange={onChange}>
                    <div className="h-full">
                        {/* <span className="invisible">n</span> */}
                    {visibleState &&
                        <Odd leagueId={props.leagueId} chave={props.chave} bets={props.bets} fixId={fix} />
                    }
                    </div>
                </VisibilitySensor>
            </div>
        </div>
    </>
}