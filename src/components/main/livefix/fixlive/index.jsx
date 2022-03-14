// import FixDate from '../../FixDate'
import VisibilitySensor from 'react-visibility-sensor'
import { useState } from 'react'
import OddsLive from './oddsLive'

export default function FixLive({ fix, bets, indexFix }) {
    const [visibleState, setVisibleState] = useState(false)
    const onChange = (isVisible) => {
        if(isVisible) {
            setVisibleState(true)
        }
    }
    
    return <>
        <div className={`pl-2 grid grid-cols-12 gap-0 border-b border-gray-200 hover:border-primary-ligth`}>
            <div className="col-start-1 col-span-6 text-xs">
                <div className="flex justify-between"><span className="mt-1.5 font-medium text-gray-800 text-base">{fix.teams.home.name}</span><span className="font-semibold text-primary">{fix.goals.home}</span></div>
                <div className="flex justify-between"><span className="mt-0.5 font-medium text-gray-800 text-base">{fix.teams.away.name}</span><span className="font-semibold text-primary">{fix.goals.away}</span></div>
                <span className="block mt-1">
                  {/* <FixDate fix={fix} /> */}
                </span>
            </div>
            <div className="col-start-7 col-span-6">
                <VisibilitySensor onChange={onChange}>
                    <div className="h-full">

                    {visibleState &&
                        <OddsLive bets={bets} fixId={fix} isAlive={true} indexFix={indexFix} />
                    }
                    </div>
                </VisibilitySensor>
            </div>
        </div>
    </>
}