import OddsBtn from './OddsBtn'
import { format } from 'date-fns'
export default function SoccerLive(props) {
    let soccer = props.getTimeBet
    const ligas = []
    const maxWidthSoccer = () => {
        if(soccer.length <= 15) {
            return soccer.length
        }
        return soccer.length
        //proteção para não exibit 3000 jogos, precisa ser removido
    }
    for (let i = 0; i < maxWidthSoccer(); i++) {
        let ligaIgual = false;
        for (let j = 0; j < i; j++) {
            // console.log('live.js:22 - soccer[i]', format(new Date(soccer[i].fixture.date), 'HH:mm'))
            if (ligas[j] && soccer[i].league.id == ligas[j].liga.id) {
                ligas[j].games.push({
                    date: format(new Date(soccer[i].fixture.date), 'dd/MM/yyyy HH:mm'),
                    teams: soccer[i].teams,
                    goals: soccer[i].goals,
                    id: soccer[i].fixture.id,
                    index: i
                })
                ligaIgual = true
                break
            }
        }
        if (!ligaIgual) {
            ligas.push({
                liga: soccer[i].league,
                games: [{
                    teams: soccer[i].teams,
                    goals: soccer[i].goals,
                    id: soccer[i].fixture.id
                }]
            })
        }
    }
    return <>
            {ligas.map((liga, indice) => {
                return (
                    <div key={indice} className="">
                        <div className="text-md font-normal uppercase text-gray-800">
                            <span className="text-gray-500 font-normal">liga: </span>{liga.liga.name}<span className="text-gray-500 font-normal"> | Pais: </span>{liga.liga.country}
                        </div>
                        {liga.games.map((game, index) => {
                            
                            return (
                                <div key={index} className="bg-gray-100 rounded-md border-2 border-gray-200 mb-2 h-16 overflow-hidden flex justify-between">
                                    <div className="inline-block flex-1">
                                        <div><span className="text-xs mr-2 text-center inline-block">{game.goals.home}</span><span className="text-gray-600 font-normal text-sm inline-block">{game.teams.home.name}</span></div>
                                        <div><span className="text-xs mr-2 text-center inline-block">{game.goals.away}</span><span className="text-gray-600 font-normal text-sm inline-block">{game.teams.away.name}</span></div>
                                    </div>
                                    <div className="inline-block h-full flex-1">
                                    {game.id}
                                        <span className="text-xs top-0">{game.date}</span>
                                    </div>
                                    <div className="inline-block h-full bg-white flex-initial">
                                        <OddsBtn getTimeBet={props.getTimeBet} setTimeBet={props.setTimeBet} game={game} setListBetState={props.setListBetState} listBetState={props.listBetState} getValorFinal={props.getValorFinal} setValorFinal={props.setValorFinal} />
                                    </div>


                                </div>
                            )
                        })}

                    </div>
                )
            })}
    </>
}