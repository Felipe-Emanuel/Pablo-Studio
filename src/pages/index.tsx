import { Banner } from "@layout/banner/Banner";
import { ProductSlider } from "@layout/slider/productSlider";
import { ArrowButton } from "@util/buttons/ArrowButton";
import Link from "next/link";
import { Container } from "src/components/containers/Container";
import a from "../../public/banner-home.jpg";

export default function Home() {
  const b = [
    {
      name: "projeto 1",
      image: "https://picsum.photos/seed/1/800/600",
      link: "/products/1",
      alt: "a",
      description: "alguma descrição muita boa 1 kkkk",
    },
    {
      name: "projeto 2",
      image: "https://picsum.photos/seed/2/800/600",
      link: "/products/2",
      alt: "a",
      description: "alguma descrição muita boa 2 kkkk",
    },
    {
      name: "projeto 3",
      image: "https://picsum.photos/seed/3/800/600",
      link: "/products/3",
      alt: "a",
      description: "alguma descrição muita boa 3 kkkk",
    },
    {
      name: "projeto 4",
      image: "https://picsum.photos/seed/4/800/600",
      link: "/products/4",
      alt: "a",
      description: "alguma descrição muita boa 4 kkkk",
    },
    {
      name: "projeto 5",
      image: "https://picsum.photos/seed/5/800/600",
      link: "/products/5",
      alt: "a",
      description: "alguma descrição muita boa 5 kkkk",
    },
  ];

  return (
    <Container >
      <Link href="/actionfigures" className="z-10 absolute right-5 top-10 md:top-48">
        <ArrowButton />
      </Link>
      <Banner alt="a" img={a} />
      <ProductSlider data={b} />
    </Container>
  );
}
