import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import { useEffect, useState } from 'react'
import serverSidePropsClient from '../../utills/serverSitePropsClient'
import AllPays from './allpays'
import { useMercadopago } from 'react-sdk-mercadopago';

export default function Finances(props) {
  // TEST-6f7c3cbe-bc40-43ca-ab7a-76ba61d93fb9
  // APP_USR-9bee11b4-7b73-4936-8610-9cfa6797e650
  const stringPublicKey = 'TEST-6f7c3cbe-bc40-43ca-ab7a-76ba61d93fb9'
  let mercadopago = undefined
  if (stringPublicKey) {
    mercadopago = useMercadopago.v2(stringPublicKey, {
      locale: 'pt-BR'
    });
  }


  let user = ``
  if (props.userString) {
    user = JSON.parse(props.userString)
  }

  const deposit = e => {
    console.log('stringPublicKey', stringPublicKey)
    e.preventDefault()
    const orderData = {
      quantity: e.target[0].value,
      description: `${e.target[0].value} Pontos - Betbol`,
      price: 1
    }

    fetch("/api/mp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (preference) {
        if (mercadopago) {
          mercadopago.checkout({
            preference: {
              id: preference.id
            },
            autoOpen: true,
          })
        }
      })
  }

  return (
    <>
      <Head>
        <title>Betbol - Financeiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout userString={props.userString}>
        <div className="mx-3 mt-3 md:col-span-7 col-span-full bg-white shadow-md">
          <h2 className="page-title border-b border-gray-100">Escolha o valor do depósito</h2>
          <span className="p-2">Defina o valor do seu depósito a partir de <b>R$10,00</b></span>
          <div className="p-2">
            <form onSubmit={e => deposit(e)}>
              R$ <input type="number" name="valorDeposit" step="10" className="border border-gray-300 active:outline-none outline-none text-2xl w-28 text-green-800" min="0" />
              <input type="submit" className="inline-block cursor-pointer transform -translate-y-0.5 bg-primary-ligth hover:bg-primary p-2 text-sm font-semibold text-white ml-1" value="APLICAR" />
            </form>
            <div id="paym">
              Todos pagamentos
              <AllPays user={user} mercadopago={mercadopago} />
            </div>

          </div>
        </div>
      </Layout>
    </>
  )
}
export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}