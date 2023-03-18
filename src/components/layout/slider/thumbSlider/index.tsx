import Image from "next/image";
import { useState } from "react";
import { ArrowVector } from "@vectores/Vectores";
import { useWindow } from "src/data/hooks/useWindow";

type CarouselProps = {
  images: string[];
};

export function ThumbSlider({ images }: CarouselProps) {
  const { width } = useWindow();

  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const checkWidth =
    width < 300 ? "-bottom-10" : width < 530 ? "-bottom-16" : "-bottom-20";

  const checkCurrentThumb = (index: number) => index === currentImage
  ? "border-secondary"
  : "border-transparent"

  return (
    <div className="relative h-fit z-10">
      <div className="flex justify-center items-center">
        <div className="
          relative h-80 w-full sm:w-[36rem] md:h-96
          sm:h-[25rem] md:w-[37rem] lg:h-[30rem] lg:w-[43rem]"
        >
          <Image
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
      <div className={`absolute ${checkWidth} sm:-bottom-24 left-0 w-full`}>
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
