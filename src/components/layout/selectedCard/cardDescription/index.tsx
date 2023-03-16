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
    <div className="max-h-72 overflow-hidden">
      <CardDescComent
        titleSize="xl"
        textSize="md"
        title={cardName}
        text={description}
      />
    </div>
  );
}
