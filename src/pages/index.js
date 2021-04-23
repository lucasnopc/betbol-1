import Head from 'next/head'
import Layout from '../components/layouts/home/layout'
import { soccerfake } from '../utills/responselive'
import { FcLock } from 'react-icons/fc'

export default function Home(props) {
  const soccer2 = props.soccer
  const soccer = soccerfake
  const ligas = []
  for (let i = 0; i < soccer.length; i++) {
    let ligaIgual = false;
    for (let j = 0; j < i; j++) {
      if (ligas[j] && soccer[i].league.id == ligas[j].liga.id) {
        ligas[j].games.push({
          teams: soccer[i].teams,
          goals: soccer[i].goals
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
          odds: soccer[i].odds.response,
          id: soccer[i].fixture.id
        }]
      })
    }
  }
  const Soccer = () => {
    if (soccer.length == 0) {
      return (
        <>

          <h1>No momento, não há eventos ao vivo deste esporte para mostrar.</h1>
        </>
      )
    }
    return (
      <div className="flex flex-col md:flex-row px-4 select-none">
        <div className="border-2 rounded-lg border-gray-200 mt-3 flex-grow">
          <h2 className="text-lg rounded-t-lg font-semibold text-gray-800 uppercase bg-gray-100 px-3 border-b py-1 border-gray-200 mb-2">AO VIVO</h2>
          <div className="h-96 overflow-auto p-3">
            {ligas.map((liga, indice) => {
              return (
                <div key={indice} className="">
                  <div className="text-md font-normal uppercase text-gray-800">
                    <span className="text-gray-500 font-normal">liga: </span>{liga.liga.name}<span className="text-gray-500 font-normal"> | Pais: </span>{liga.liga.country}
                  </div>
                  {liga.games.map((game, index) => {
                    const OddsBtn = () => {
                      if (typeof game.odds == 'undefined' || typeof game.odds[0] == 'undefined') {
                        return <>
                          <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcLock /></div>
                          <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcLock /></div>
                          <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcLock /></div>
                        </>
                      } else {
                        console.log(game.odds)
                        return <>
                          <form>
                            <div className="inline-block">
                              <input type="radio" id={`bethome-${game.id}`} name={`bet-${game.id}`} className="hidden" />
                              <label className="inline-block p-2 mx-2 text-xs text-gray-700 cursor-pointer hover:bg-blue-200 label-checked:bg-blue-600 label-checked:text-white border-2 border-gray-300 font-normal rounded-md bg-white" htmlFor={`bethome-${game.id}`}>{game.odds[0].bookmakers[0].bets[0].values[0].odd}</label>
                            </div>
                            <div className="inline-block">
                              <input type="radio" id={`betdraw-${game.id}`} name={`bet-${game.id}`} className="hidden" />
                              <label className="inline-block p-2 mx-2 text-xs text-gray-700 cursor-pointer hover:bg-blue-200 label-checked:bg-blue-600 label-checked:text-white border-2 border-gray-300 font-normal rounded-md bg-white" htmlFor={`betdraw-${game.id}`}>{game.odds[0].bookmakers[0].bets[0].values[1].odd}</label>
                            </div>
                            <div className="inline-block">
                              <input type="radio" id={`betaway-${game.id}`} name={`bet-${game.id}`} className="hidden" />
                              <label className="inline-block p-2 mx-2 text-xs text-gray-700 cursor-pointer hover:bg-blue-200 label-checked:bg-blue-600 label-checked:text-white border-2 border-gray-300 font-normal rounded-md bg-white" htmlFor={`betaway-${game.id}`}>{game.odds[0].bookmakers[0].bets[0].values[2].odd}</label>
                            </div>
                          </form>
                        </>
                      }

                    }
                    return (
                      <div key={index} className="bg-gray-100 rounded-md border-2 border-gray-200 mb-2 p-3">
                        <div className="inline-block">
                          <div><span className="text-xs mr-2 text-center inline-block">{game.goals.home}</span><span className="text-gray-600 font-normal text-sm inline-block">{game.teams.home.name}</span></div>
                          <div><span className="text-xs mr-2 text-center inline-block">{game.goals.away}</span><span className="text-gray-600 font-normal text-sm inline-block">{game.teams.away.name}</span></div>
                        </div>
                        <div className="inline-block float-right">
                          <OddsBtn />
                        </div>


                      </div>
                    )
                  })}

                </div>
              )
            })}
          </div>
        </div>
        <div className="max-w-sm border-2 rounded-lg  border-gray-200 mt-3 flex-grow ml-3">
          <h2 className="text-lg rounded-t-lg font-semibold text-gray-800 uppercase bg-gray-100 px-3 border-b py-1 border-gray-200 mb-2">BOLETIM DE APOSTAS</h2>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Betbol - Futebol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Soccer />
      </Layout>
    </>
  )
}
// export async function getStaticProps(context) {
//   const soccer_res = await fetch(`${process.env.APISPORT}/fixtures?live=all`, 
//   {
//     headers: {
//       'Content-Type': 'application/json',
//       'x-apisports-key': process.env.APISPORT_KEY
//     },
//     method: 'GET'
//   })
//   const soccer = await soccer_res.json()

//   for(let i = 0; i < soccer.response.length; i++) {
//     const odds_res = await fetch(`${process.env.APISPORT}/odds?fixture=${soccer.response[i].fixture.id}&bookmaker=6&bet=1`, 
//   {
//     headers: {
//       'Content-Type': 'application/json',
//       'x-apisports-key': process.env.APISPORT_KEY
//     },
//     method: 'GET'
//   })
//   const odds = await odds_res.json()
//     soccer.response[i].odds = odds
//   }
//   return {
//     props: { soccer },
//   }
// }