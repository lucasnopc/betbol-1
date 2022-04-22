import { Provider } from 'next-auth/client'
import { StoreProvider } from '../context/store'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'

import '../style/icons.css'
import '../style/global.css'
import '../style/nprogress.css'
import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css'
import 'antd/dist/antd.css';

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
  <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
  </Head>
    <StoreProvider>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </StoreProvider>
  </>
}

export default MyApp