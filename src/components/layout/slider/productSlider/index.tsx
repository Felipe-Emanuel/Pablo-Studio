import { Card } from "@layout/card";
import { SwiperComponent, SwiperProps, SwiperSlide } from "../swiper";
import { CardDescription } from "@layout/selectedCard/cardDescription";
import { useState, useRef, MutableRefObject, useEffect } from "react";
import { motion } from "framer-motion";

type Data = {
  name: string;
  alt: string;
  link: string;
  image: string;
  description: string;
};

type ProductSliderProps = {
  data: Data[];
};

export function ProductSlider({ data = [] }: ProductSliderProps) {
  const staticHomeTitle = "Desenhos Realistas feitos por mim";
  const staticHomeDescription =
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.";
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
    navigation: navigation,
    slidesPerView: "auto",
  };

  useEffect(() => {
    clearTimeout(timing.current);

    timing.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    time <= 0 &&
      setCardInfo({
        name: "Desenhos Realistas feitos por mim",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
      });

    return () => {
      clearTimeout(timing.current);
    };
  }, [time]);

  function renderProjectName(i: number) {
    setCardInfo({
      name: data[i].name,
      description: data[i].description,
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
      className="relative top-52 flex flex-col md:flex-row w-screen items-center gap-4"
    >
      <motion.div
        className="w-screen md:w-[50%] flex items-center justify-center"
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
            cardName={cardInfo.name}
            description={cardInfo.description}
          />
        </motion.span>
      </motion.div>
      <SwiperComponent settings={settings}>
        <div className="w-screen md:w-[50%]">
          {data.length > 0 &&
            data.map((card: Data, i: number) => {
              return (
                <SwiperSlide
                  key={i}
                  onMouseEnter={() => {
                    setTime(7.5);
                    renderProjectName(i);
                  }}
                  onMouseOut={() => {
                    renderProjectName(i);
                  }}
                >
                  <Card alt={card.alt} href={card.link} img={card.image} />
                </SwiperSlide>
              );
            })}
        </div>
      </SwiperComponent>
    </div>
  );
}
