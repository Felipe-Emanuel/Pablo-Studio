import { Container } from "@container/Container";
import { PaymentLine } from "@layout/PaymentLine";
import { ResumeCart } from "@layout/ResumeCart";
import { useCartContext } from "@hooks/useCartContext";
import { ProductCart } from "@layout/ProductCart";
import { Section } from "@container/section";

export default function Cart() {
  const {
    progressValue,
    paymentStates,
    state,
    discount,
    totalProductsValue,
    freight,
  } = useCartContext();

  return (
    <Container pageTitle="Pablo Studios 3D | Carrinho">
      <PaymentLine value={progressValue} paymentStates={paymentStates} />
      <ResumeCart
        disabled={progressValue === 100}
        discount={discount}
        totalProductsValue={totalProductsValue}
        freight={freight}
      />
      <Section>
        {state.cart.length > 0 &&
          state.cart.map((cart, i) => {
            return (
              <ProductCart
                product={cart}
                key={i}
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
