import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import serverSidePropsClient from '../../utills/serverSitePropsClient'
import useFetch from '../../utills/useFetch'
import FullLoading from '../../components/fullloading'
import ListBetsHistory from '../../components/user/listBetsHistory'

export default function Home(props) {
  const user = JSON.parse(props.userString)
  const { data, error } = useFetch(`/api/user/betsHistory?email=${user.email}`)


  if (error) return console.log(error)
  if (!data) return <FullLoading />
  
  return (
    <>
      <Head>
        <title>Betbol - Futebol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout userString={props.userString}>
      <div className="p-2">
        <h1 className="font-bold text-sm">Histórico de Apostas</h1>
        {data.betHistory.reverse().map((r) => {
              return <ListBetsHistory key={r._id} data={r}  />
            })}
    </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}