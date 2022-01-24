import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import serverSidePropsClient from '../../utills/serverSitePropsClient'
import axios from 'axios'
import { useState } from 'react'
import Bilhete from '../../components/bilhete'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useClipboard from "react-use-clipboard";

export default function viewTicket(props) {
    const [bilhete, setBilhete] = useState({})
    const router = useRouter()
    const [isCopied, setCopied] = useClipboard(`${process.env.NEXTAUTH_URL}/viewbet?`);
    const handlerGetBilhete = async (id) => {
        const data = await axios(`http://localhost:3000/api/sis/bilhete?id=${id}`)
        const bilheteData = await data.data
        if (bilheteData.result) setBilhete(bilheteData)
    }
    useEffect(() => {
        handlerGetBilhete(router.query.b)
    }, [router.query.b])

    return (
        <>
            <Head>
                <title>Betbol - Futebol</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout userString={props.userString}>
                <div className='p-3'>
                    <h3 className='text-xl font-bold'>Conferir Bilete</h3>
                    {!router.query.b && <form onSubmit={e => {
                        const id = e.target[0].value
                        e.preventDefault()
                        handlerGetBilhete(id)
                    }}>
                        <input className='border border-gray-300 p-1 outline-none' type="text" placeholder='ex: 2G54lTr2' required />
                        <input type="submit" className='uppercase font-semibold border border-primary bg-primary hover:bg-primary-ligth px-2 py-1 text-white' value="Conferir" />
                    </form>}
                    {bilhete.result && <Bilhete bilhete={bilhete} />}
                </div>
            </Layout>
        </>
    )
}
export async function getServerSideProps(context) {
    const ret = serverSidePropsClient(context)
    return ret
}