import { ReactNode } from "react"

interface SectionProps{
  children: ReactNode
}

export function Section({children}: SectionProps) {
  return (
    <section className="m-auto relative w-full h-fit">
      {children}
    </section>
  )
}
