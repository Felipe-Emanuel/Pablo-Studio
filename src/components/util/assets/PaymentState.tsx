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
        relative flex flex-col items-center justify-center
        lg:gap-2 text-center w-10 h-14 sm:w-14 sm:h-16 lg:w-28 lg:h-20
        ${isActive ? "opacity-100" : "opacity-50"}`}
    >
      <div className="w-4 h-4 sm:w-8 sm:h-8 lg:w-16 lg:h-16">{icon}</div>
      <span className="text-secondary text-xs sm:text-sm lg:text-md">
        {text}
      </span>
      {!isLast && (
        <ArrowVector className="w-2 lg:w-4 lg:h-11 absolute -right-10" />
      )}
    </div>
  );
}
