import { CartVector } from "@vectores/Vectores";
import Link from "next/link";

export function CartButton() {
  return (
    <Link href="/cart" className="w-fit z-20">
      <CartVector />
    </Link>
  );
}
