import { ReactNode } from 'react';

interface ContainerProps{
  children: ReactNode
}

export function Container({children}: ContainerProps) {
  return (
    <main className="relative px-10 w-screen h-screen flex flex-col gap-4 bg-dark overflow-x-hidden">
      {children}
    </main>
  )
}
