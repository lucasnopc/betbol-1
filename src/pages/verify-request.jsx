import Head from 'next/head'
import { MdEmail } from 'react-icons/md'

export default function VerifyRequest() {
    return (
        <>
            <Head>
                <title>Verifique seu e-mail</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-screen h-screen bg-register flex items-center justify-center">

                <div className="">
                    <div className="w-full bg-white mt-20 p-3 rounded-sm shadow-2xl text-center">
                        <MdEmail className="inline-block text-7xl text-gray-600" />
                        <h1 className="text-center text-5xl font-bold text-gray-700">Um e-mail de acesso foi enviado.</h1>
                        <p className="text-center text-xl font-normal">Procure por {process.env.NEXT_PUBLIC_APP_NAME} na sua caixa de entrada</p>
                    </div>
                </div>
            </div>
        </>
    )
}
