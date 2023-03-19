import { useWindow } from "@hooks/useWindow";
import { ReactNode } from "react";
import { Text } from "./Text";

interface HeaderInfoProps {
  text?: string;
  icon?: ReactNode;
  qtd?: number;
  date?: string;
}

export function HeaderInfo({ text, icon, qtd, date }: HeaderInfoProps) {
  const { width } = useWindow()

  const checkSizePerWidth = width < 500 ? 'xs' : 'sm';

  return (
    <div className="flex items-center gap-4">
      {text ? <Text text={text} /> : <Text as="span" text={icon} />}
      <Text light className="opacity-75" text="|" />
      {qtd ? (
        <Text light className="opacity-75" text={qtd} />
      ) : (
        <Text light as="span" size={checkSizePerWidth} className="opacity-75" text={date} />
      )}
    </div>
  );
}
