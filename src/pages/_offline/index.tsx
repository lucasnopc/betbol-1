import Head from 'next/head'

export default function offlinePage() {
return <><Head>
  <title>{process.env.NEXT_PUBLIC_APP_NAME} - Offline</title>
</Head>
<div className="flex items-center justify-center h-full">
  <div className="text-center">
  <h1 className="font-bold text-xl text-gray-800">Seu dispositivo está offline</h1>
  {/* <h3 className="font-semibold text-base text-gray-700">Conecte a internet primeiro, depois retorne a {process.env.NEXT_PUBLIC_APP_NAME}</h3> */}
  </div>
  </div>
</>
}