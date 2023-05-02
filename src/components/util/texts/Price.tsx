import { normalize } from "@functions/normalized";
import { Text } from "./Text";
import { ReactNode } from "react";

interface PriceProps {
  price: string | number | undefined;
  text?: ReactNode;
  className?: string;
}

export function Price({ text, price, className }: PriceProps) {
  const { formatPrice } = normalize()

  return (
    <div className="flex items-center justify-between">
      {text && (
        <Text as="span" light text={text} className="text-sm sm:text-md mr-1.5"/>
      )}
      <div className="flex gap-1.5 items-center ">
        <Text as="span" bold text={formatPrice(price)} className={className}/>
      </div>
    </div>
  );
}
