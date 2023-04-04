import '../styles/globals.css'
import '../styles/scrollBar.css'
import '../styles/swiper.css'
import type { AppProps } from 'next/app'
import { NavBar } from '@menu/navbar'
import { CartProvider } from '@contexts/CartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <NavBar />
      <Component {...pageProps} />
    </CartProvider>
  )
}
