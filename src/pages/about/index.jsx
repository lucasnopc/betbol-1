import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import serverSidePropsClient from '../../utills/serverSitePropsClient'

export default function AboutPage(props) {

    return (
        <>
            <Head>
                <title>Betbol - A Betbol</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout userString={props.userString}>
               <h1>A Betbol</h1>
               <p>Somos uma casa de apostas com sede no Rio de Janeiro.</p>
               <p>Somos SPORTSGAME.CLUB e BETBOL.IO</p>
            </Layout>
        </>
    )
}
export async function getServerSideProps(context) {
    const ret = serverSidePropsClient(context)
    return ret
}