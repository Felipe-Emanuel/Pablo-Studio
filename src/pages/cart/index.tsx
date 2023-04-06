import { Container } from "@container/Container";
import { PaymentLine } from "@layout/PaymentLine";
import { ResumeCart } from "@layout/ResumeCart";
import { useCartContext } from "@hooks/useCartContext";
import { ProductCart } from "@layout/ProductCart";
import { Section } from "@container/section";
import { ProductCartPopUp } from "@layout/ProductCart/ProductCartPopUp";
import { useEffect } from "react";
import { DataType } from "@layout/slider/productSlider";

export default function Cart() {
  const {
    progressValue,
    paymentStates,
    state,
    discount,
    togglePopUp,
  } = useCartContext();

  useEffect(() => {
    return () => {
      togglePopUp(false);
    };
  }, []);


  return (
    <Container pageTitle="Pablo Studios 3D | Carrinho">
      <PaymentLine value={progressValue} paymentStates={paymentStates} />
      <ResumeCart
        disabled={progressValue === 100}
        discount={discount}
      />
      {state.cart.length > 0 &&
        state.cart.map((cart: DataType) => <ProductCartPopUp key={cart.id} product={cart} />)}
      <Section>
        {state.cart.length > 0 &&
          state.cart.map((cart: DataType) => {
            return (
              <ProductCart
                key={cart.id}
                product={cart}
                image={cart.images[0]}
                productName={cart.productName}
                productDescription={cart.productDescription}
              />
            );
          })}
      </Section>
    </Container>
  );
}
