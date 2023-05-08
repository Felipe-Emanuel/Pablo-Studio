import { Product } from "@models/Product";
import { RecentlyAdded } from "./RecentlyAdded";
import { EmptyCartTitle } from "./EmptyCartTitle";
import { RecentlySeen } from "./RecentlySeen";
import { useCartContext } from "@hooks/useCartContext";
import { LineLoading } from "@animations/lineLoading/LineLoading";
import { SkeletonRecomended } from "src/components/skeletons/SkeletonRecomended";
import { DocumentData } from "firebase/firestore";

interface EmptyCartProps {
  products: Product[];
  recentlySeen: DocumentData[] | Product[];
}

export function EmptyCart({ products, recentlySeen }: EmptyCartProps) {
  const { isLoading } = useCartContext();

  const skeletonArray = Array.from({ length: 4 }, () => <SkeletonRecomended />);
  const skeletonLoading = skeletonArray.map((skeleton, i) => (
    <div key={i}>{skeleton}</div>
  ));

  const skeletonStyle =
    "flex flex-wrap h-48 md:h-[440px] gap-1 md:gap-2 overflow-hidden";
  const skeletonDiv = <div className={skeletonStyle}>{skeletonLoading}</div>;

  return (
    <>
      {isLoading && <LineLoading />}
      <EmptyCartTitle />
      <div className="flex flex-col gap-4">
        {products?.length > 0 ? (
          <RecentlyAdded products={products} />
        ) : (
          skeletonDiv
        )}
        <RecentlySeen recentlySeen={recentlySeen} />
      </div>
    </>
  );
}
