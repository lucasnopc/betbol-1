import Odd from './Odd' 

export default function Fix(props) {
    const fix = props.fix
    return <>
        <div className="grid grid-cols-12 gap-4 border-b border-gray-200">
            <div className="col-start-1 col-span-1">DATA</div>
            <div className="col-start-2 col-span-5">
                {fix.teams.home.name} <br />
                {fix.teams.away.name}
            </div>
            <div className="col-start-7 col-span-1">
                {fix.score.fulltime.home && fix.score.fulltime.home} <br />
                {fix.score.fulltime.away && fix.score.fulltime.away}
            </div>
            <div className="col-start-9 col-span-3"><Odd bets={props.bets} fixId={fix.fixture.id} /></div>
        </div>
    </>
}