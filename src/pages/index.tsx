import { Banner } from "@layout/banner/Banner";
import { ProductSlider } from "@layout/slider/productSlider";
import { ArrowButton } from "@util/buttons/ArrowButton";
import Link from "next/link";
import { Container } from "src/components/containers/Container";
import a from "../../public/banner-home.jpg";

//PRODUCT MOCKED
let id = 0;

export default function Home() {
  const b = [
    {
      id: id++,
      count: 0,
      name: "projeto 1",
      image: "https://picsum.photos/seed/1/800/600",
      link: "/products/1",
      alt: "a",
      description: "alguma descrição muita boa 1 kkkk",
    },
    {
      id: id++,
      count: 0,
      name: "projeto 2",
      image: "https://picsum.photos/seed/2/800/600",
      link: "/products/2",
      alt: "a",
      description: "alguma descrição muita boa 2 kkkk",
    },
    {
      id: id++,
      count: 0,
      name: "projeto 3",
      image: "https://picsum.photos/seed/3/800/600",
      link: "/products/3",
      alt: "a",
      description: "alguma descrição muita boa 3 kkkk",
    },
    {
      id: id++,
      count: 0,
      name: "projeto 4",
      image: "https://picsum.photos/seed/4/800/600",
      link: "/products/4",
      alt: "a",
      description: "alguma descrição muita boa 4 kkkk",
    },
    {
      id: id++,
      count: 0,
      name: "projeto 5",
      image: "https://picsum.photos/seed/5/800/600",
      link: "/products/5",
      alt: "a",
      description: "alguma descrição muita boa 5 kkkk",
    },
  ];

  return (
    <Container pageTitle="Pablo Studio 3D">
      <Link href="/actionfigures" className="z-10 absolute right-14 top-48">
        <ArrowButton />
      </Link>
      <Banner alt="a" img={a} />
      <ProductSlider data={b} />
    </Container>
  );
}
