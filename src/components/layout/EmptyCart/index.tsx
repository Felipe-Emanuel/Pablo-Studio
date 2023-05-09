import { Product } from "@models/Product";
import { RecentlyAdded } from "./RecentlyAdded";
import { EmptyCartTitle } from "./EmptyCartTitle";
import { RecentlySeen } from "./RecentlySeen";
import { useCartContext } from "@hooks/useCartContext";
import { LineLoading } from "@animations/lineLoading/LineLoading";
import { SkeletonRecomended } from "src/components/skeletons/SkeletonRecomended";
import { DocumentData } from "firebase/firestore";
import { RecomendedItems } from "@layout/RecomendedItems";
import { User } from "@models/User";
import { SkeletonLoadingArray } from "@util/assets/SkeletonLoadingArray";

interface EmptyCartProps {
  products: Product[];
  recentlySeen: DocumentData[] | Product[];
  preference: DocumentData[] | User[]
}

export function EmptyCart({ products, recentlySeen, preference }: EmptyCartProps) {
  const { isLoading } = useCartContext();



  return (
    <>
      {isLoading && <LineLoading />}
      <EmptyCartTitle />
      <div className="flex flex-col gap-4">
        <RecentlySeen recentlySeen={recentlySeen} />
        {products?.length > 0 ? (
          <RecentlyAdded products={products} />
        ) : (
          <SkeletonLoadingArray />
        )}
        {preference &&
          <RecomendedItems preference={preference} product={products} />
        }
      </div>
    </>
  );
}
