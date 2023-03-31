import { Container } from "@container/Container";
import { PaymentState } from "@util/assets/PaymentState";
import { CartVector, CheckVector, EyeVector, PaymentVector, UserVector } from "@vectores/Vectores";

export default function Cart() {
  return (
    <Container pageTitle="Pablo Studios 3D | Carrinho">
      <div className="flex gap-20 flex-wrap">
        <PaymentState icon={<CartVector />} text="Carrinho" isActive isLast={false} />
        <PaymentState icon={<UserVector />} text="Identificação" isActive={false} isLast={false} />
        <PaymentState icon={<PaymentVector />} text="Pagamento" isActive={false} isLast={false} />
        <PaymentState icon={<EyeVector />} text="Confirmação" isActive={false} isLast={false} />
        <PaymentState icon={<CheckVector />} text="Conclusão" isActive={false} isLast />
      </div>
    </Container>
  )
}
