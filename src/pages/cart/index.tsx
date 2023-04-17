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
import { PrecoPrazoRequest, calcularPrecoPrazo } from "correios-brasil/dist";
import { ProductCartPopUp } from "@layout/ProductCart/ProductCartPopUp";

interface CartProps {
  cookieUser: string;
  product: DocumentData[] & Product[];
  freigthResponse: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = parseCookies(context);
    const cookieUser = cookies._userGuest ?? null;
    const guestId = cookies._guest ?? null;

    const product = (await getProductCart(cookies._guest)) || null;
    const cep = cookieUser && Array(JSON.parse(cookieUser)).map((key) => key.cep);

    if (cep && cep[0] !== "") {
      const stringfyFreigthResponse = await getProductCart(guestId).then(
        (resp) => {
          try {
            if (resp != undefined) {
              const dimensions =
                resp?.map((product) => product.dimensions) ?? [];

              const pricesPromises = dimensions.map((dimensions) => {
                const prices = calcularPrecoPrazo(dimensions).catch((err) =>
                  console.log("Erro ao calcular frete <Linha 45> '/cart/", err)
                );
                return prices;
              });

              return Promise.all(pricesPromises);
            } else if (resp == undefined) {
              console.log(
                "/Resp undefined/ Erro em resgatar produtos em <Linha 53> ServerSideRendering: '/cart'"
              );
            }
          } catch (err) {
            console.log(
              "/Catch/ Erro em resgatar produtos em <Linha 58> ServerSideRendering: '/cart'"
            );
          }
        }
      );

      const freigthResponse =
        stringfyFreigthResponse != undefined &&
        JSON.stringify(stringfyFreigthResponse);

      return {
        props: {
          cookieUser,
          product,
          freigthResponse,
        },
      };
    }
  } catch (err) {
    console.error(err);
  }
  return {
    props: { },
  };
};

export default function Cart({
  cookieUser,
  product,
  freigthResponse,
}: CartProps) {

  const { progressValue, paymentStates, isLoading } = useCartContext();

  const [productCart, setProductCart] = useState<DocumentData[] & Product[]>(product);

  const cookies = parseCookies();
  const guestId = cookies._guest;

  const normalizedFreightInfo = cookieUser ? JSON.parse(freigthResponse) : [];
  const normalizedCookie = cookieUser ? JSON.parse(cookieUser) : [];

  const count = productCart?.reduce((acc, item) => acc + item.count, 0);
  const freightValueString = productCart && productCart[0]?.freight.price;
  //@ts-ignore
  const freightValue = freightValueString ? parseFloat(freightValueString?.replace("R$", "").trim()): 0;

  const total = productCart &&
    productCart?.reduce((acc: number, item: Product) => acc + item.productPrice + freightValue, 0);

  useEffect(() => {
    const reloadProduct = async () => {
      //@ts-ignore
      await getProductCart(guestId).then((resp) => setProductCart(resp));
    };
    reloadProduct()
  }, [isLoading]);

  return (
    <Container style pageTitle="Pablo Studios 3D | Carrinho">
      {productCart ? (
        <>
          <PaymentLine value={progressValue} paymentStates={paymentStates} />
          <ResumeCart
            total={total}
            disabled={progressValue === 100}
            freight={freightValue}
          />
          <LineVector />
          <Section>
            <Cep
              info={normalizedFreightInfo}
              guestId={guestId}
              product={productCart}
              ssrCookieUser={normalizedCookie}
            />
          </Section>
          {isLoading ? (
            <Text text="Carregando..." />
          ) : (
            <Section>
              {productCart.length && (
                productCart.map((item, i: number) =>
                  <ProductCartPopUp key={i} product={item} />
                )
              )}
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
