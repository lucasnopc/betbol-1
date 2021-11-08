import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import NoteBets from '../../components/bet/football/noteBets'
import { useEffect, useState } from 'react'
import ListMenu from '../../components/layouts/home/listMenu'
import serverSidePropsClient from '../../utills/serverSitePropsClient'
import { useRouter } from 'next/router'
import AllPays from './allpays'

export default function Finances(props) {
  const [listBetState, setListBetState] = useState([])
  const [getValorFinal, setValorFinal] = useState(0)
  const [getLeague, setLeague] = useState({})
  const router = useRouter()
  let mercadopago = null
  let user = ``
  if(props.userString) {
    user = JSON.parse(props.userString)
  }
  useEffect(() => {
    let { MercadoPago } = window
    mercadopago = new MercadoPago(`TEST-6f7c3cbe-bc40-43ca-ab7a-76ba61d93fb9`, {
      locale: 'pt-BR' // The most common are: 'pt-BR', 'es-AR' and 'en-US'
    });
  }, [])

  // const mercadopago = window.MercadoPago(process.env.MP_PRO_PUBLIC_KEY);
  //   useEffect(() => {
  //     const getLeagueForCountry = async (country) => {
  //       const urlMenuSearchLeachesForCountry = `/api/menu/searchLeaguesForCountry?query=${country}`
  //       const da ta = await axios.get(urlMenuSearchLeachesForCountry)
  //       const leaguesData = await data.data
  //       setLeagues(leaguesData.leagues)
  //     }
  //     getLeagueForCountry(code)
  //   }, [code])

  const deposit = e => {
    e.preventDefault()
    const orderData = {
      quantity: e.target[0].value,
      description: `${e.target[0].value} Pontos - Betbol`,
      price: 1
    }


    fetch("/api/mp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (preference) {
        if (mercadopago) {
          console.log('preference ', preference, mercadopago)
          const checkout = mercadopago.checkout({
            preference: {
              id: preference.id
            },
            autoOpen: true,
          })
        }
      })
  }

  return (
    <>
      <Head>
        <title>Betbol - Financeiro</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="https://sdk.mercadopago.com/js/v2"></script> */}
      </Head>

      <Layout userString={props.userString}>
        <div className="page grid grid-cols-12">
          <div className="col-span-full md:col-span-2 mt-3 mx-3">
            <ListMenu getLeague={getLeague} setLeague={setLeague} />
          </div>
          <div className="mx-3 mt-3 md:col-span-7 col-span-full bg-white shadow-md">
            <h2 className="page-title border-b border-gray-100">Escolha o valor do depósito</h2>
            <span className="p-2">Defina o valor do seu depósito a partir de <b>R$10,00</b></span>
            <div className="p-2">
              <form onSubmit={e => deposit(e)}>
                R$ <input type="number" name="valorDeposit" step="10" className="border border-gray-300 active:outline-none outline-none text-2xl w-28 text-green-800" min="0" />
                <input type="submit" className="inline-block cursor-pointer transform -translate-y-0.5 bg-yellow-500 hover:bg-yellow-400 p-2 text-sm font-semibold text-white ml-1" value="APLICAR" />
              </form>
              <div id="paym">
                Todos pagamentos
                <AllPays user={user} />
              </div>

            </div>
          </div>
          <div className="mx-3 md:col-span-3 col-span-full">
            <NoteBets userString={props.userString} setListBetState={setListBetState} listBetState={listBetState} getValorFinal={getValorFinal} setValorFinal={setValorFinal} />
          </div>
        </div>
      </Layout>
    </>
  )
}
export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}