import { RecomendedItemsCard } from "@layout/RecommendedItems/RecomendedItemsCard";
import { Product } from "@models/Product";
import { SectionTitle } from "@util/texts/SectionTitle";
import { CartVector } from "@vectores/Vectores";
import {
  SwiperComponent,
  SwiperProps,
  SwiperSlide,
} from "@layout/slider/swiper";
import { DocumentData } from "firebase/firestore";
import { User } from "@models/User";
import { useCartContext } from "@hooks/useCartContext";
import { SkeletonLoadingArray } from "@util/assets/SkeletonLoadingArray";

interface MostViwedProps {
  preference: DocumentData[] | User[];
  product: Product[];
  productCart: Product[];
}

export function MostViwed({
  preference,
  product,
  productCart,
}: MostViwedProps) {
  const { isLoading } = useCartContext();

                    const productsInCart =
                    productCart &&
                    productCart.filter((cartItem) => cartItem.isOnCart);

  const settings: SwiperProps = {
    spaceBetween: 0,
    slidesPerView: "auto",
  };

  const preferences = (preference && preference[0]?.preferences) || [];

  product &&
    product.sort((a, b) => {
      const aBrandViews = (preferences && preferences[a.brand]) || 0;
      const bBrandViews = (preferences && preferences[b.brand]) || 0;
      return bBrandViews - aBrandViews;
    });

  return (
    <>
      {preference[0] !== undefined && productsInCart.length >= 0 && (
        <>
          <div className="pt-4">
            <SectionTitle
              icon={<CartVector />}
              text={`Com base nos que você mais visualizou!`}
            />
          </div>
          {isLoading ? (
            <SkeletonLoadingArray />
          ) : (
            <SwiperComponent maxHeigth settings={settings}>
              {product &&
                product?.length &&
                product.slice(0, 10).map((item, i) => {

                  const isItemInCart =
                    productsInCart &&
                    productsInCart.some((cartItem) => cartItem.id === item.id);
                  if (isItemInCart) {
                    return null;
                  }
                  return (
                    <SwiperSlide key={i}>
                      <RecomendedItemsCard
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
    </>
  );
}
