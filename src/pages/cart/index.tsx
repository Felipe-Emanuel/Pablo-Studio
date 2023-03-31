import { Container } from "@container/Container";
import { SectionTitle } from "@util/texts/SectionTitle";
import { BagVector } from "@vectores/Vectores";

export default function Cart() {
  return (
    <Container pageTitle="Pablo Studios 3D | Carrinho">
      <SectionTitle icon={<BagVector />} text="Outros Produtos" />
    </Container>
  );
}
