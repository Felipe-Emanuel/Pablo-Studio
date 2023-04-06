import { useCartContext } from "@hooks/useCartContext";
import { DataType } from "@layout/slider/productSlider";
import { Button } from "@util/buttons/Button";
import { Price } from "@util/texts/Price";
import { PricePixContent } from "@util/texts/PricePixContent";
import { useRouter } from "next/router";


interface ResumeCartProps {
  disabled: boolean;
  discount: number;
}

export function ResumeCart({
  disabled,
}: ResumeCartProps) {
  const { changeProgressRingValue, changePaymentState } = useCartContext()
  const { state, freight, discount } = useCartContext();

  const router = useRouter();
  const handleClick = (href: string) => {
    router.push(href);
  };

  const totalWithPix = state.total + freight
  const totalOnCredit = state.total + freight + (state.total * discount)


  return (
    <div
      className="
      bg-placeholder p-3 rounded-md
      w-full h-fit flex flex-col gap-8 sm:flex-row justify-between items-center"
    >
      <div className="w-full sm:max-w-[340px] h-fit flex flex-col gap-8">
        <div>
          <Price
            text="Valor dos produtos"
            price={state.total}
          />
          <hr className="border border-white" />
        </div>
        <div>
          <Price text="Frete" price={freight} />
          <Price text="Total à prazo" price={totalOnCredit} />
          <PricePixContent
            totalWithPix={totalWithPix}
          />
        </div>
      </div>
      <div
        className="
        flex flex-col gap-4 justify-between py-6 w-full sm:max-w-md"
      >
        <Button
          disabled={disabled}
          onClick={() => {changeProgressRingValue(), changePaymentState()}}
          text="Continuar pagamento" className="w-full" />
        <Button
          onClick={() => handleClick("/")}
          text="Continuar comprando"
          className="w-full"
          isTertiary
        />
      </div>
    </div>
  );
}
