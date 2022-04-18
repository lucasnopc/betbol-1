import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import { useStore } from '../../context/store'
import serverSidePropsClientNotRedirect from '../../utills/serverSitePRopsClientNotRedirect'

export default function AboutPage(props) {

    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME} - A {process.env.NEXT_PUBLIC_APP_NAME}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
               <h1>A {process.env.NEXT_PUBLIC_APP_NAME}</h1>
               <p>Somos uma casa de apostas com sede no Rio de Janeiro.</p>
               <p>Somos SPORTSGAME.CLUB e SPORTSGAME.ONLINE</p>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    const ret = serverSidePropsClientNotRedirect(context)
    return ret
}