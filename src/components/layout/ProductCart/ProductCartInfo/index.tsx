import { Price } from "@util/texts/Price";
import { Text } from "@util/texts/Text";
import { Title } from "@util/texts/Title";

interface ProductCartInfoProps {
  productName: string;
  productPrice: number;
  productDescription: string;
  totalOnCredit: number;
  moneyToBeSaved: number;
}

export function ProductCartInfo({
  productName,
  productPrice,
  productDescription,
  totalOnCredit,
  moneyToBeSaved
}: ProductCartInfoProps) {

  return (
    <div className="w-full max-w-2xl justify-between flex flex-col h-full py-8 gap-3">
      <Title light title={productName} />
      <Price price={productPrice} />
      <Text bold text={productDescription} />
      <div>
        <span className="flex">
          <Price
            text="Pague com pix e economize até:"
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
