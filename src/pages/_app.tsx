import '../styles/globals.css'
import '../styles/scrollBar.css'
import '../styles/swiper.css'
import type { AppProps } from 'next/app'
import { NavBar } from '@menu/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
