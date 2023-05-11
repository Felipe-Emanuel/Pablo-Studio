import api from "src/data/services/api";
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
import { useState, useEffect } from "react";
import { DocumentData } from "firebase/firestore";
import { ProductCartPopUp } from "@layout/ProductCart/ProductCartPopUp";
import { getUser } from "@database/clientData";
import { User } from "@models/User";
import { SkeletonProductCart } from "src/components/skeletons/SkeletonProductCart";
import { OtherProducts } from "@layout/RecommendedItems/OtherProducts";
import { useAxios } from "@hooks/useAxios";
import { EmptyCart } from "@layout/EmptyCart";
import { getFireStore } from "@database/clientCart";
import { useRecentlySeen } from "@hooks/useRecentlySeen";
import { RecentlySeen } from "@layout/EmptyCart/RecentlySeen";
import { Budget } from "@layout/Budget";
import { MostViwed } from "@layout/RecommendedItems/MostViwed";
import { RecommendedItems } from "@layout/RecommendedItems";
import { getProductLiked } from "@database/productLiked";

interface CartProps {
  stringifyUser: string & User[];
  product: DocumentData[] & Product[];
  data: Product[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = parseCookies(context);
    const cookieUser = cookies._userGuest ?? null;
    const guestId = cookies._guest ?? null;

    const req = await api.get(`api/cart?mock=true&limit=3`);
    const data = await req.data;

    if (cookieUser) {
      const user = await getUser().then((resp) => {
        const users = resp.filter((user) => user.guestId === guestId);
        return users;
      });
      const stringifyUser = JSON.stringify(user);

      return {
        props: { stringifyUser, data },
      };
    }

    const product =
      (await getFireStore("carts", guestId).then(async (response) => {
        if (cookieUser) {
          return response;
        }
      })) || null;

    return {
      props: {
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

export default function Cart({ product, stringifyUser, data }: CartProps) {
  const { getRecentlySeen, recentlySeen } = useRecentlySeen();
  const { getData } = useAxios();
  const {
    progressValue,
    paymentStates,
    isLoading,
    isFreigthLoading,
    isCepLoading,
  } = useCartContext();
  const { price } = (product && product[0]?.choisedService) || "";

  const [user, setUser] = useState<DocumentData[] | User[]>(stringifyUser);
  const [products, setProducts] = useState<Product[]>(data);
  const [productCart, setProductCart] = useState<DocumentData[] & Product[]>(product);


  const checkedProducts = products && products.length === 0 ? data : products;

  const cookies = parseCookies();
  const guestId = cookies._guest;
  const guestUser = cookies && cookies._userGuest;

  const freightValue = price ? parseFloat(price?.replace("R$", "").trim()) : 0;
  const total =
    productCart &&
    productCart?.reduce(
      (acc: number, item: Product) => acc + item.productPrice + freightValue,
      0
    );

  const getProducts = async () => {
    await getData("cart?mock=true", 10).then(({ data }) => setProducts(data));
  };

  useEffect(() => {
    const reloadProduct = async () => {
      //@ts-ignore
      await getFireStore("carts", guestId).then((resp) => setProductCart(resp));
    };
    reloadProduct();

    stringifyUser && setUser(JSON.parse(stringifyUser));

    const reloadUser = async () => {
      const user = await getUser().then((resp) => {
        const users = resp.filter((user) => user.guestId === guestId);
        return setUser(users);
      });
      user;
    };
    reloadUser();



  }, [isLoading, isFreigthLoading, isCepLoading, guestUser]);

  useEffect(() => {
    getProducts();
  }, [guestUser]);


  useEffect(() => {
    const getRecently = async () => {
      await getRecentlySeen(guestId);
    };

    getRecently();
  }, [isLoading]);


  return (
    <Container pageTitle="Carrinho | Pablo Studios 3D ">
      {productCart ? (
        <>
          <Section>
            <PaymentLine value={progressValue} paymentStates={paymentStates} />
            <ResumeCart
              total={total}
              product={productCart}
              disabled={progressValue === 100}
            />
            <LineVector />
          </Section>
          <Section>
            <Cep user={user} guestId={guestId} product={productCart} />
          </Section>
          {isLoading ? (
            <div className="h-full">
              {productCart.length &&
                productCart.map((product) => {
                  return <SkeletonProductCart key={product.id} />;
                })}
            </div>
          ) : (
            <>
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
            </>
          )}
          <Section>
            {!isLoading && <Budget neverDesappear />}
            {user && <MostViwed productCart={productCart} preference={user} product={checkedProducts} />}
            {checkedProducts && <RecommendedItems productCart={productCart} preference={user} />}
            <RecentlySeen recentlySeen={recentlySeen} productCart={productCart} />
          </Section>
        </>
      ) : (
        <Section>
          <EmptyCart
            preference={user}
            recentlySeen={recentlySeen}
            products={checkedProducts}
          />
        </Section>
      )}
    </Container>
  );
}
