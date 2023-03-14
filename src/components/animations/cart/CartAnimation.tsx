import { useLottie } from "lottie-react";
import cart from "./cart.json";

export function CartAnimation() {
  const options = {
    animationData: cart,
    autoplay: true,
    loop: 0,
  };

  const { View } = useLottie(options);

  return (
    <span className="rounded-full w-10 h-10 flex items-center">{View}</span>
  );
}
