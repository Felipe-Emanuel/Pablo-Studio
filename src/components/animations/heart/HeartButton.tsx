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
      onClick={() => {
        setHeart();
      }}
      className="relative w-14 h-14 flex justify-center items-center"
    >
      <span className="absolute text-tertiary">
        <HeartVector />
      </span>
      {View}
    </button>
  );
}
