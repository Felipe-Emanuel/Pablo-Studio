import { ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
}

export function Flex({ children }: FlexProps) {
  return (
    <div className="mx-auto relative w-full max-w-7xl h-fit xl:h-full flex-col md:flex xl:flex-row">
      {children}
    </div>
  );
}
