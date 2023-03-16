import { Card } from "@layout/card";
import { SwiperComponent, SwiperProps, SwiperSlide } from "../swiper";
import { CardDescription } from "@layout/selectedCard/cardDescription";

type IData = {
  alt: string;
  link: string;
  image: string;
};

type IProductSliderProps = {
  productName: string;
  description: string;
  data: IData[];
};

export function ProductSlider({
  productName,
  description,
  data,
}: IProductSliderProps) {
  const settings: SwiperProps = {
    spaceBetween: 20,
    navigation: true,
    slidesPerView: "auto",
  };

  return (
    <div className="flex flex-col md:flex-row w-screen items-center gap-4">
      <div className="w-screen md:w-[50%] flex  items-center justify-center">
        <CardDescription cardName={productName} description={description} />
      </div>
      <div className="w-screen md:w-[50%]">
        {data.length > 0 &&
          data.map((card: IData) => {
            return (
              <SwiperComponent settings={settings}>
                <SwiperSlide>
                  <Card alt={card.alt} href={card.link} img={card.image} />
                </SwiperSlide>
              </SwiperComponent>
            );
          })}
      </div>
    </div>
  );
}
