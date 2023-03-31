import { Container } from "@container/Container";
import { Price } from "@util/texts/Price";
import { PricePixContent } from "@util/texts/PricePixContent";
import { normalize } from "@functions/normalized";

export default function Cart() {
  const { formatPrice } = normalize();
  const discount = 0.1;
  const totalProductsValue = 750.0;
  const freight = 75.0;
  const totalOnCredit = totalProductsValue + freight;
  const totalWithPix = totalOnCredit - totalProductsValue * discount;

  return (
    <Container pageTitle="Pablo Studios 3D | Carrinho">
      <Price
        text="Valor dos produtos"
        price={formatPrice(totalProductsValue)}
      />
      <hr className="border border-white" />
      <Price text="freight" price={formatPrice(freight)} />
      <Price text="Total à prazo" price={formatPrice(totalOnCredit)} />
      <PricePixContent
        totalWithPix={totalWithPix}
        totalOnCredit={totalOnCredit}
      />
    </Container>
  );
}
