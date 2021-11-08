import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import NoteBets from '../../components/bet/football/noteBets'
import { useEffect, useState } from 'react'
import ListMenu from '../../components/layouts/home/listMenu'
import serverSidePropsClient from '../../utills/serverSitePropsClient'
import { useRouter } from 'next/router'
import { useMercadopago } from 'react-sdk-mercadopago';
import axios from 'axios'


export default function Feedback(props) {
  const [listBetState, setListBetState] = useState([])
  const [getValorFinal, setValorFinal] = useState(0)
  const [getLeague, setLeague] = useState({})
  const router = useRouter()
  const query = router.query

  useEffect(() => {
    const setStatus = async (query) => {
      await axios.post('/api/mp/feedback', query )
      .then(function (response) {
        console.log("cheguei aqui", response)
        router.push('/finances')
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    setStatus(query)
  }, [])



  return (
    <>
      <Head>
        <title>Betbol - Financeiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout userString={props.userString}>
        <div className="page grid grid-cols-12">
          <div className="col-span-full md:col-span-2 mt-3 mx-3">
            <ListMenu getLeague={getLeague} setLeague={setLeague} />
          </div>
          <div className="mx-3 mt-3 md:col-span-7 col-span-full bg-white shadow-md">
            <h2 className="page-title border-b border-gray-100">Informações de pagamento</h2>
            {/* <span className="p-2">Defina o valor do seu depósito a partir de <b>R$10,00</b></span> */}

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