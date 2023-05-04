import { ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  rowFlex?: boolean;
  className?: string;
}

export function Flex({ children, rowFlex, className }: FlexProps) {
  return (
    <div className={`
      mx-auto relative w-full max-w-7xl h-fit xl:h-full
      ${rowFlex ? 'flex' : 'flex-col md:flex xl:flex-row'} ${className}`}
    >
      {children}
    </div>
  );
}
