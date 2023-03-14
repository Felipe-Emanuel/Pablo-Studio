import { CartAnimation } from "@animations/cart/CartAnimation";

type ButtonProps = {
  text: string;
  cart?: boolean;
};

export function Button({ text, cart }: ButtonProps) {
  return (
    <button
      className="
      flex items-center justify-center gap-4
      transition-colors rounded w-full py-4
      text-white hover:text-white/75 hover:bg-secondary/75 bg-secondary"
    >
      {cart && <CartAnimation />}
      {text}
    </button>
  );
}
