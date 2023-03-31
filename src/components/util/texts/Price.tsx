import { Text } from "./Text";

interface PriceProps {
  price: string;
  text?: string;
}

export function Price({ text, price }: PriceProps) {
  return (
    <div className="flex items-center justify-between">
      {text && (
        <Text as="span" light text={text} className="text-md sm:text-lg" />
      )}
      <div className="flex gap-1.5 items-center ">
        <Text as="span" bold text="R$" className="text-md sm:text-lg" />
        <Text as="span" bold text={price} className="text-md sm:text-lg" />
      </div>
    </div>
  );
}
