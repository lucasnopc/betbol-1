import Head from 'next/head'
import { MdEmail } from 'react-icons/md'

export default function VerifyRequest() {
    return (
        <>
            <Head>
                <title>Verifique seu e-mail</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-screen h-screen bg-register grid grid-cols-3">

                <div className="col-start-2">
                    <div className=" bg-white mt-20 p-3 rounded-sm shadow-2xl text-center">
                        <MdEmail className="inline-block text-7xl text-gray-600" />
                        <h1 className="text-center text-3xl font-bold text-gray-700">Um e-mail de acesso foi enviado.</h1>
                        <p className="text-center text-sm font-normal">Procure por betbol na sua caixa de entrada</p>
                    </div>
                </div>
            </div>
        </>
    )
}
