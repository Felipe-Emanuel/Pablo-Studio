import { normalize } from "@functions/normalized";
import { useCartContext } from "@hooks/useCartContext";
import { SelectedCardProps } from "@layout/selectedCard";
import { Text } from "@util/texts/Text";
import { TrashVector } from "@vectores/Vectores";
import { LeftArrowIcon, RightArrowIcon } from "src/icons";

export type PayloadDetailsType = {
  count: number;
  id: string | string[] | undefined;
  images: [];
  productName: string;
  productDescription: string;
  productPrice: string;
  productViews: number;
  productQtd: number;
};

interface ProductCartDetailsProps {
  product: SelectedCardProps;
}

export function ProductCartDetails({ product }: ProductCartDetailsProps) {
  const { formatPrice } = normalize();
  const { state, totalWithPix, removeFromCart, addToCount, removeToCount } =
    useCartContext();

  const i = state.cart.findIndex((item) => item.id === product.id);

  const counts = state.cart.map((item) => item.count);

  const payloadDetails: PayloadDetailsType = {
    count: counts[i],
    id: product.id,
    images: [],
    productName: "",
    productDescription: "",
    productPrice: "",
    productViews: 0,
    productQtd: 0,
  };

  const checkHover =
    counts[i] <= 1 ? "hover:text-danger" : " hover:text-secondary";

  return (
    <div className="flex flex-col justify-between w-fit h-full py-8 gap-3">
      <span className="flex flex-col items-end">
        <Text light text="Preço à vista no PIX" className="text-end" />
        <p className="font-bold text-secondary text-end">
          {formatPrice(totalWithPix)}
        </p>
      </span>
      <div className="flex flex-col items-center justify-center gap-3">
        <Text text="Quantidade" light />
        <div className="relative w-full items-center justify-center">
          <LeftArrowIcon
            onClick={() => removeToCount(payloadDetails)}
            className={`
              absolute transition-all cursor-pointer left-0
              w-5 h-7 text-white ${checkHover}`}
          />
          <RightArrowIcon
            onClick={() => addToCount(payloadDetails)}
            className={`
              absolute transition-all cursor-pointer right-0
              w-5 h-7 text-white hover:text-secondary`}
          />
          <Text text={counts[i]} className="text-center" />
        </div>
        <button
          onClick={() => removeFromCart(product)}
          className="flex gap-1.5 items-center justify-center transition-all hover:opacity-75"
        >
          <TrashVector />
          <p className="font-bold text-danger">Remover</p>
        </button>
      </div>
    </div>
  );
}
