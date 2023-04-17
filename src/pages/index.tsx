import { Banner } from "@layout/banner/Banner";
import { ArrowButton } from "@util/buttons/ArrowButton";
import { Container } from "src/components/containers/Container";
import { GetStaticProps } from "next";
import Link from "next/link";
import a from "../../public/banner-home.jpg";
import api from "src/data/services/api";
import { ProductSlider } from "@layout/slider/productSlider";
import {  Product } from "@models/Product";

export const getStaticProps: GetStaticProps = async () => {
  const req = await api.get(`api/cart?mock=true`);
  const data = await req.data;

  return {
    props: { data },
  };
};

interface HomeProps {
  data: Product[];
}

export default function Home({ data }: HomeProps) {

  return (
    <Container pageTitle="Pablo Studio 3D">
      <Link href="/actionfigures" className="z-10 absolute right-14 top-48">
        <ArrowButton />
      </Link>
      <Banner alt="a" img={a} />
      <ProductSlider data={data} />
    </Container>
  );
}
