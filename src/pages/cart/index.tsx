import { Container } from "@container/Container";
import { Price } from "@util/texts/Price";

export default function Cart() {
  return (
    <Container pageTitle="Pablo Studios 3D | Carrinho">
      <Price text="Valor dos produtos" price="328,75" />
      <hr className="border border-white" />
      <Price text="Total à prazo" price="450,00" />
      <Price text="Frete" price="20,00" />
    </Container>
  );
}
