import { ReactNode } from "react"

interface SectionProps{
  children: ReactNode
}

export function Section({children}: SectionProps) {
  return (
    <section className="mx-auto relative w-full max-w-7xl h-fit">
      {children}
    </section>
  )
}
