import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import { ArrowVector } from "@vectores/Vectores";

type CarouselProps = {
  images: string[];
};

export function ThumbSlider({ images }: CarouselProps) {

  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const checkCurrentThumb = (index: number) =>
    index === currentImage ? "border-secondary" : "border-transparent";

  const classes = clsx("relative", "h-80", "w-full", "md:h-96", {
    "sm:w-[36rem]": true,
    "sm:h-[25rem]": true,
    "md:w-[37rem]": true,
    "lg:h-[30rem]": true,
    "lg:w-[43rem]": true,
  });

  return (
    <div className="relative h-fit z-10">
      <div className="flex justify-center items-center">
        <div className={classes}>
          <Image
            priority
            src={images[currentImage]}
            fill
            alt="carousel image"
            className="border border-secondary sm:rounded-lg"
          />
          <button
            className="
              transition-opacity opacity-60 hover:opacity-100 h-full absolute top-1/2
              -translate-y-1/2 left-0 px-4 py-2 bg-gray-800"
            onClick={handlePrevious}
          >
            <ArrowVector className="rotate-180 w-5 h-5" />
          </button>
          <button
            className="
              transition-opacity opacity-60 hover:opacity-100 h-full
              absolute top-1/2 -translate-y-1/2 right-0 px-4
              py-2 bg-gray-800"
            onClick={handleNext}
          >
            <ArrowVector className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className={`relative -bottom-4 left-0 w-full`}>
        <div className="flex justify-center">
          <div className="flex">
            {images.map((image, index) => (
              <button
                key={index}
                className={`${checkCurrentThumb(index)} border mx-2 rounded`}
                onClick={() => setCurrentImage(index)}
              >
                <Image
                  src={image}
                  width={100}
                  height={75}
                  alt={`thumbnail ${index}`}
                  className="rounded p-0.5"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
