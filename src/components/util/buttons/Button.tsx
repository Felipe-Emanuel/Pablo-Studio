import { CartAnimation } from "@animations/cart/CartAnimation";

type ButtonProps = {
  text: string;
  className?: string;
  cart?: boolean;
  isHovered?: boolean;
  isTertiary?: boolean;
  href?: string
  onClick?: (href: string) => void;
};

export function Button({
  text,
  className,
  cart,
  isHovered,
  isTertiary,
  href,
  onClick
}: ButtonProps) {
  const tertiary =
    isTertiary &&
    "bg-transparent border-2 border-tertiary text-tertiary hover:bg-tertiary/75";

  return (
    <button
      onClick={onClick && (() => onClick(href!))}
      className={`
      text-sm md:text-md
      flex items-center justify-center gap-4
      transition-colors rounded w-full py-4
      text-white hover:text-white/75 hover:bg-secondary/75 bg-secondary
      ${tertiary}
      ${className}`}
    >
      {cart && <CartAnimation hovered={isHovered} />}
      {text}
    </button>
  );
}
