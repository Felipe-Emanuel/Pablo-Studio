import { useCartContext } from "@hooks/useCartContext";
import { ProductCartImage } from "./ProductCartImage";
import { ProductCartInfo } from "./ProductCartInfo";
import { ProductCartDetails } from "./ProductCartDetails/ProductCartDetails";
import { DataType } from "@layout/slider/productSlider";

interface ProductCartProps {
  image: string;
  productName: string;
  productDescription: string;
  product: DataType;
}

export function ProductCart({
  image,
  productName,
  productDescription,
  product,
}: ProductCartProps) {
  const { state, freight, discount } = useCartContext();

  const index = state.cart.findIndex((c) => c.id === product.id);
  const productPrice = state.cart[index].productPrice;

  const totalOnCredit = productPrice + freight + productPrice * discount;

  const moneyToBeSaved = productPrice * discount;

  console.log(index);

  return (
    <div className="p-3 rounded-md mb-4 bg-placeholder flex w-full h-fit justify-between items-center">
      <div className="flex gap-3">
        <ProductCartImage src={image} alt={productName} />
        <ProductCartInfo
          productPrice={state.cart[index].initialPrice}
          productName={productName}
          productDescription={productDescription}
          moneyToBeSaved={moneyToBeSaved}
          totalOnCredit={totalOnCredit}
        />
      </div>
      <div>
        <ProductCartDetails product={product} />
      </div>
    </div>
  );
}
