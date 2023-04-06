import { normalize } from "@functions/normalized";
import { useCartContext } from "@hooks/useCartContext";
import { DataType } from "@layout/slider/productSlider";
import { Text } from "@util/texts/Text";
import { TrashVector } from "@vectores/Vectores";
import { LeftArrowIcon, RightArrowIcon } from "src/icons";

interface ProductCartDetailsProps {
  product: DataType;
}

export function ProductCartDetails({ product }: ProductCartDetailsProps) {
  const { formatPrice } = normalize();
  const { state, removeFromCart, addToCount, removeToCount } =
    useCartContext();

  const i = state.cart.findIndex((item) => item.id === product.id);

  const counts = state.cart.map((item) => item.count);
  const productPrice = state.cart.map((item) => item.productPrice)

  const checkHover =
    counts[i] <= 1 ? "hover:text-danger" : " hover:text-secondary";

  return (
    <div className="flex flex-col justify-between w-fit h-full py-8 gap-3">
      <span className="flex flex-col items-end">
        <Text light text="Preço à vista no PIX" className="text-end" />
        <p className="font-bold text-secondary text-end">
          {formatPrice(productPrice[i])}
        </p>
      </span>
      <div className="flex flex-col items-center justify-center gap-3">
        <Text text="Quantidade" light />
        <div className="relative w-full items-center justify-center">
          <LeftArrowIcon
            onClick={() => removeToCount(product)}
            className={`
              absolute transition-all cursor-pointer left-0
              w-5 h-7 text-white ${checkHover}`}
          />
          <RightArrowIcon
            onClick={() => addToCount(product)}
            className={`
              absolute transition-all cursor-pointer right-0
              w-5 h-7 text-white hover:text-secondary`}
          />
          <Text text={counts[i]} className="text-center" />
        </div>
        <button
            onClick={() =>  removeFromCart(product)}
          className="flex gap-1.5 items-center justify-center transition-all hover:opacity-75"
        >
          <TrashVector />
          <p className="font-bold text-danger">Remover</p>
        </button>
      </div>
    </div>
  );
}
