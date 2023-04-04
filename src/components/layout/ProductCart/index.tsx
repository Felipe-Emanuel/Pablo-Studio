import { useCartContext } from "@hooks/useCartContext";
import { ProductCartImage } from "./ProductCartImage";
import { ProductCartInfo } from "./ProductCartInfo.tsx";

interface ProductCartProps {
  image: string;
  productName: string;
  productDescription: string;
}

export function ProductCart({
  image,
  productName,
  productDescription,
}: ProductCartProps) {
  const { moneyToBeSaved, totalOnCredit } = useCartContext();

  return (
    <div className="p-3 rounded-md bg-placeholder flex w-full h-fit justify-between items-center">
      <div className="flex gap-3">
        <ProductCartImage src={image} alt={productName} />
        <ProductCartInfo
          productName={productName}
          productDescription={productDescription}
          moneyToBeSaved={moneyToBeSaved}
          totalOnCredit={totalOnCredit}
        />
      </div>
      <div></div>
    </div>
  );
}
