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
          <div className="mx-3 mt-3 md:col-span-7 col-span-full bg-white shadow-md">
            <h2 className="page-title border-b border-gray-100">Feedback page</h2>
          </div>
      </Layout>
    </>
  )
}
export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}