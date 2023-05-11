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
import { normalize } from "@functions/normalized";
import { RecomendedItemsCard } from "./RecomendedItemsCard";
import { getProductLiked } from "@database/productLiked";
import { useState, useEffect } from "react";
import { getFireStore } from "@database/clientCart";
import { parseCookies } from "nookies";

interface RecomendedItemsProps {
  preference: DocumentData[] | User[];
  product: Product[];
}

export function RecommendedItems({ preference, product }: RecomendedItemsProps) {
  const { capitalizeName } = normalize();
  const { isLoading } = useCartContext();

  const cookies = parseCookies();
  const guestId = cookies._guest

  const [productLiked, setProductLiked] = useState<DocumentData[] | undefined>(product);


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

  const userPreferedBrand = product && capitalizeName(String(productLiked && productLiked[0].brand));


useEffect(() => {
  const getLikedProducts = async () => {

    const gettingProductLiked = async () => {
      await getFireStore("productLiked", guestId)
      .then((resp) => {
        const productLiked = resp?.filter(item => item.isLiked)

        setProductLiked(productLiked)
      })
    }
    return gettingProductLiked()
  };
  getLikedProducts();
}, [isLoading])


  return (
    <>
      {preference[0] !== undefined && (
        <>
          <div className="pt-4">
            <SectionTitle
              icon={<CartVector />}
              text={`Porque você curte ${userPreferedBrand}!`}
            />
          </div>
          {isLoading ? (
            <SkeletonLoadingArray />
          ) : (
            <SwiperComponent maxHeigth settings={settings}>
              {productLiked?.length &&
                productLiked.slice(0, 10).map((item, i) => {

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
          )}
        </>
      )}
    </>
  );
}
