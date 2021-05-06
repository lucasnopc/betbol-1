import OddsBtn from './OddsBtn'
import useSWR from 'swr'
import axios from 'axios'
import BlockBet from '../../../components/BlockBet'

export default function SoccerLive(props) {
    const urlSoccerApi = '/api/betApi/soccer'
    const fetcher = async () => {
        const data = await axios.get(urlSoccerApi)
        return data
    }
    const { data, error } = useSWR(urlSoccerApi, fetcher)

    if (error) return <>
        <BlockBet title="AO VIVO">
            failed to load
        </BlockBet>
    </>
    if (!data) return <>
        <BlockBet title="AO VIVO">
            loading...
        </BlockBet>
    </>
    let soccer = data.data.soccer.response
    soccer = soccer.filter(function (el) {
        return el != null;
    })
    if (soccer.length == 0) {
        return <>
            <BlockBet title="AO VIVO">
                <h1>No momento, não há eventos ao vivo deste esporte para mostrar.</h1>
            </BlockBet>
        </>
    }
    const ligas = []
    for (let i = 0; i < soccer.length; i++) {
        let ligaIgual = false;
        for (let j = 0; j < i; j++) {
            if (ligas[j] && soccer[i].league.id == ligas[j].liga.id) {
                ligas[j].games.push({
                    teams: soccer[i].teams,
                    goals: soccer[i].goals,
                    id: soccer[i].fixture.id
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
        <BlockBet title="AO VIVO">
            {ligas.map((liga, indice) => {
                return (
                    <div key={indice} className="">
                        <div className="text-md font-normal uppercase text-gray-800">
                            <span className="text-gray-500 font-normal">liga: </span>{liga.liga.name}<span className="text-gray-500 font-normal"> | Pais: </span>{liga.liga.country}
                        </div>
                        {liga.games.map((game, index) => {
                            return (
                                <div key={index} className="bg-gray-100 rounded-md border-2 border-gray-200 mb-2 h-16 overflow-hidden">
                                    <div className="inline-block">
                                        <div><span className="text-xs mr-2 text-center inline-block">{game.goals.home}</span><span className="text-gray-600 font-normal text-sm inline-block">{game.teams.home.name}</span></div>
                                        <div><span className="text-xs mr-2 text-center inline-block">{game.goals.away}</span><span className="text-gray-600 font-normal text-sm inline-block">{game.teams.away.name}</span></div>
                                    </div>
                                    <div className="inline-block float-right h-full bg-white">
                                        <OddsBtn game={game} setListBetState={props.setListBetState} listBetState={props.listBetState} />
                                    </div>


                                </div>
                            )
                        })}

                    </div>
                )
            })}
        </BlockBet>
    </>
}