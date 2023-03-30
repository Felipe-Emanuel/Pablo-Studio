import '../styles/globals.css'
import '../styles/scrollBar.css'
import '../styles/swiper.css'
import type { AppProps } from 'next/app'
import { NavBar } from '@menu/navbar'
import Link from 'next/link'
import { Logo } from '@util/assets/Logo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Link
        href="/"
        className="
          z-50 pt-2.5 flex items-center justify-center w-fit right-4
          flex-1 absolute min-[935px]:left-1/2 transform -translate-x-1/2"
      >
        <Logo />
      </Link>
      <Component {...pageProps} />
    </>
  )
}
