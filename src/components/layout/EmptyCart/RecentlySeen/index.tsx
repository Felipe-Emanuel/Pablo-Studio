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

  const isItemInCart = (item: DocumentData | Product) =>
    productsInCart &&
    productsInCart.some((cartItem) => cartItem.id === item.id);

  const renderProducts = () => {
    const filtredProducts = recentlySeen
      ?.filter((item) => !isItemInCart(item))
      ?.slice(0, 10);

      const sortedByDate = filtredProducts.sort((a, b) => {
        if (a.recentlySeen > b.recentlySeen) {
          return -1;
        } else if (a.recentlySeen < b.recentlySeen) {
          return 1;
        } else {
          return 0;
        }
      });

    if (!sortedByDate || sortedByDate.length === 0) return null;

    return (
      <SwiperComponent maxHeigth settings={settings}>
        {sortedByDate.map((item, i) => {
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
    );
  };

  if (isLoading) return <SkeletonLoadingArray />

  return (
    <>
      {renderProducts() && (
        <div className="pt-4">
          <SectionTitle icon={eyeIcon} text="Vistos Recentemente" />
        </div>
      )}
      {renderProducts()}
    </>
  );
}
