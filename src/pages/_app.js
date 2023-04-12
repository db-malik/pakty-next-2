import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }) {
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
      <Component {...pageProps} />
    </>
  )
}
