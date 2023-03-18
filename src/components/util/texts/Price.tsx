import { useWindow } from "@hooks/useWindow";
import { Text } from "./Text";

interface PriceProps {
  price: string;
}

export function Price({ price }: PriceProps) {
  const { width } = useWindow()

  const checkSizePerWidth = width < 500 ? 'md' : 'lg'

  return (
    <div className="flex items-center gap-1.5">
      <Text as="span" size={checkSizePerWidth} light text="R$" />
      <Text as="span" size={checkSizePerWidth} light text={price} />
    </div>
  );
}
