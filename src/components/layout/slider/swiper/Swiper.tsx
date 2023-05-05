import { Swiper, SwiperProps } from "swiper/react";
import { ThumbsOptions } from "swiper/types";
import { ReactNode, useState } from "react";
import { Navigation, Pagination, A11y, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useWindow } from "@hooks/useWindow";

type ISwiperComponentProps = {
  settings?: SwiperProps;
  thumbs?: ThumbsOptions;
  maxHeigth?: boolean;
  children: ReactNode;
};

export default function SwiperComponent({
  children,
  settings,
  thumbs,
  maxHeigth,
}: ISwiperComponentProps) {
  const { width } = useWindow()
  const [isVisible, setIsVisible] = useState(false);

  const sideStyle = {
    background:
      `radial-gradient(circle, rgba(170,170,170,0) ${width > 1023 ? '95%' : '85%' }, rgba(18,18,20,1) 100%)`,
  };

  const handleHover = () => setIsVisible((isVisible) => !isVisible);

  const renderSwiper = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, A11y, Thumbs]}
        thumbs={thumbs}
        {...settings}
        className={`absolute w-screen sm:-left-10 ${
          maxHeigth ? "sm:h-[340px] md:h-[430px]" : "h-full"
        }`}
      >
        {children}
      </Swiper>
    );
  };

  return (
    <>
      {maxHeigth ? (
        <>
          <div
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className="relative w-fit"
          >
            <div
              style={isVisible ? sideStyle : {}}
              className="absolute w-screen sm:-left-10 z-20 pointer-events-none h-full"
            />
            {renderSwiper()}
          </div>
        </>
      ) : (
        renderSwiper()
      )}
    </>
  );
}
