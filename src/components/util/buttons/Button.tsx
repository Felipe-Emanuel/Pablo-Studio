import { CartAnimation } from "@animations/cart/CartAnimation";

type ButtonProps = {
  text: string;
  cart?: boolean;
  isHovered?: boolean;
};

export function Button({ text, cart, isHovered }: ButtonProps) {
  return (
    <button
      className="
      text-sm md:text-md
      flex items-center justify-center gap-4
      transition-colors rounded w-full py-4
      text-white hover:text-white/75 hover:bg-secondary/75 bg-secondary"
    >
      {cart && <CartAnimation hovered={isHovered}/>}
      {text}
    </button>
  );
}
