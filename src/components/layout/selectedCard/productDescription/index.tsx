import { CardDescComent } from "@layout/CardDescComent";

interface ProductDescriptionProps {
  description: string;
}

export function ProductDescription({
  description,
}: ProductDescriptionProps) {
  return (
    <div className="max-h-72 overflow-hidden">
      <CardDescComent
        productDescription
        titleSize="md"
        textSize="sm"
        title="Descrição do produto"
        text={description}
      />
    </div>
  );
}
