import { Product } from "@models/Product";
import { SectionTitle } from "@util/texts/SectionTitle";
import { CartVector } from "@vectores/Vectores";
import { DocumentData } from "firebase/firestore";
import { User } from "@models/User";
import { useCartContext } from "@hooks/useCartContext";
import { SkeletonLoadingArray } from "@util/assets/SkeletonLoadingArray";
import { normalize } from "@functions/normalized";
import { RecomendedItemsCard } from "./RecomendedItemsCard";
import { getFireStore } from "@database/clientCart";
import { parseCookies } from "nookies";
import { useState, useEffect } from "react";
import {
  SwiperComponent,
  SwiperProps,
  SwiperSlide,
} from "@layout/slider/swiper";
interface RecomendedItemsProps {
  preference: DocumentData[] | User[];
  productCart: Product[];
}

export function RecommendedItems({
  preference,
  productCart,
}: RecomendedItemsProps) {
  const { capitalizeName } = normalize();
  const { isLoading } = useCartContext();

  const productsInCart =
    productCart && productCart.filter((cartItem) => cartItem.isOnCart);

  const cookies = parseCookies();
  const guestId = cookies._guest;

  const [productLiked, setProductLiked] = useState<
    DocumentData[] | Product[]
  >();

  const settings: SwiperProps = {
    spaceBetween: 0,
    slidesPerView: "auto",
  };

  const preferences = (preference && preference[0]?.preferencesLiked) || [];

  productLiked &&
    productLiked.sort((a, b) => {
      const aBrandViews = (preferences && preferences[a.brand]) || 0;
      const bBrandViews = (preferences && preferences[b.brand]) || 0;
      return bBrandViews - aBrandViews;
    });

  const userPreferedBrand = productLiked
    ? capitalizeName(String(productLiked && productLiked[0]?.brand))
    : "";

  useEffect(() => {
    const gettingProductLiked = async () => {
      await getFireStore("productLiked", guestId).then((resp) => {
        const productLiked = resp && resp.filter((item) => item.isLiked);
        setProductLiked(productLiked);
      });
    };

    gettingProductLiked();
  }, [isLoading]);

  const isItemInCart = (item: DocumentData | Product) =>
    productsInCart &&
    productsInCart.some((cartItem) => cartItem.id === item.id);

  const renderProducts = () => {
    const filtredProducts = productLiked
      ?.filter((item) => !isItemInCart(item))
      ?.slice(0, 10);

    if (!filtredProducts || filtredProducts.length === 0) return null;

    return (
      <SwiperComponent maxHeigth settings={settings}>
        {filtredProducts.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <RecomendedItemsCard
                brand={item.brand}
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

  if (isLoading) return <SkeletonLoadingArray />;

  return (
    <>
      {renderProducts() && (
        <div className="pt-4">
          <SectionTitle
            icon={<CartVector />}
            text={`Porque você curte ${userPreferedBrand}!`}
          />
        </div>
      )}
      {renderProducts()}
    </>
  );
}
