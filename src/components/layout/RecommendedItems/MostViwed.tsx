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
  recentlySeen: DocumentData[] | Product[];
  productCart: Product[];
}

export function MostViwed({
  preference,
  recentlySeen,
  productCart,
}: MostViwedProps) {
  const { isLoading } = useCartContext();

  const productsInCart =
    productCart && productCart.filter((cartItem) => cartItem.isOnCart);

  const settings: SwiperProps = {
    spaceBetween: 0,
    slidesPerView: "auto",
  };

  const preferences = (preference && preference[0]?.preferences) || [];

  recentlySeen &&
    recentlySeen.sort((a, b) => {
      const aBrandViews = (preferences && preferences[a.brand]) || 0;
      const bBrandViews = (preferences && preferences[b.brand]) || 0;

      if (aBrandViews >= 10 && bBrandViews >= 10) {
        return bBrandViews - aBrandViews;
      }
      return -1;
    });

  const isItemInCart = (item: DocumentData | Product) =>
    productsInCart &&
    productsInCart.some((cartItem) => cartItem.id === item.id);

    const renderProducts = () => {
      const filteredProducts = recentlySeen
        ?.filter((item) => !isItemInCart(item))
        ?.filter((item) => preferences[item.brand] >= 10)
        ?.slice(0, 10);

        console.log(filteredProducts)

      if (!filteredProducts || filteredProducts.length === 0) return null;

      return (
        <SwiperComponent maxHeigth settings={settings}>
          {filteredProducts.map((item, i) => (
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
          ))}
        </SwiperComponent>
      );
    };

  if (isLoading) return <SkeletonLoadingArray />;

  return (
    <>
      {renderProducts() && (
        <div className="pt-4">
          <SectionTitle
            icon={<CartVector />}
            text={`Com base nos que você mais visualizou!`}
          />
        </div>
      )}
      {renderProducts()}
    </>
  );
}
