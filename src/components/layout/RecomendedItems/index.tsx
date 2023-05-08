import { useCartContext } from "@hooks/useCartContext";
import { Product } from "@models/Product";
import { SectionTitle } from "@util/texts/SectionTitle";
import { BagVector } from "@vectores/Vectores";
import { DocumentData } from "firebase/firestore";
import { SkeletonRecomended } from "src/components/skeletons/SkeletonRecomended";
import { Budget } from "@layout/Budget";
import { RecomendedItemsCard } from "./RecomendedItemsCard";
import {
  SwiperComponent,
  SwiperSlide,
  SwiperProps,
} from "@layout/slider/swiper";

interface RecomendedItemsProps {
  product: Product[];
  productCart: DocumentData[] & Product[];
}

export function RecomendedItems({
  product,
  productCart,
}: RecomendedItemsProps) {
  const { isLoading } = useCartContext();

  const settings: SwiperProps = {
    spaceBetween: 0,
    slidesPerView: "auto",
  };

  return (
    <>
      <div className="py-4">
        <SectionTitle icon={<BagVector />} text="Outros Produtos" />
      </div>
      {isLoading ? (
        <div className="pt-4 flex gap-3">
          {product?.map((item) => (
            <SkeletonRecomended key={item.id} />
          ))}
        </div>
      ) : (
            <SwiperComponent maxHeigth settings={settings}>
              {product &&
                product?.length &&
                product.map((item, i) => {
                  const productsInCart = productCart.filter(
                    (cartItem) => cartItem.isOnCart
                  );
                  const isItemInCart = productsInCart.some(
                    (cartItem) => cartItem.id === item.id
                  );
                  if (isItemInCart) {
                    return null;
                  }

                  return (
                      <SwiperSlide key={i}>
                        <RecomendedItemsCard
                          trashIcon
                          alt={item.alt}
                          guestProductId={item.guestProductId}
                          id={item.id}
                          images={item.images[0]}
                          initialPrice={item.initialPrice}
                          item={item}
                          link={item.link}
                          productDescription={item.productDescription}
                          productName={item.productName}
                        />
                      </SwiperSlide>
                  );
                })}
            </SwiperComponent>
      )}
    </>
  );
}
