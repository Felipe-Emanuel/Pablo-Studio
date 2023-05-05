import { Swiper, SwiperProps } from "swiper/react";
import { ThumbsOptions } from "swiper/types";
import { ReactNode } from "react";
import { Navigation, Pagination, A11y, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Thumbs]}
      thumbs={thumbs}
      {...settings}
      className={`w-screen ${maxHeigth ? 'sm:h-[340px] md:h-[430px]' : 'h-full'}`}
    >
      {children}
    </Swiper>
  );
}
