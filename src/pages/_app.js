import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo'
import { Provider } from 'react-redux'
import { store } from '../store/store'

function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Pakty"
        description=""
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          siteName: 'SiteName',
        }}
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default App
