import { Section } from "@container/section";
import { Comments } from "@layout/Comments";
import { SelectedCard } from "@layout/selectedCard";
import { useRouter } from "next/router";
import { Container } from "src/components/containers/Container";
import { productMocked } from "src/mock";

export default function Product() {
  const router = useRouter();
  const productId = router.query.id;

  return (
    <Container style pageTitle="Pablo Studio 3D | Nome do Produto">
      <SelectedCard product={productMocked} />
      <Section>
        {productId && <Comments data={productMocked[+productId!].comments} />}
      </Section>
    </Container>
  );
}
