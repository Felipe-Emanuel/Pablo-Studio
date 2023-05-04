import { useCartContext } from "@hooks/useCartContext";
import { Product } from "@models/Product";
import { SectionTitle } from "@util/texts/SectionTitle";
import { BagVector } from "@vectores/Vectores";
import { DocumentData } from "firebase/firestore";
import { SkeletonRecomended } from "src/components/skeletons/SkeletonRecomended";
import { Budget } from "@layout/Budget";
import { RecomendedItemsCard } from "./RecomendedItemsCard";

interface RecomendedItemsProps {
  product: Product[];
  productCart: DocumentData[] & Product[];
}

export function RecomendedItems({
  product,
  productCart,
}: RecomendedItemsProps) {
  const { isLoading } = useCartContext();

  return (
    <>
      <SectionTitle icon={<BagVector />} text="Outros Produtos" />
      {isLoading ? (
        <div className="pt-4 flex gap-3">
          {product?.map((item) => (
            <SkeletonRecomended key={item.id} />
          ))}
        </div>
      ) : (
        <div className="flex justify-between w-full gap-2 md:gap-4 pt-4">
          <div className="flex w-full gap-2 md:gap-4 pt-4">
            {product &&
              product?.length &&
              product.map((item) => {
                const productsInCart = productCart.filter(
                  (cartItem) => cartItem.isOnCart
                );
                const isItemInCart = productsInCart.some(
                  (cartItem) => cartItem.id === item.id
                );
                if (isItemInCart) {
                  return null;
                }

                return (
                  <RecomendedItemsCard
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
                );
              })}
          </div>
          <Budget className="hidden sm:flex sm:flex-col" />
        </div>
      )}
      <div className="sm:hidden">
        <Budget className="bg-gradient-to-l from-transparent to-dark w-full" />
      </div>
    </>
  );
}
