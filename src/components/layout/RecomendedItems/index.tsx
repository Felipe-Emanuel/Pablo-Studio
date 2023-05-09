import { RecomendedItemsCard } from "@layout/RecomendedItems/RecomendedItemsCard";
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

interface RecomendedItemsProps {
  preference: DocumentData[] | User[];
  product: Product[];
}

export function RecomendedItems({ preference, product }: RecomendedItemsProps) {
  const { capitalizeName } = normalize();
  const { isLoading } = useCartContext();

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

  const userPreferedBrand = product && capitalizeName(String(product[0].brand));

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
              {product?.length &&
                product.slice(0, 10).map((item, i) => {
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
