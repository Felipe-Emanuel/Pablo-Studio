import { useState, useRef, MutableRefObject, useEffect } from "react";
import { SwiperComponent, SwiperProps, SwiperSlide } from "../swiper";
import { motion } from "framer-motion";
import { Card } from "@layout/card";
import { CardDescription } from "@layout/cardDescription";
import { useWindow } from "@hooks/useWindow";
import { Product } from "@models/Product";

type ProductSliderProps = {
  data: Product[];
};

export function ProductSlider({ data }: ProductSliderProps) {
  //MOCK
  const staticHomeTitle = "Desenhos Realistas feitos por mim";
  const staticHomeDescription =
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.";

  const { width } = useWindow();
  const [cardInfo, setCardInfo] = useState({
    name: staticHomeTitle,
    description: staticHomeDescription,
  });

  const [navigation, setNavigation] = useState(false);
  const [time, setTime] = useState(7.5);
  const timing: MutableRefObject<any> = useRef(0);

  const isNavigation = () => setNavigation((navigation) => !navigation);

  const settings: SwiperProps = {
    spaceBetween: 20,
    navigation: width < 500 ? false : navigation,
    slidesPerView: "auto",
  };

  useEffect(() => {
    timing.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    time <= 0 &&
      setCardInfo({
        name: "Desenhos Realistas feitos por mim",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
      });

    time <= 0 && clearTimeout(timing.current);

    return () => {
      clearTimeout(timing.current);
    };
  }, [time]);

  function renderProjectName(i: number) {
    setCardInfo({
      name: data[i].productName,
      description: data[i].cardDescription,
    });
  }

  const textVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      onMouseEnter={isNavigation}
      onMouseLeave={isNavigation}
      className="
        relative top-[28vh] md:top-72 md:w-screen
        flex-col md:flex md:flex-row items-center gap-4"
    >
      <motion.div
        className="pb-4 md:pb-0 md:w-[70%] flex items-center justify-center min-h-[15rem]"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          key={cardInfo.name}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardDescription
            homeDescription
            cardName={cardInfo.name}
            description={cardInfo.description}
          />
        </motion.span>
      </motion.div>
      <SwiperComponent settings={settings}>
        {data.length > 0 &&
          data?.map((card, i: number) => {
            return (
              <SwiperSlide
                key={i}
                onMouseEnter={() => {
                  setTime(7.5);
                  renderProjectName(i);
                }}
                onMouseOut={() => renderProjectName(i)}
              >
                <Card alt={card.alt} href={card.link} img={card.images[0]} />
              </SwiperSlide>
            );
          })}
      </SwiperComponent>
    </div>
  );
}
