import { useState } from "react";
import { Container } from "@container/Container";
import { PaymentLine } from "@layout/PaymentLine";
import { ResumeCart } from "@layout/ResumeCart";
import {
  CartVector,
  CheckVector,
  EyeVector,
  PaymentVector,
  UserVector,
} from "@vectores/Vectores";

export default function Cart() {
  const [progressValue, setProgressValue] = useState(20)

  const [paymentStates, setPaymentStates] = useState([
    {icon: <CartVector />, isActive: true, isLast: false, text: "Carrinho" },
    {icon: <UserVector />, isActive: false, isLast: false, text: "Identificação" },
    {icon: <PaymentVector />, isActive: false, isLast: false, text: "Pagamento" },
    {icon: <EyeVector />, isActive: false, isLast: false, text: "Confirmação" },
    {icon: <CheckVector />, isActive: false, isLast: true, text: "Conclusão" },
  ])

  function changePaymentState() {
    const activeIndex = paymentStates.findIndex((state) => state.isActive);
    if (activeIndex < paymentStates.length - 1) {
      const newPaymentStates = [...paymentStates];
      newPaymentStates[activeIndex].isActive = false;
      newPaymentStates[activeIndex + 1].isActive = true;
      setPaymentStates(newPaymentStates);
    }
  }

  function changeProgressRingValue() {
    setProgressValue(progressValue + 20);
  }

  return (
    <Container pageTitle="Pablo Studios 3D | Carrinho">
      <PaymentLine value={progressValue} paymentStates={paymentStates} />
      <ResumeCart
        disabled={progressValue === 100}
        discount={0.15}
        totalProductsValue={750}
        freight={34.75}
        changeProgressRingValue={() => changeProgressRingValue()}
        changePaymentState={() => changePaymentState()}
      />
    </Container>
  );
}
