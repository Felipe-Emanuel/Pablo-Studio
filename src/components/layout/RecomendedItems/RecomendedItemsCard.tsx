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

interface RecomendedItemsCardProps {
  item: Product;
  id: number;
  link: string;
  alt: string;
  images: string;
  productName: string;
  productDescription: string;
  guestProductId: string;
  initialPrice: number;
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
}: RecomendedItemsCardProps) {
  const { formatPrice } = normalize();
  const { addToCart } = useCartContext();
  const { width } = useWindow();
  const [hoverProductId, setHoverProductId] = useState<number | string>("");

  const changeVisibility = (productId: number | string) =>
    width >= 768 && setHoverProductId(productId);

  const checkTextButton = (price: number) =>
    width >= 768
      ? `${hoverProductId === id ? formatPrice(price) : "Pro carrinho"}`
      : "Pro carrinho";

  const checkVisibility =
    hoverProductId === id
      ? "translate-y-[0%]"
      : "md:opacity-0 hover:opacity-100 -translate-y-[10%]";

  return (
    <div
      onMouseEnter={() => changeVisibility(item.id)}
      onMouseLeave={() => changeVisibility("")}
      className="
        p-1 md:p-3 rounded-md mb-4 transition-all bg-placeholder hover:bg-gray-400 flex flex-col relative
        w-32 md:w-72 h-fit overflow-hidden"
    >
      <div
        className={`flex justify-center items-center transition-all absolute`}
      >
        <div
          className={`transition-all md:hover:bg-black/25 rounded-full
          w-11 h-10 absolute -top-2 -left-1 md:top-0 md:left-0 flex items-center
          ${checkVisibility}`}
        >
          <HeartButton className="w-8 md:w-12" />
        </div>
      </div>
      <ProductCartImage
        productLink={link}
        alt={alt}
        src={images}
        className="md:w-full md:h-full"
      />
      <div className="py-2 h-20 md:h-fit">
        <Title className="text-xs md:text-md h-8" bold title={productName} />
        <div className="pt-2 h-10 md:h-[110px] overflow-hidden line-clamp-2 md:line-clamp-4">
          <Text className={`text-xs md:text-md`} text={productDescription} />
        </div>
      </div>
      <div className="pt-2">
        <Button
          onClick={() => addToCart(item, guestProductId)}
          isPrimary
          text={checkTextButton(initialPrice)}
        />
      </div>
    </div>
  );
}
