import { normalize } from "@functions/normalized";
import { useCartContext } from "@hooks/useCartContext";
import { Button } from "@util/buttons/Button";
import { Price } from "@util/texts/Price";
import { PricePixContent } from "@util/texts/PricePixContent";
import { useRouter } from "next/router";

interface ResumeCartProps {
  disabled: boolean;
  discount: number;
  totalProductsValue: number;
  freight: number;
}

export function ResumeCart({
  disabled,
  totalProductsValue,
  freight,
}: ResumeCartProps) {
  const { changeProgressRingValue, changePaymentState } = useCartContext()
  const { totalOnCredit, totalWithPix } = useCartContext();

  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
  };

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
            price={totalProductsValue}
          />
          <hr className="border border-white" />
        </div>
        <div>
          <Price text="Frete" price={freight} />
          <Price text="Total à prazo" price={totalOnCredit} />
          <PricePixContent
            totalWithPix={totalWithPix}
            totalOnCredit={totalOnCredit}
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
