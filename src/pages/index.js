import Head from 'next/head'
import Layout from '../components/layouts/home/layout'

export default function Home(props) {
  const soccer = props.soccer.response
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
          goals: soccer[i].goals
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
      <div className="flex flex-col md:flex-row px-4">
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
                return (
                  <div key={index} className="bg-gray-100 rounded-md border-2 border-gray-200 mb-2 p-3">
                    
                    <div><span className="text-xs mr-2 text-center inline-block">{game.goals.away}</span><span className="text-gray-600 font-normal text-sm inline-block">{game.teams.away.name}</span></div>
                    <div><span className="text-xs mr-2 text-center inline-block">{game.goals.home}</span><span className="text-gray-600 font-normal text-sm inline-block">{game.teams.home.name}</span></div>

                    <div>
                      
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
export async function getStaticProps(context) {
  const soccer_res = await fetch(`${process.env.APISPORT}/fixtures?live=all`, 
  {
    headers: {
      'Content-Type': 'application/json',
      'x-apisports-key': process.env.APISPORT_KEY
    },
    method: 'GET'
  })
  const soccer = await soccer_res.json()
  return {
    props: { soccer },
  }
}