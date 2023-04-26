import { normalize } from "@functions/normalized";
import { useCartContext } from "@hooks/useCartContext";
import { Product } from "@models/Product";
import { Text } from "@util/texts/Text";
import { TrashVector } from "@vectores/Vectores";
import { DocumentData } from "firebase/firestore";
import { LeftArrowIcon, RightArrowIcon } from "src/icons";

interface ProductCartDetailsProps {
  product: DocumentData & Product;
  cookieUser: string;
}

export function ProductCartDetails({ product, cookieUser }: ProductCartDetailsProps) {
  const { formatPrice } = normalize();
  const { discount, removeFromCart, addToCount, removeToCount, FnsetProductName, FnsetProductId } =
    useCartContext();

  const checkHover =
    product.count <= 1 ? "hover:text-danger" : "hover:text-secondary";

  const productPrice = product.productPrice - product.productPrice * discount;

  return (
    <div className="hidden md:flex flex-col justify-between w-fit h-full md:py-4 lg:py-8 gap-3 relative -right-4">
      <span className="flex flex-col items-end relative right-6">
        <Text light text="Preço à vista no PIX" className="text-end" />
        <p className="font-bold text-secondary text-end">
          {formatPrice(productPrice)}
        </p>
      </span>
      <div className="flex flex-col items-center justify-center gap-3">
        <Text text="Quantidade" light />
        <div className="relative w-full items-center justify-center">
          <LeftArrowIcon
            onClick={() => {
              FnsetProductName(product.productName)
              FnsetProductId(product.id)
              removeToCount(product, cookieUser);
            }}
            className={`
              absolute transition-all cursor-pointer left-4
              w-5 h-7 text-white ${checkHover}`}
          />
          <RightArrowIcon
            onClick={() => {
              addToCount(product, cookieUser);
            }}
            className={`
              absolute transition-all cursor-pointer right-4
              w-5 h-7 text-white hover:text-secondary`}
          />
          <Text text={product.count} className="text-center" />
        </div>
        <button
          onClick={() => {
            //@ts-ignore
            removeFromCart(product);
          }}
          className="flex gap-1.5 items-center justify-center transition-all hover:opacity-75"
        >
          <TrashVector />
          <p className="font-bold text-danger">Remover</p>
        </button>
      </div>
    </div>
  );
}
