import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import { useEffect, useState } from 'react'
import serverSidePropsClient from '../../utills/serverSitePropsClient'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useStore } from '../../context/store'


export default function Feedback(props) {
  const router = useRouter()
  const query = router.query
  const { user } = useStore()

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
        <title>{process.env.NEXT_PUBLIC_APP_NAME} - Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
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