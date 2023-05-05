import { CartAnimation } from "@animations/cart/CartAnimation";
import { TrashVector } from "@vectores/Vectores";
import { useState } from "react";

type ButtonProps = {
  text: string;
  className?: string;
  cart?: boolean;
  isHovered?: boolean;
  isPrimary?: boolean;
  isTertiary?: boolean;
  isDanger?: boolean;
  disabled?: boolean;
  recently?: boolean;
  href?: string
  onClick?: (href: string) => void;
};

export function Button({
  text,
  className,
  cart,
  isHovered,
  isPrimary,
  isTertiary,
  isDanger,
  disabled,
  recently,
  href,
  onClick
}: ButtonProps) {
  const [isHover, setIsHover] = useState(false)

  const primary =
    isPrimary &&
    "hover:bg-secondary/75 bg-secondary disabled:bg-secondary/75 disabled:text-white/75"

  const tertiary =
    isTertiary &&
    "bg-transparent border-2 border-tertiary text-tertiary hover:bg-tertiary/75";

  const danger =
    isDanger &&
    "bg-transparent border-2 border-danger hover:text-white hover:bg-danger";

  const changeHover = () => setIsHover(isHover => !isHover)

  return (
    <button
      onMouseEnter={changeHover}
      onMouseLeave={changeHover}
      disabled={disabled}
      onClick={onClick && (() => onClick(href!))}
      className={`
      text-xs md:text-md
      flex items-center justify-center gap-4
      transition-colors rounded w-full ${recently ? 'p-2' : 'p-2 md:py-4'}
      text-white hover:text-white/75
      ${primary}
      ${tertiary}
      ${danger}
      ${className}`}
    >
      {cart && <CartAnimation hovered={isHovered} />}
      {isDanger && <TrashVector isHovered={isHover} />}
      {text}
    </button>
  );
}
