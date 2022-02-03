import Head from 'next/head'
import serverSidePropsClient from '../../../utills/serverSitePropsClient'
import { useMercadopago } from 'react-sdk-mercadopago';
import LayoutUser from '../../../components/layouts/user';

export default function deposit(props) {
  let user = ``
  if (props.userString) {
    user = JSON.parse(props.userString)
  }
  // TEST-6f7c3cbe-bc40-43ca-ab7a-76ba61d93fb9
  // APP_USR-9bee11b4-7b73-4936-8610-9cfa6797e650
  const mercadopago = useMercadopago.v2('TEST-6f7c3cbe-bc40-43ca-ab7a-76ba61d93fb9', {
      locale: 'pt-BR'
    });

  const deposit = e => {
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
        <title>Betbol - Depśito</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutUser userString={props.userString}>
        <div className="mx-3 mt-3 md:col-span-7 col-span-full bg-white shadow-md">
          <h2 className="page-title border-b border-gray-100">Saques</h2>
          <span className="p-2">Não ha saques disponíveis no momento.</span>

        </div>
      </LayoutUser>
    </>
  )
}
export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}