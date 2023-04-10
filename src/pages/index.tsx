import { Banner } from "@layout/banner/Banner";
import { ProductSlider } from "@layout/slider/productSlider";
import { ArrowButton } from "@util/buttons/ArrowButton";
import Link from "next/link";
import { Container } from "src/components/containers/Container";
import a from "../../public/banner-home.jpg";
import { productMocked } from "src/mock";

export default function Home() {
  return (
    <Container pageTitle="Pablo Studio 3D">
      <Link href="/actionfigures" className="z-10 absolute right-14 top-48">
        <ArrowButton />
      </Link>
      <Banner alt="a" img={a} />
      <ProductSlider data={productMocked} />
    </Container>
  );
}
