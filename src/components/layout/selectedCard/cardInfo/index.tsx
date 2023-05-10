import { HeartButton } from "@animations/heart/HeartButton";
import { Product } from "@models/Product";
import { HeaderInfo } from "@util/texts/HeaderInfo";
import { ViewVector } from "@vectores/Vectores";
import { parseCookies } from "nookies";

interface CardInfoProps {
  views: number;
  product: Product
}

export function CardInfo({ views, product }: CardInfoProps) {
  const cookies = parseCookies()
  const guestId = cookies._guest

  return (
    <div className="relative -left-4 flex items-center w-fit">
      <HeartButton guestId={guestId} product={product} />
      <HeaderInfo icon={<ViewVector />} qtd={views} />
    </div>
  );
}
