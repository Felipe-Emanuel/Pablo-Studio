import Head from 'next/head';
import { ReactNode } from 'react';

interface ContainerProps{
  children: ReactNode
  pageTitle: string
}

export function Container({children, pageTitle}: ContainerProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="relative pt-16 lg:pt-24 p-10 w-screen h-screen flex flex-col gap-4 bg-dark overflow-x-hidden">
        {children}
      </main>
    </>
  )
}
