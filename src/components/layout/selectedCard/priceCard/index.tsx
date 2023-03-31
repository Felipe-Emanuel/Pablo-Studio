import { useState } from "react";
import { Logo } from "@util/assets/Logo";
import { Button } from "@util/buttons/Button";
import { Price } from "@util/texts/Price";
import Link from "next/link";

interface PriceCardProps {
  price: string;
}

export function PriceCard({ price }: PriceCardProps) {
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
        <Price price={price} />
      </div>
      <Button text="Adicionar ao carrinho" cart isHovered={isHover} />
    </div>
  );
}
