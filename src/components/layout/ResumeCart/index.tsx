import { Methods } from "@functions/Methods";
import { useAxios } from "@hooks/useAxios";
import { useCartContext } from "@hooks/useCartContext";
import { Product } from "@models/Product";
import { Button } from "@util/buttons/Button";
import { Price } from "@util/texts/Price";
import { PricePixContent } from "@util/texts/PricePixContent";
import { SectionTitle } from "@util/texts/SectionTitle";
import { ResumeVector } from "@vectores/Vectores";
import { DocumentData } from "firebase/firestore";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

interface ResumeCartProps {
  disabled: boolean;
  product: DocumentData[] & Product[]
  total: number
}

export function ResumeCart({ disabled, product, total}: ResumeCartProps) {
  const { reducePrice } = Methods()
  const { discount, changeProgressRingValue, changePaymentState } = useCartContext();
  const { serviceCode } = product[0]?.choisedService;

  const cookies = parseCookies();
  const cookieUser = cookies._userGuest ?? null;

  const router = useRouter();
  const handleClick = (href: string) => router.push(href);

  const totalWithPix = total + reducePrice(product);
  const totalOnCredit = total + reducePrice(product) + total * discount;

  const selectedServiceType = serviceCode === "04014" ? "SEDEX" : "PAC" || "";

  return (
    <div
      className="
      bg-placeholder p-3 rounded-md
      w-full h-fit flex flex-col gap-8 sm:flex-row justify-between items-center"
    >
      <div className="w-full sm:max-w-[340px] h-fit flex flex-col gap-8">
        <SectionTitle icon={<ResumeVector />} text="Resumo do Pedido" />
        <div>
          <Price text="Valor dos produtos" price={total} />
          <hr className="border border-white" />
        </div>
        <div>
          <Price text="Frete" price={cookieUser ? reducePrice(product, selectedServiceType) : 0} />
          <Price text="Total à prazo" price={totalOnCredit} />
          <PricePixContent total={total} totalWithPix={totalWithPix} />
        </div>
      </div>
      <div
        className="
        flex flex-col gap-4 justify-between py-6 w-full sm:max-w-md"
      >
        <Button
          isPrimary
          disabled={disabled}
          onClick={() => {
            changeProgressRingValue(), changePaymentState();
          }}
          text="Continuar pagamento"
          className="w-full"
        />
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
