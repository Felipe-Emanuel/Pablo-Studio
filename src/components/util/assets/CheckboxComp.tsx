import * as Checkbox from "@radix-ui/react-checkbox";
import { normalize } from "@functions/normalized";
import { Text } from "@util/texts/Text";
import { CheckIcon } from "src/icons";
import { useState } from "react";
import { DocumentData } from "firebase/firestore";
import { Product } from "@models/Product";
import { useCartContext } from "@hooks/useCartContext";

interface CheckboxProps {
  product: DocumentData[] & Product[];
}

export function CheckboxComp({ product }: CheckboxProps) {
  const { freigthServiceChoise } = useCartContext();
  const { formatPrice } = normalize();

  const renderOption = (
    serviceType: "PAC" | "SEDEX",
    PacOrSedex: string,
    id: string
  ) => {
    const { PrazoEntrega, Valor, EntregaSabado } =
      product[0].freight[serviceType];
    const { serviceCode } = product[0]?.choisedService;

    const selectedServiceType = serviceCode === "04510" ? "PAC" : "SEDEX" || "";
    const theDeadLine = PrazoEntrega || "";
    const formattedPrice = formatPrice(Valor) || "";

    const [selectedOption, setSelectedOption] = useState(
      selectedServiceType ?? ""
    );

    const handleClick = () => {
      freigthServiceChoise(product, Valor, PrazoEntrega, PacOrSedex);

      setSelectedOption(selectedOption);
    };

    return (
      <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
        <Checkbox.Root
          value={PacOrSedex}
          checked={selectedOption === serviceType}
          onClick={handleClick}
          id={id}
          className="
              transition-all flex h-3 w-3 md:h-5 md:w-5
              rounded-full appearance-none items-center justify-center
              bg-transparent outline-none ring-2 ring-white checked:ring-secondary"
        >
          <Checkbox.Indicator className="text-violet11">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <div className="pl-3 flex flex-col justify-center">
          <label
            className="font-bold text-xs md:text-md leading-none text-white"
            htmlFor={id}
          >
            {serviceType} - entrega em até {theDeadLine} dias: {formattedPrice}
          </label>
          <Text
            light
            className="text-xs"
            text={`(Realiza entrega aos sábados: ${
              EntregaSabado === "S" ? "Sim" : "Não"
            })`}
          />
        </div>
      </div>
    );
  };

  return (
    <form className="flex flex-col gap-4">
      {renderOption("PAC", "04510", "c1")}
      {renderOption("SEDEX", "04014", "c2")}
    </form>
  );
}
