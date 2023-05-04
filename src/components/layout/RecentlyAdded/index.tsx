import { Flex } from "@container/Flex";
import { RecomendedItemsCard } from "@layout/RecomendedItems/RecomendedItemsCard";
import { Product } from "@models/Product";
import { Placeholder } from "@util/Layer/Placeholder";
import { SectionTitle } from "@util/texts/SectionTitle";
import { HourglassVector } from "@vectores/Vectores";

interface RecentlyAddedProps {
  product: Product[];
}

export function RecentlyAdded({ product }: RecentlyAddedProps) {
  return (
    <Placeholder className="w-fit">
      <SectionTitle
        icon={<HourglassVector />}
        text="Adicionados Recentemente"
      />
      <Flex rowFlex className="gap-3 py-4">
        {product.slice(0, 2).map((item) => (
          <RecomendedItemsCard
            recently
            key={item.id}
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
        ))}
      </Flex>
    </Placeholder>
  );
}
