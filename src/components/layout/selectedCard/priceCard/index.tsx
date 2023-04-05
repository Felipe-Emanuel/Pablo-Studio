import { useState } from "react";
import { Logo } from "@util/assets/Logo";
import { Button } from "@util/buttons/Button";
import { Price } from "@util/texts/Price";
import { useCartContext } from "@hooks/useCartContext";
import { SelectedCardProps } from "..";

interface PriceCardProps {
  price: string | number;
  product: SelectedCardProps;
}

export function PriceCard({ price, product }: PriceCardProps) {
  const { addToCart } = useCartContext();
  const [isHover, setIsHover] = useState(false);

  const checkHovered = () => setIsHover((isHover) => !isHover);

  return (
    <div
      onMouseEnter={checkHovered}
      onMouseLeave={checkHovered}
      className="flex flex-col justify-center pt-4 gap-4 max-w-[30rem] h-24"
    >
      <div className="flex items-center">
        <Logo className="w-16 h-full" href="/about" />
        <Price price={price} className="text-md sm:text-lg" />
      </div>
      <Button
        onClick={() => addToCart(product)}
        text="Adicionar ao carrinho"
        cart
        isHovered={isHover}
      />
    </div>
  );
}
