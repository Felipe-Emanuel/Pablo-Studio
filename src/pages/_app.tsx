import '../styles/globals.css'
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
          z-50 pt-2.5 flex items-center justify-center
          flex-1 absolute right-0 min-[935px]:left-1/2 transform -translate-x-1/2"
      >
        <Logo />
      </Link>
      <Component {...pageProps} />
    </>
  )
}
