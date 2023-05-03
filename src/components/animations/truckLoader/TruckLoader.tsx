import { useLottie } from "lottie-react";
import truck from "./truck.json";

export function TruckLoader() {

  const options = {
    animationData: truck,
    autoplay: true,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="w-52 md:w-72 flex items-center justify-center m-auto pointer-events-none">
      {View}
    </div>
  );
}
