import OddsBtn from './OddsBtn'

export default function SoccerLive (props) {


    if (props.soccer.length == 0) {
      return (
        <>

          <h1>No momento, não há eventos ao vivo deste esporte para mostrar.</h1>
        </>
      )
    }
    return (
      <div className="flex flex-col md:flex-row px-4 select-none">
        <span id="teste" onClick={() => setListBet('mudei')}> clique</span>
        <div className="border-2 rounded-lg border-gray-200 mt-3 flex-grow">
          <h2 className="text-lg rounded-t-lg font-semibold text-gray-800 uppercase bg-gray-100 px-3 border-b py-1 border-gray-200 mb-2">AO VIVO</h2>
          <div className="h-96 overflow-auto p-3">
            {props.ligas.map((liga, indice) => {
              return (
                <div key={indice} className="">
                  <div className="text-md font-normal uppercase text-gray-800">
                    <span className="text-gray-500 font-normal">liga: </span>{liga.liga.name}<span className="text-gray-500 font-normal"> | Pais: </span>{liga.liga.country}
                  </div>
                  {liga.games.map((game, index) => {
                    //   <OddsBtn game={game} />
                    return (
                      <div key={index} className="bg-gray-100 rounded-md border-2 border-gray-200 mb-2 p-3">
                        <div className="inline-block">
                          <div><span className="text-xs mr-2 text-center inline-block">{game.goals.home}</span><span className="text-gray-600 font-normal text-sm inline-block">{game.teams.home.name}</span></div>
                          <div><span className="text-xs mr-2 text-center inline-block">{game.goals.away}</span><span className="text-gray-600 font-normal text-sm inline-block">{game.teams.away.name}</span></div>
                        </div>
                        <div className="inline-block float-right">
                         <OddsBtn game={game} setListBetState={props.setListBetState} listBetState={props.listBetState} />
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
          <div className="p-2">
              {/* {listBetState.map((bet) => {
                // console.log('bet ', bet)
              })} */}
          </div>
        </div>
      </div>
    )
  }