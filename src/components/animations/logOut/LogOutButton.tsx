import { useLottie } from "lottie-react";
import { useState } from "react";
import logOut from "./logOut.json";

export function LogOutButton() {
  const [isActive, setIsActive] = useState(false);

  const options = {
    animationData: logOut,
    autoplay: false,
    loop: 0,
  };

  const { View, play, setDirection, setSpeed } = useLottie(options);

  function setOut() {
    setSpeed(2);
    setIsActive((isActive) => !isActive);
    isActive === true ? setDirection(-1) : setDirection(1);
    play();
  }

  return (
    <button
      onMouseEnter={() => setOut()}
      onMouseLeave={() => setOut()}
      className="
        rounded-full transition-opacity
        relative -left-3 w-10 h-10 flex items-center hover:opacity-75"
    >
      {View}
    </button>
  );
}
