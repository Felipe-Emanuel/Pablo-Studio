import { useLottie } from "lottie-react";
import { EnumType } from "typescript";

interface BrandAnimationProps {
  className?: string;
  animationData: EnumType;
}

export function BrandAnimation({ className, animationData }: BrandAnimationProps) {
  const options = {
    animationData: animationData,
    autoplay: true,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div
      className={`
        relative flex justify-center
        items-center pointer-events-none ${className}`}
    >
      {View}
    </div>
  );
}
