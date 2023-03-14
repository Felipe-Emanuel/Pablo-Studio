import { CartVector } from "@vectores/Vectores";
import Link from "next/link";

export function CartButton() {
  return (
    <Link href='/cart'>
      <CartVector />
    </Link>
  )
}
