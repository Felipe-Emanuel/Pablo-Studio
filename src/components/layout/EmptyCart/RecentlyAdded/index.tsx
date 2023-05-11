import { RecomendedItemsCard } from "@layout/RecommendedItems/RecomendedItemsCard";
import { Product } from "@models/Product";
import { SectionTitle } from "@util/texts/SectionTitle";
import { HourglassVector } from "@vectores/Vectores";
import { SwiperComponent, SwiperProps, SwiperSlide } from "@layout/slider/swiper";
import { useCartContext } from "@hooks/useCartContext";
import { SkeletonRecomended } from "src/components/skeletons/SkeletonRecomended";

interface RecentlyAddedProps {
  products: Product[];
}

export function RecentlyAdded({ products }: RecentlyAddedProps) {
  const { isLoading } = useCartContext()

  const settings: SwiperProps = {
    spaceBetween: 0,
    slidesPerView: "auto"
  };

  return (
    <div className="py-4">
      <SectionTitle
        icon={<HourglassVector />}
        text="Novos Produtos"
      />
      {isLoading ? <SkeletonRecomended /> : (
        <SwiperComponent maxHeigth settings={settings}>
          {products?.length && products.slice(0, 5).map((item, i) => (
            <SwiperSlide key={i}>
              <RecomendedItemsCard
                recently
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
      )}
    </div>
  );
}
