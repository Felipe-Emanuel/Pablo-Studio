import { useLottie } from "lottie-react";
import { useState } from "react";
import { HeartVector } from "src/components/vectores/Vectores";
import Heart from "./heart.json";

export function HeartButton() {
  const [isActive, setIsActive] = useState(false);

  const options = {
    animationData: Heart,
    autoplay: false,
    loop: 0,
  };

  const { View, play, setDirection } = useLottie(options);

  function setHeart() {
    setIsActive((isActive) => !isActive);
    isActive === true ? setDirection(-1) : setDirection(1);
    play();
  }

  return (
    <button
      className="
      relative w-14 h-14 flex justify-center
      items-center pointer-events-none"
    >
      <span
        onClick={() => {
          setHeart();
        }}
        className="absolute text-tertiary pointer-events-auto"
      >
        <HeartVector />
      </span>
      {View}
    </button>
  );
}
