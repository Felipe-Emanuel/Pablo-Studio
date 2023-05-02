import { useState } from "react";
import { HeartButton } from "@animations/heart/HeartButton";
import { useCartContext } from "@hooks/useCartContext";
import { ProductCartImage } from "@layout/ProductCart/ProductCartImage";
import { Product } from "@models/Product";
import { Button } from "@util/buttons/Button";
import { SectionTitle } from "@util/texts/SectionTitle";
import { Text } from "@util/texts/Text";
import { Title } from "@util/texts/Title";
import { BagVector } from "@vectores/Vectores";
import { DocumentData } from "firebase/firestore";
import { SkeletonRecomended } from "src/components/skeletons/SkeletonRecomended";
import { useWindow } from "@hooks/useWindow";
import { normalize } from "@functions/normalized";

interface RecomendedItemsProps {
  product: Product[];
  productCart: DocumentData[] & Product[];
}

export function RecomendedItems({
  product,
  productCart,
}: RecomendedItemsProps) {
  const { width } = useWindow();
  const { isLoading, addToCart } = useCartContext();
  const { formatPrice } = normalize();
  const [hoverProductId, setHoverProductId] = useState<number | string>("");

  const changeVisibility = (productId: number | string) =>
    width >= 768 && setHoverProductId(productId);

  return (
    <>
      <SectionTitle icon={<BagVector />} text="Outros Produtos" />
      {isLoading ? (
        <div className="pt-4 flex gap-3">
          {product?.map((item) => (
            <SkeletonRecomended key={item.id} />
          ))}
        </div>
      ) : (
        <div className="flex gap-2 md:gap-4 pt-4">
          {product.length &&
            product.map((item) => {
              const productsInCart = productCart.filter(
                (cartItem) => cartItem.isOnCart
              );
              const isItemInCart = productsInCart.some(
                (cartItem) => cartItem.id === item.id
              );
              if (isItemInCart) {
                return null;
              }

              const checkTextButton = (price: number) =>
                width >= 768
                  ? `${
                      hoverProductId === item.id
                        ? formatPrice(price)
                        : "Pro carrinho"
                    }`
                  : "Pro carrinho";

              const checkVisibility =
                hoverProductId === item.id
                  ? "translate-y-[0%]"
                  : "md:opacity-0 hover:opacity-100 -translate-y-[10%]";

              return (
                <div
                  onMouseEnter={() => changeVisibility(item.id)}
                  onMouseLeave={() => changeVisibility("")}
                  key={item.id}
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
                    productLink={item.link}
                    alt={item.alt}
                    src={item.images[0]}
                    className="md:w-full md:h-full"
                  />
                  <div className="py-2 h-20 md:h-fit">
                    <Title
                      className="text-xs md:text-md h-8"
                      bold
                      title={item.productName}
                    />
                    <div className="pt-2 h-10 md:h-[110px] overflow-hidden line-clamp-2 md:line-clamp-4">
                      <Text
                        className={`text-xs md:text-md`}
                        text={item.productDescription}
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button
                      onClick={() => addToCart(item, item.guestProductId)}
                      isPrimary
                      text={checkTextButton(item.initialPrice)}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}
