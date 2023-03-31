import { Container } from "@container/Container";
import { ResumeCart } from "@layout/ResumeCart";

export default function Cart() {


  return (
    <Container pageTitle="Pablo Studios 3D | Carrinho">
      <ResumeCart discount={0.15} totalProductsValue={750} freight={34.75} />
    </Container>
  );
}
