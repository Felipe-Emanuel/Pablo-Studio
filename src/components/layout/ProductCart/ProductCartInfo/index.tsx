import { useCartContext } from "@hooks/useCartContext";
import { Price } from "@util/texts/Price";
import { Text } from "@util/texts/Text";
import { Title } from "@util/texts/Title";

interface ProductCartInfoProps {
  productName: string;
  productDescription: string;
  moneyToBeSaved: number;
  totalOnCredit: number;
}

export function ProductCartInfo({
  productName,
  productDescription,
  totalOnCredit,
}: ProductCartInfoProps) {
  const { moneyToBeSaved } = useCartContext()

  return (
    <div className="w-full max-w-2xl justify-between flex flex-col h-full py-8 gap-3">
      <Title light title={productName} />
      <Text bold text={productDescription} />
      <div>
        <span className="flex">
          <Price
            text="Pague com pix e economize até 15%:"
            price={moneyToBeSaved}
          />
        </span>
        <span className="flex">
          <Price
            text="Parcele sua compra em até 10x com segurança pelo Mercado Pago:"
            price={totalOnCredit}
          />
        </span>
      </div>
    </div>
  );
}
