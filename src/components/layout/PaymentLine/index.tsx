import { useWindow } from "@hooks/useWindow";
import { ProgressRing } from "@layout/ProgressRing";
import { PaymentState } from "@util/assets/PaymentState";
import { useState } from "react";
import { useEffect } from "react";

type paymentStatesType = {
  icon: JSX.Element;
  isActive: boolean;
  isLast: boolean;
  text: string;
};

interface PaymentLineProps {
  value: number;
  paymentStates: paymentStatesType[];
}

export function PaymentLine({ value, paymentStates }: PaymentLineProps) {
  const { windowSize } = useWindow();

  const renderStates = () => {
    const activeState = paymentStates.find((state) => state.isActive);
    return windowSize.width < 768 ? (
      <>
        {activeState && (
          <PaymentState
            icon={activeState.icon}
            isActive={activeState.isActive}
            isLast={activeState.isLast}
            text={activeState.text}
          />
        )}
      </>
    ) : (
      <>
        {paymentStates.map((state, i) => (
          <PaymentState
            key={i}
            icon={state.icon}
            isActive={state.isActive}
            isLast={state.isLast}
            text={state.text}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <div className="
        flex items-center w-full mx-auto md:pb-8 gap-x-5
        justify-start md:justify-center"
      >
        <ProgressRing color="#23CAD4" max={100} value={value} />
        <div className="flex gap-20">{renderStates()}</div>
      </div>
    </>
  );
}
