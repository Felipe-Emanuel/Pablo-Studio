import { CardDescComent } from "../CardDescComent";

interface CardDescriptionProps {
  cardName: string;
  description: string;
  homeDescription?: boolean;
}

export function CardDescription({
  cardName,
  description,
  homeDescription
}: CardDescriptionProps) {
  return (
    <div className="h-fit overflow-hidden z-20">
      <CardDescComent TitleSize={homeDescription ? 'text-xl' : 'text-xs sm:text-sm md:text-xl'} title={cardName} text={description} />
    </div>
  );
}
