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
        <div className={`pl-2 grid grid-cols-12 gap-0 border-b border-gray-200 hover:border-primary-ligth`}>
            <div className="col-start-1 col-span-6 text-xs">
                <div className="flex justify-between"><span className="mt-1.5 font-bold text-gray-800">{fix.teams.home.name}</span><span className="font-semibold text-primary">{fix.goals.home}</span></div>
                <div className="flex justify-between"><span className="mt-0.5 font-bold text-gray-800">{fix.teams.away.name}</span><span className="font-semibold text-primary">{fix.goals.away}</span></div>
                <span className="block mt-1"><FixDate fix={fix} /></span>
            </div>
            <div className="col-start-7 col-span-6">
                <VisibilitySensor onChange={onChange}>
                    <div className="h-full">

                    {visibleState &&
                        <Odd bets={props.bets} fixId={fix} isAlive={props.isAlive} indexFix={props.indexFix} />
                    }
                    </div>
                </VisibilitySensor>
            </div>
        </div>
    </>
}