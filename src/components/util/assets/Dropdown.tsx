import { PrecoPrazoResponse } from "correios-brasil/dist";
import { ReactNode } from "react";

export interface DropDownProps {
  onClick?: () => void;
  children?: ReactNode;
  isVisible?: boolean;
  className?: string;
  freight?: PrecoPrazoResponse[];
}

export function DropDown({ onClick, children, className }: DropDownProps) {
  return (
    <div
      onClick={onClick}
      className={`
          gap-4 rounded-b-md relative
          text-xs md:text-md transition-all
          w-full bg-tertiary left-0 overflow-hidden text-white
        ${className}
        `}
    >
      {children}
    </div>
  );
}
