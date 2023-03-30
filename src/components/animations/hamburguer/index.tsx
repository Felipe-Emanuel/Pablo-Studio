import { useLottie } from "lottie-react";
import { useEffect } from "react";
import hamburguerJson from "./hamburguerJson.json";

interface HamburguerProps {
  isClose?: boolean;
  onClick?: () => void;
}

export function Hamburguer({ isClose, onClick }: HamburguerProps) {
  useEffect(() => {
    isClose === false ? setDirection(-1) : setDirection(1);
    play();
    setSpeed(3);
  }, [isClose]);

  const options = {
    animationData: hamburguerJson,
    autoplay: false,
    loop: 0,
  };

  const checkRotate = isClose ? '-rotate-90' : ''

  const { View, play, setDirection, setSpeed } = useLottie(options);

  return (
    <span
      onClick={() => onClick!()}
      aria-label="Menu Mobile"
      className={`transition-all duration-300 cursor-pointer hover:opacity-75
      absolute w-10 z-50 flex justify-center items-center
      left-8 top-1
      ${checkRotate}`}
    >
      {View}
    </span>
  );
}
