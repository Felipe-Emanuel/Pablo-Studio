import { HeartButton } from "@animations/heart/HeartButton";
import { HeaderInfo } from "@util/texts/HeaderInfo";
import { EyeVector } from "@vectores/Vectores";

interface CardInfoProps {
  views: number;
}

export function CardInfo({ views }: CardInfoProps) {
  return (
    <div className="relative -left-4 flex items-center w-fit">
      <HeartButton />
      <HeaderInfo icon={<EyeVector />} qtd={views} />
    </div>
  );
}
