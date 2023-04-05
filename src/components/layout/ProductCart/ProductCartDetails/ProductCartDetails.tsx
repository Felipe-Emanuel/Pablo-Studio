import { useCartContext } from "@hooks/useCartContext";
import { SelectedCardProps } from "@layout/selectedCard";
import { Price } from "@util/texts/Price";
import { Text } from "@util/texts/Text";
import { TrashVector } from "@vectores/Vectores";
import { useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "src/icons";

interface ProductCartDetailsProps {
  product: SelectedCardProps
}

export function ProductCartDetails({product}: ProductCartDetailsProps) {
  const { totalWithPix, removeFromCart } = useCartContext();
  const [qtd, setQtd] = useState(0);

  const addQtd = () => setQtd((qtd) => qtd + 1);
  const removeQtd = () => setQtd((qtd) => qtd - 1);

  const checkQtd =
    qtd <= 0
      ? "opacity-50 pointer-events-none"
      : "opacity-100 pointer-events-auto";

  return (
    <div className="flex flex-col justify-between w-fit h-full py-8 gap-3">
      <span className="flex flex-col items-end">
        <Text light text="Preço à vista no PIX" className="text-end" />
        <Price price={totalWithPix} className="text-secondary" />
      </span>
      <div className="flex flex-col items-center justify-center gap-3">
        <Text text="Quantidade" light />
        <div className="relative w-full items-center justify-center">
          <LeftArrowIcon
            onClick={removeQtd}
            className={`absolute transition-all cursor-pointer left-0 w-5 h-7 text-white hover:text-secondary ${checkQtd}`}
          />
          <RightArrowIcon
            onClick={addQtd}
            className={`absolute transition-all cursor-pointer right-0 w-5 h-7 text-white hover:text-secondary`}
          />
          <Text text={qtd} className="text-center" />
        </div>
        <button onClick={() => removeFromCart(product)} className="flex gap-1.5 items-center justify-center transition-all hover:opacity-75">
          <TrashVector />
          <Text bold text="Remover" className="text-[#C03131]" />
        </button>
      </div>
    </div>
  );
}
