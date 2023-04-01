import { ArrowVector } from "@vectores/Vectores";
import { ReactNode } from "react";

interface PaymentStateProps {
  icon: ReactNode;
  text: string;
  isActive: boolean;
  isLast: boolean;
}

export function PaymentState({
  icon,
  text,
  isActive,
  isLast,
}: PaymentStateProps) {
  return (
    <div
      className={`
        transition-all duration-500
        relative flex flex-col items-center justify-center
        lg:gap-2 text-center w-10 h-14 lg:w-fit lg:h-fit
        ${isActive ? "opacity-100" : "opacity-50"}`}
    >
      <div className="w-8 h-8">{icon}</div>
      <span className="text-secondary text-xs sm:text-sm lg:text-md">
        {text}
      </span>
      {!isLast && (
        <ArrowVector className="w-2 lg:w-4 lg:h-11 absolute -right-7 sm:-right-10" />
      )}
    </div>
  );
}
