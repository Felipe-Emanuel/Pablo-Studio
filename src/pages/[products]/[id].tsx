import { SelectedCard } from "@layout/selectedCard";
import { Container } from "src/components/containers/Container";

export default function Product() {
  const images = [
    "https://picsum.photos/seed/1/800/600",
    "https://picsum.photos/seed/2/800/600",
    "https://picsum.photos/seed/3/800/600",
    "https://picsum.photos/seed/4/800/600",
    "https://picsum.photos/seed/5/800/600",
  ];

  return (
    <Container>
      <SelectedCard
        images={images}
        productName="Nome do Produto"
        productDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        productViews={3560}
        productPrice="125,00"
        productQtd={15}
      />
    </Container>
  );
}
