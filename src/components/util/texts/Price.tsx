import { Text } from "./Text";

interface PriceProps {
  price: string;
}

export function Price({ price }: PriceProps) {

  return (
    <div className="flex items-center gap-1.5">
      <Text as="span" light text="R$" className="text-md sm:text-lg" />
      <Text as="span" light text={price} className="text-md sm:text-lg" />
    </div>
  );
}
