import { ReactNode } from "react";
import { Text } from "./Text";

interface HeaderInfoProps {
  text?: string;
  icon?: ReactNode;
  qtd?: number;
  date?: string;
}

export function HeaderInfo({ text, icon, qtd, date }: HeaderInfoProps) {
  return (
    <div className="flex items-center gap-4">
      {text ? <Text text={text} /> : <Text as="span" text={icon} />}
      <Text light className="opacity-75" text="|" />
      {qtd ? (
        <Text light className="opacity-75" text={qtd} />
      ) : (
        <Text light as="span" className="opacity-75" text={date} />
      )}
    </div>
  );
}
