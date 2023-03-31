import { CartVector } from "@vectores/Vectores";
import Link from "next/link";

export function CartButton() {
  return (
    <Link href='/cart' className="w-fit z-20 hover:scale-110 transition-transform duration-300">
      <CartVector />
    </Link>
  )
}
