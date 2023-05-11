import { Product } from "@models/Product";
import { RecentlyAdded } from "./RecentlyAdded";
import { EmptyCartTitle } from "./EmptyCartTitle";
import { RecentlySeen } from "./RecentlySeen";
import { useCartContext } from "@hooks/useCartContext";
import { LineLoading } from "@animations/lineLoading/LineLoading";
import { DocumentData } from "firebase/firestore";
import { MostViwed } from "@layout/RecommendedItems/MostViwed";
import { User } from "@models/User";
import { SkeletonLoadingArray } from "@util/assets/SkeletonLoadingArray";
import { RecommendedItems } from "@layout/RecommendedItems";

interface EmptyCartProps {
  products: Product[];
  recentlySeen: DocumentData[] | Product[];
  preference: DocumentData[] | User[];
}

export function EmptyCart({
  products,
  recentlySeen,
  preference,
}: EmptyCartProps) {
  const { isLoading } = useCartContext();

  return (
    <>
      {isLoading && <LineLoading />}
      <EmptyCartTitle />
      <div className="flex flex-col gap-4">
        <RecentlySeen productCart={[]} recentlySeen={recentlySeen} />
        {preference && (
          <>
            <RecommendedItems productCart={[]} preference={preference} />
            <MostViwed productCart={[]} preference={preference} product={products} />
          </>
        )}
        {products?.length > 0 ? (
          <RecentlyAdded products={products} />
        ) : (
          <SkeletonLoadingArray />
        )}
      </div>
    </>
  );
}
