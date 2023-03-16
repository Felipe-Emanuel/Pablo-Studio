import { HeaderInfo } from "@util/texts/HeaderInfo";

interface StockProps {
  qtd: number;
}

export function Stock({ qtd }: StockProps) {
  return <HeaderInfo text="Estoque" qtd={qtd} />;
}
