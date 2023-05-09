import { useWindow } from "@hooks/useWindow";
import { useState } from "react";
import { ProductCartImage } from "@layout/ProductCart/ProductCartImage";
import { normalize } from "@functions/normalized";
import { HeartButton } from "@animations/heart/HeartButton";
import { Title } from "@util/texts/Title";
import { Button } from "@util/buttons/Button";
import { Text } from "@util/texts/Text";
import { Product } from "@models/Product";
import { useCartContext } from "@hooks/useCartContext";
import { useRouter } from "next/router";
import { DocumentData } from "firebase/firestore";
import { useRecentlySeen } from "@hooks/useRecentlySeen";
import { TooltipComp } from "@util/assets/TooltipComp";
import { TrashVector } from "@vectores/Vectores";
import { BrandAnimation } from "@animations/brands/BrandAnimation";
import actionFigureJson from "@animations/brands/actionFigureJson.json";
import dcComicsJson from "@animations/brands/dcComicsJson.json";
import drawingJson from "@animations/brands/drawingJson.json";
import gamesJson from "@animations/brands/gamesJson.json";
import mangaJson from "@animations/brands/mangaJson.json";
import marvelJson from "@animations/brands/marvelJson.json";
import starWarsJson from "@animations/brands/starWarsJson.json";
import statueJson from "@animations/brands/statueJson.json";
import disneyJson from "@animations/brands/disneyJson.json";

interface RecomendedItemsCardProps {
  item: Product | DocumentData;
  id: number;
  link: string;
  alt: string;
  images: string;
  productName: string;
  productDescription: string;
  guestProductId: string;
  initialPrice: number;
  recently?: boolean;
  trashIcon?: boolean;
  brand?:
    | "marvel"
    | "dc"
    | "disney"
    | "anime"
    | "starWars"
    | "games"
    | "statueDrawing"
    | "drawing"
    | "actionFigure";
}

export function RecomendedItemsCard({
  item,
  id,
  link,
  alt,
  images,
  productName,
  productDescription,
  guestProductId,
  initialPrice,
  recently,
  trashIcon,
  brand,
}: RecomendedItemsCardProps) {
  const { formatPrice } = normalize();
  const { removeRecentlySeen } = useRecentlySeen();
  const { addToCart } = useCartContext();
  const { width } = useWindow();
  const [hoverProductId, setHoverProductId] = useState<number | string>("");

  const router = useRouter();

  const changeVisibility = (productId: number | string) =>
    width >= 768 && setHoverProductId(productId);

  const handleClick = () =>
    recently ? router.push(link) : addToCart(item, guestProductId);

  const checkTextButton = (price: number) =>
    width >= 768
      ? `${hoverProductId === id ? formatPrice(price) : "Pro carrinho"}`
      : "Pro carrinho";

  const checkVisibility =
    hoverProductId === id
      ? "translate-y-[0%]"
      : "md:opacity-0 md:p-3 hover:opacity-100 -translate-y-[10%]";

  const courseIcons = {
    marvel: marvelJson,
    dc: dcComicsJson,
    disney: disneyJson,
    anime: mangaJson,
    starWars: starWarsJson,
    games: gamesJson,
    statueDrawing: statueJson,
    drawing: drawingJson,
    actionFigure: actionFigureJson,
  };

  //@ts-ignore
  const brandAnimation = courseIcons[item.brand]

  return (
    <div
      onMouseEnter={() => changeVisibility(item.id)}
      onMouseLeave={() => changeVisibility("")}
      className={`
        w-52 sm:w-72 h-fit overflow-hidden p-1 rounded-md transition-all
        mb-4 bg-placeholder hover:bg-gray-400 flex flex-col relative
      `}
    >
      <div
        className={`transition-all duration-100 ease-in-out ${
          hoverProductId === id ? "scale-105" : "scale-100"
        }`}
      >
        <div className="flex justify-center items-center transition-all relative">
          <div
            className={`transition-all duration-500 md:hover:bg-black/25 rounded-full
          w-11 h-10 absolute -top-2 -left-1 md:top-0 md:left-0 flex items-center
          ${checkVisibility}`}
          >
            <HeartButton className="w-8 md:w-12" />
          </div>
          {trashIcon && (
            <div
              onClick={() => removeRecentlySeen(item)}
              className={`transition-all duration-500 md:hover:bg-black/25 rounded-full
              w-11 h-10 absolute -top-2 -right-3 md:top-0 md:right-0 flex items-center
              cursor-pointer
              ${checkVisibility}`}
            >
              <TrashVector recently />
            </div>
          )}
        </div>
        <ProductCartImage
          recently
          productLink={link}
          alt={alt}
          src={images}
          className={`md:w-full md:h-full`}
        />
      </div>
      <div className={`py-2 h-20 md:h-fit`}>
        <div className="relative">
          {brand && (
            <TooltipComp text={item.brand}>
              <BrandAnimation
                animationData={brandAnimation}
                className="z-50"
              />
            </TooltipComp>
          )}
          <Title
            className={`text-xs md:text-md h-8`}
            bold
            title={productName}
          />
        </div>
        <div
          className={`pt-2 h-10  overflow-hidden line-clamp-2 md:line-clamp-4 md:h-[110px]`}
        >
          <Text className={`text-xs md:text-md`} text={productDescription} />
        </div>
      </div>
      <div className="pt-2">
        <Button
          recently
          onClick={handleClick}
          isPrimary
          text={recently ? "Visualizar" : checkTextButton(initialPrice)}
        />
      </div>
    </div>
  );
}
