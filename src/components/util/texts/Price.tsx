import { Text } from "./Text";
import { ReactNode } from "react";

interface PriceProps {
  price: ReactNode;
  text?: ReactNode;
  className?: string;
}

export function Price({ text, price,className }: PriceProps) {
  return (
    <div className="flex items-center justify-between">
      {text && (
        <Text as="span" light text={text} />
      )}
      <div className="flex gap-1.5 items-center ">
        <Text as="span" bold text="R$" className={className}/>
        <Text as="span" bold text={price} className={className}/>
      </div>
    </div>
  );
}
