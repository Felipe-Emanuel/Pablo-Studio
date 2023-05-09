import { useState, useEffect } from "react";
import { Logo } from "@util/assets/Logo";
import { Button } from "@util/buttons/Button";
import { Price } from "@util/texts/Price";
import { useCartContext } from "@hooks/useCartContext";
import { Product } from "@models/Product";
import { addUser } from "@database/clientData";
import { parseCookies } from "nookies";

interface PriceCardProps {
  price: string | number;
  product: Product;
}

export function PriceCard({ price, product}: PriceCardProps) {
  const { addToCart } = useCartContext();
  const [isHover, setIsHover] = useState(false);
  const [guestId, setGuestId] = useState('');

  const checkHovered = () => setIsHover((isHover) => !isHover);

  useEffect(() => {
    const cookies = parseCookies()
    setGuestId(cookies._guest)
  }, [])

  const handleClick = () => {
    addToCart(product, guestId)
    addUser(product)
  }

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
        onClick={handleClick}
        isPrimary
        text="Adicionar ao carrinho"
        cart
        isHovered={isHover}
      />
    </div>
  );
}
