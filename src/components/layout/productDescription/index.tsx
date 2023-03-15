import { CardDescComent } from "@layout/CardDescComent";

interface ProductDescriptionProps {
  productName: string;
  description: string;
}

export function ProductDescription({
  productName,
  description,
}: ProductDescriptionProps) {
  return (
    <div className="max-h-72 overflow-hidden">
      <CardDescComent
        productDescription
        titleSize="md"
        textSize="sm"
        title={productName}
        text={description}
      />
    </div>
  );
}
