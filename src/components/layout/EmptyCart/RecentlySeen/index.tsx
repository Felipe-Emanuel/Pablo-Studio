import { RecomendedItemsCard } from "@layout/RecommendedItems/RecomendedItemsCard";
import { Product } from "@models/Product";
import { SectionTitle } from "@util/texts/SectionTitle";
import { EyeVector } from "@vectores/Vectores";
import {
  SwiperComponent,
  SwiperProps,
  SwiperSlide,
} from "@layout/slider/swiper";
import { DocumentData } from "firebase/firestore";
import { useCartContext } from "@hooks/useCartContext";
import { SkeletonLoadingArray } from "@util/assets/SkeletonLoadingArray";

interface RecentlySeenProps {
  recentlySeen: Product[] | DocumentData[];
  productCart: Product[];
}

export function RecentlySeen({ recentlySeen, productCart }: RecentlySeenProps) {
  const { isLoading } = useCartContext();

  const productsInCart =
    productCart && productCart.filter((cartItem) => cartItem.isOnCart);

  const eyeIcon = <div className="w-8 h-8">{<EyeVector />}</div>;

  const settings: SwiperProps = {
    spaceBetween: 0,
    slidesPerView: "auto",
  };

  return (
    <div>
      {productsInCart?.length >= 0 && (
        <>
          <div className="py-4">
            <SectionTitle icon={eyeIcon} text="Vistos Recentemente" />
          </div>
          {isLoading ? (
            <SkeletonLoadingArray />
          ) : (
            <SwiperComponent maxHeigth settings={settings}>
              {recentlySeen &&
                recentlySeen?.length &&
                recentlySeen.slice(0, 10).map((item, i) => {
                  const isItemInCart =
                    productsInCart &&
                    productsInCart.some((cartItem) => cartItem.id === item.id);
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
      )}
    </div>
  );
}
