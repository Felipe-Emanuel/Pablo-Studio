import { useLottie } from "lottie-react";
import search from "./search.json";

export function SearchLoading() {

  const options = {
    animationData: search,
    autoplay: true,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <button
      className="
        rounded-full transition-opacity
        relative w-10 h-10 flex items-center hover:opacity-75"
    >
      {View}
    </button>
  );
}
