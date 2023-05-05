import { RecomendedItemsCard } from "@layout/RecomendedItems/RecomendedItemsCard";
import { Product } from "@models/Product";
import { SectionTitle } from "@util/texts/SectionTitle";
import { HourglassVector } from "@vectores/Vectores";
import { SwiperComponent, SwiperProps, SwiperSlide } from "@layout/slider/swiper";

interface RecentlyAddedProps {
  product: Product[];
}

export function RecentlyAdded({ product }: RecentlyAddedProps) {
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
      <SwiperComponent maxHeigth settings={settings}>
        {product.slice(0, 10).map((item, i) => (
          <SwiperSlide >
            <RecomendedItemsCard
              recently
              key={i}
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
    </div>
  );
}
