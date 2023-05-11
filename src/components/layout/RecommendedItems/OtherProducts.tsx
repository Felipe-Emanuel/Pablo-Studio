import { useCartContext } from "@hooks/useCartContext";
import { Product } from "@models/Product";
import { SectionTitle } from "@util/texts/SectionTitle";
import { BagVector } from "@vectores/Vectores";
import { DocumentData } from "firebase/firestore";
import { SkeletonRecomended } from "src/components/skeletons/SkeletonRecomended";
import { RecomendedItemsCard } from "./RecomendedItemsCard";
import {
  SwiperComponent,
  SwiperSlide,
  SwiperProps,
} from "@layout/slider/swiper";
import { SkeletonLoadingArray } from "@util/assets/SkeletonLoadingArray";

interface RecomendedItemsProps {
  product: Product[];
}

export function OtherProducts({ product }: RecomendedItemsProps) {
  const { isLoading } = useCartContext();

  const settings: SwiperProps = {
    spaceBetween: 0,
    slidesPerView: "auto",
  };

  const isItemInCart = (item: DocumentData | Product) =>
    product && product.some((cartItem) => cartItem.id === item.id);

  const renderProducts = () => {
    const filtredProducts = product
      ?.filter((item) => !isItemInCart(item))
      ?.slice(0, 10);

    if (!filtredProducts || filtredProducts.length === 0) return null;

    return (
      <SwiperComponent maxHeigth settings={settings}>
        {filtredProducts.map((item, i) => {
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

  if (isLoading) return <SkeletonLoadingArray />;

  return (
    <>
      {renderProducts() && (
        <div className="py-4">
          <SectionTitle icon={<BagVector />} text="Outros Produtos" />
        </div>
      )}
      {renderProducts()}
    </>
  );
}
