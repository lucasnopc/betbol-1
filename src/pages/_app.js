import { Provider } from 'next-auth/client'
import { StoreProvider } from '../context/store'
import NProgress from 'nprogress'
import Router from 'next/router'

import '../style/icons.css'
import '../style/global.css'
import '../style/nprogress.css'
import 'tailwindcss/tailwind.css'

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </StoreProvider>
  )
}

export default MyApp