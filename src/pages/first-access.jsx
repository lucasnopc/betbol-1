import Head from 'next/head'
import Layout from '../components/layouts/home/layout'

export default function FirstAccessRequest() {

    return <>
            <Head>
                <title>Verifique seu e-mail</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-screen h-screen bg-register">
                <Layout>
                    <div className="max-w-lg mx-auto text-gray-800 shadow-2xl bg-white p-3 md:p-5 rounded-md mt-5 md:mt-28">
                        <h1 className="text-center text-3xl font-normal">Estamos muito felizes que tenha se cadastrado na {process.env.NEXT_PUBLIC_APP_NAME}</h1>
                        <p className="text-center font-normal">Procure por {process.env.NEXT_PUBLIC_APP_NAME} na sua caixa de entrada para receber seu primeiro acesso.</p>
                    </div>
                </Layout>
            </div>
        </>
    }
