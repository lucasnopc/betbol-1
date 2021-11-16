import FixDate from './FixDate'
import Odd from './Odd' 

export default function Fix(props) {

    const fix = props.fix
    return <>
        <div className={` grid grid-cols-12 gap-4 border-b border-gray-200 hover:bg-gray-300 hover:border-primary p-2`}>
            <div className="col-start-1 col-span-4 text-xs">
                <span className="mt-1.5 block">{fix.score.fulltime.home && fix.score.fulltime.home} {fix.teams.home.name}</span>
                <span className="mt-0.5 block">{fix.score.fulltime.away && fix.score.fulltime.away} {fix.teams.away.name}</span>
                <span className="block mt-1"><FixDate fix={fix} /></span>
            </div>
            <div className="col-start-5 col-span-12"><Odd leagueId={props.leagueId} chave={props.chave} bets={props.bets} fixId={fix} /></div>
        </div>
    </>
}