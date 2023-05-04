import { ReactNode } from "react"

interface PlaceholderProps{
  className?: string;
  children: ReactNode
}

export function Placeholder({className, children}: PlaceholderProps) {
  return (
    <div className={`p-1 md:p-3 h-fit bg-placeholder rounded-md ${className}`}>
      {children}
    </div>
  )
}
