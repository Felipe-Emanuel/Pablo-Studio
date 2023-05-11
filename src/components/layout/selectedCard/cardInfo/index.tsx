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

  return (
    <div className="relative -left-4 flex items-center w-fit">
      <HeartButton product={product} />
      <HeaderInfo icon={<ViewVector />} qtd={views} />
    </div>
  );
}
