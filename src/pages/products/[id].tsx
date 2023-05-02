import { Section } from "@container/section";
import { Comments } from "@layout/Comments";
import { SelectedCard } from "@layout/selectedCard";
import { Product } from "@models/Product";
import { GetStaticPaths, GetStaticProps, Redirect } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "src/components/containers/Container";
import api from "src/data/services/api";
import { Text } from "@util/texts/Text";
import { LineLoading } from "@animations/lineLoading/LineLoading";
import { useCartContext } from "@hooks/useCartContext";

interface ProductProps {
  data: Product[];
  params: any;
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const req = await api.get("api/cart?mock=true");
    const data = req.data;

    const paths = Array.isArray(data)
      ? data.map((product: Product) => ({
          params: { products: "products", id: product.id.toString() },
        }))
      : [];

    return {
      paths,
      fallback: true,
    };
  } catch (err) {
    console.log("Erro ao recuperar produtos da API <Home> /linha 30/", err);
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps<ProductProps> = async ({
  params,
}) => {
  const { id } = params || {};

  const redirect: Redirect = {
    destination: "/",
    permanent: false,
  };

  if (!id) {
    return { redirect };
  }

  try {
    const req = await api.get(`api/cart/?mock=true`);
    const data = req.data;

    if (!Array.isArray(data)) {
      return { redirect };
    }

    return {
      props: { data, params },
    };
  } catch (err) {
    return { redirect };
  }
};

export default function Products({ data, params }: ProductProps) {
  const { isLoading } = useCartContext()
  const { id } = params || {};
  const router = useRouter();

  useEffect(() => {
    if (router.isFallback) {
      return;
    }
    if (!data || !id) {
      router.push("/");
    }
  }, [router, data, id]);

  return data ? (
    <Container style pageTitle="Pablo Studio 3D | Nome do Produto">
      {isLoading && <LineLoading />}
      <SelectedCard product={data[+id]} products={data} id={+id} />
      <Section>
        <Comments data={data[id].productComments} id={id} />
      </Section>
    </Container>
  ) : (
    <Text text="carregando produtos..." />
  );
}
