import { Container } from "@container/Container";
import { PaymentLine } from "@layout/PaymentLine";
import { ResumeCart } from "@layout/ResumeCart";
import { useCartContext } from "@hooks/useCartContext";
import { ProductCart } from "@layout/ProductCart";
import { Section } from "@container/section";
import { LineVector } from "@vectores/Vectores";
import { Cep } from "@layout/Cep";
import { Product } from "@models/Product";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getProductCart } from "@database/clientCart";
import { useState, useEffect } from "react";
import { DocumentData } from "firebase/firestore";
import { Text } from "@util/texts/Text";
import { ProductCartPopUp } from "@layout/ProductCart/ProductCartPopUp";

interface CartProps {
  cookieUser: string;
  product: DocumentData[] & Product[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = parseCookies(context);
    const cookieUser = cookies._userGuest ?? null;
    const guestId = cookies._guest ?? null;

    const product = await getProductCart(guestId)
      .then(async (response) => {
        if(cookieUser) {
          return response
        }
      }) || null

    return {
      props: {
        cookieUser,
        product,
      },
    };
  } catch (err) {
    console.error(err);
  }
  return {
    props: {},
  };
};

export default function Cart({ cookieUser, product }: CartProps) {
  const { progressValue, paymentStates, isLoading } = useCartContext();
  const { price } = (product && product[0]?.choisedService) || "";
  const [productCart, setProductCart] = useState<DocumentData[] & Product[]>(
    product
  );
  const cookies = parseCookies();
  const guestId = cookies._guest;
  const normalizedCookie = cookieUser ? JSON.parse(cookieUser) : [];
  const freightValue = price ? parseFloat(price?.replace("R$", "").trim()) : 0;
  const total =
    productCart &&
    productCart?.reduce(
      (acc: number, item: Product) => acc + item.productPrice + freightValue,
      0
    );

  useEffect(() => {
    const reloadProduct = async () => {
      //@ts-ignore
      await getProductCart(guestId).then((resp) => setProductCart(resp));
    };
    reloadProduct();
  }, [isLoading]);

  return (
    <Container style pageTitle="Pablo Studios 3D | Carrinho">
      {productCart ? (
        <>
          <PaymentLine value={progressValue} paymentStates={paymentStates} />
          <ResumeCart
            total={total}
            product={productCart}
            disabled={progressValue === 100}
          />
          <LineVector />
          <Section>
            <Cep
              guestId={guestId}
              product={productCart}
              ssrCookieUser={normalizedCookie}
            />
          </Section>
          {isLoading ? (
            <Text text="Carregando..." />
          ) : (
            <Section>
              {/*@ts-ignore*/}
            <ProductCartPopUp product={productCart} />
              {productCart &&
                productCart.length > 0 &&
                productCart?.map((cart: Product, i: number) => {
                  return (
                    <div key={i} className="relative">
                      <ProductCart
                        freight={freightValue}
                        cookieUser={guestId}
                        product={cart}
                        image={cart.images[0]}
                        productName={cart.productName}
                        productDescription={cart.productDescription}
                      />
                    </div>
                  );
                })}
            </Section>
          )}
        </>
      ) : (
        <Text text="Sem produto..." />
      )}
    </Container>
  );
}
