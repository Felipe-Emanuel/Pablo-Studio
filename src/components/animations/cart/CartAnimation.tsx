import { useLottie } from "lottie-react";
import { useEffect } from "react";
import cart from "./cart.json";

interface CartAnimationProps {
  hovered: boolean | undefined;
}

export function CartAnimation({ hovered }: CartAnimationProps) {
  const options = {
    animationData: cart,
    autoplay: true,
    loop: 0,
  };

  const { View, playSegments } = useLottie(options);

  useEffect(() => {
    hovered ? playSegments([0, 30], true) : playSegments([30, 60], true);
  }, [hovered]);

  return (
    <span className="rounded-full w-10 h-0 flex items-center">{View}</span>
  );
}
