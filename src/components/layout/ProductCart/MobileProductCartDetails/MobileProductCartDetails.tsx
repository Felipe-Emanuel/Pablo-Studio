import { useCartContext } from "@hooks/useCartContext";
import { DataType } from "@layout/slider/productSlider";
import { ArrowButton } from "@util/buttons/ArrowButton";
import { useState, useEffect } from "react";

interface MobileProductCartDetailsProps {
  product: DataType;
}

interface renderButtonsCountsProps {
  text: string;
  className?: string;
  onClick: (product: DataType) => void;
}

export function MobileProductCartDetails({
  product,
}: MobileProductCartDetailsProps) {
  const { state, removeFromCart, addToCount, removeToCount } = useCartContext();
  const [isVisible, setIsVisible] = useState(false);

  const i = state.cart.findIndex((item) => item.id === product.id);
  const counts = state.cart.map((item) => item.count);

  const changeRotate = () => setIsVisible((isVisible) => !isVisible);
  const checkRotate = isVisible ? "-rotate-90" : "rotate-90";
  const checkVisibility = isVisible ? "h-5" : "h-1";
  const checkVisibilityToHiddenElements = isVisible ? "flex" : "hidden";

  useEffect(() => {
    setIsVisible(false);
  }, []);

  function RenderButtonsCount({
    text,
    className,
    onClick,
  }: renderButtonsCountsProps) {
    return (
      <button onClick={() => onClick(product)} className={`${className}`}>
        {text}
      </button>
    );
  }

  return (
    <>
      <ArrowButton
        className={`flex md:hidden right-0 absolute top-2 h-4 ${checkRotate}`}
        onClick={changeRotate}
      />
      <div
        onClick={changeRotate}
        className={`
        flex md:hidden items-center gap-4 relative rounded-b-md -top-5
        text-xs md:text-md transition-all ${checkVisibility}
        w-full bg-tertiary left-0 overflow-hidden text-white
        `}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`gap-4 ${checkVisibilityToHiddenElements}`}
        >
          <div className="px-4">
            <RenderButtonsCount
              text="Excluir"
              className="font-bold"
              onClick={() => removeFromCart(product)}
            />
          </div>
          <div className="flex gap-4">
            <RenderButtonsCount
              text="Remover"
              onClick={() => removeToCount(product)}
            />
          </div>
          <span className="text-center">{counts[i]}</span>
          <RenderButtonsCount
            text="Adicionar"
            onClick={() => addToCount(product)}
          />
        </div>
      </div>
    </>
  );
}
