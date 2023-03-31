import { CardDescComent } from "../CardDescComent";

interface CardDescriptionProps {
  cardName: string;
  description: string;
}

export function CardDescription({
  cardName,
  description,
}: CardDescriptionProps) {
  return (
    <div className="h-full md:max-h-72 overflow-hidden z-20">
      <CardDescComent TitleSize="text-xl" title={cardName} text={description} />
    </div>
  );
}
