import { Product } from "@models/Product";
import { RecentlyAdded } from "./RecentlyAdded";
import { EmptyCartTitle } from "./EmptyCartTitle";
import { RecentlySeen } from "./RecentlySeen";
import { useCartContext } from "@hooks/useCartContext";
import { LineLoading } from "@animations/lineLoading/LineLoading";

interface EmptyCartProps {
  product: Product[];
  recentlySeen: Product[];
}

export function EmptyCart({ product, recentlySeen }: EmptyCartProps) {
  const { isLoading } = useCartContext()

  return (
    <>
     {isLoading && <LineLoading />}
      <EmptyCartTitle />
      <div className="flex flex-col gap-4">
        <RecentlyAdded product={product} />
        <RecentlySeen recentlySeen={recentlySeen} />
      </div>
    </>
  );
}
