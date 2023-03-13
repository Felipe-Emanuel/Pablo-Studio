import { Text } from "./Text";

interface PriceProps {
  price: string;
}

export function Price({ price }: PriceProps) {
  return (
    <div className="flex items-center gap-1.5">
      <Text as="span" size="lg" light text="R$" />
      <Text as="span" size="lg" light text={price} />
    </div>
  );
}
