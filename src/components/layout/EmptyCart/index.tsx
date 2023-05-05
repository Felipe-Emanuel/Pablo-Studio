import { Product } from "@models/Product";
import { RecentlyAdded } from "./RecentlyAdded";
import { Flex } from "@container/Flex";
import { EmptyCartTitle } from "./EmptyCartTitle";
import { Budget } from "@layout/Budget";

interface EmptyCartProps {
  product: Product[];
}

export function EmptyCart({ product }: EmptyCartProps) {
  return (
    <>
      <Flex className="gap-3 justify-between flex md:flex-row">
        <EmptyCartTitle />
        <div className="m-auto flex justify-between gap-3">
          <RecentlyAdded product={product} />
          <Budget className="hidden min-[500px]:flex md:hidden xl:hidden" />
        </div>
      </Flex>
    </>
  );
}
