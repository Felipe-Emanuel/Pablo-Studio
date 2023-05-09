import { useLottie } from "lottie-react";

interface BrandAnimationProps {
  className?: string;
  animationData: any;
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
