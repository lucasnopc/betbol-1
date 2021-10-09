import { useState } from 'react'
import FixDate from './FixDate'
import Odd from './Odd' 

export default function Fix(props) {
    const fix = props.fix
    return <>
        <div className={` grid grid-cols-12 gap-4 border-b border-gray-200 hover:bg-gray-50 hover:border-yellow-600`}>
            <div className="col-start-1 col-span-1"><FixDate fix={fix} /></div>
            <div className="col-start-2 col-span-4">
                {fix.teams.home.name} <br />
                {fix.teams.away.name}
            </div>
            <div className="col-start-6 col-span-1">
                {fix.score.fulltime.home && fix.score.fulltime.home} <br />
                {fix.score.fulltime.away && fix.score.fulltime.away}
            </div>
            <div className="col-start-7 col-span-6"><Odd leagueId={props.leagueId} chave={props.chave} bets={props.bets} fixId={fix.fixture.id} /></div>
        </div>
    </>
}