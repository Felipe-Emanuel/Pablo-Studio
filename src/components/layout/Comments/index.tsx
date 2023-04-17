import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindow } from "@hooks/useWindow";
import { CardDescComent } from "@layout/CardDescComent";
import { ArrowButton } from "@util/buttons/ArrowButton";
import { Text } from "@util/texts/Text";
import { PablosSignature } from "@vectores/Vectores";
import { ProductComment } from "@models/Product";

interface CommentsProps {
  data: ProductComment[];
  id: number;
}

export function Comments({ data, id }: CommentsProps) {
  const { width } = useWindow();
  const [isArrowHidden, setIsArrowHidden] = useState(false);
  const [disabled, setDisabled] = useState({
    next: data.length <= 1,
    previous: true,
  });
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");

  useEffect(() => {
    width <= 500 || data.length <= 1
      ? setIsArrowHidden(true)
      : setIsArrowHidden(false);
  }, [width, data.length]);

  useEffect(() => {

    data.length > 1
    ? setDisabled((prev) => ({ ...prev, next: false }))
    : setDisabled((prev) => ({ ...prev, next: true }));

    setIndex(0);

    setDisabled((prev) => ({ ...prev, previous: true }))
  }, [id]);

  const next = () => {
    setDirection("next");
    const nextIndex = index + 1;
    setIndex(nextIndex);
    if (nextIndex === data.length - 1 || data.length === 1) {
      setDisabled((prev) => ({ ...prev, next: true }));
    }
    if (nextIndex > 0 && disabled.previous) {
      setDisabled((prev) => ({ ...prev, previous: false }));
    }
  };

  const previus = () => {
    setDirection("previous");
    if (index > 0) {
      const prevIndex = index - 1;
      setIndex(prevIndex);
      if (prevIndex === 0) {
        setDisabled((prev) => ({ ...prev, previous: true }));
      }
      if (prevIndex < data.length - 1 && disabled.next) {
        setDisabled((prev) => ({ ...prev, next: false }));
      }
    }
  };

  const checkNextDisabled = disabled.next === true ? "hidden" : "flex";
  const checkPreviousDisabled = disabled.previous === true ? "hidden" : "flex";
  const checkWidth = (value: string) =>
    width < 500 ? `-${value}-10` : `${value}-0`;

  // USER MOCKED
  const user = "Felipe";

  function renderArrowButtons() {
    return (
      <>
        {data.length > 0 && (
          <>
            <ArrowButton
              hover
              className={`z-20 absolute ${checkWidth(
                "right"
              )} w-6 h-6 ${checkNextDisabled}`}
              onClick={next}
            />
            <ArrowButton
              hover
              inverse
              className={`z-20 rotate-180 absolute ${checkWidth(
                "left"
              )} w-6 h-6 ${checkPreviousDisabled}`}
              onClick={previus}
            />
          </>
        )}
      </>
    );
  }

  const textVariants = {
    hidden: { display: "none", x: 25 },
    visible: { display: "flex", x: 0 },
  };

  return (
    <>
      <PablosSignature />
      <div
        onMouseEnter={() => width > 500 && setIsArrowHidden(true)}
        onMouseLeave={() => width > 500 && setIsArrowHidden(false)}
        className="
        h-full flex flex-col m-auto w-full
        justify-center items-center overflow-hidden"
      >
        <motion.div
          variants={textVariants}
          transition={{ duration: 0.3 }}
          className="w-full sm:w-fit flex"
        >
          <AnimatePresence>
            {data.length > 0 ? (
              <motion.div
                initial={{
                  opacity: 0,
                  x: direction === "next" ? "100%" : "-100%",
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ display: "none", x: -100 }}
                transition={{ duration: 0.5 }}
                key={data[index]?.id}
                className="z-20 "
              >
                <CardDescComent
                  avatar
                  date={data[index]?.date}
                  user={`/profile/${data[index]?.userName}`}
                  alt={data[index]?.alt}
                  img={data[index]?.img}
                  title={data[index]?.userName}
                  text={data[index]?.comment}
                />
              </motion.div>
            ) : (
              <Text text={`Seja o primeiro a fazer um comentário, ${user}`} />
            )}
          </AnimatePresence>
        </motion.div>
        {isArrowHidden && renderArrowButtons()}
      </div>
    </>
  );
}
