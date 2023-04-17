import { normalize } from "@functions/normalized";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Text } from "@util/texts/Text";
import { PrecoPrazoResponse } from "correios-brasil/dist";
import { CheckIcon } from "src/icons";
import { useState } from "react";
import { DocumentData } from "firebase/firestore";
import { Product } from "@models/Product";
import { useCartContext } from "@hooks/useCartContext";

interface CheckboxProps {
  freight: PrecoPrazoResponse[] | undefined;
  product: DocumentData[] & Product[];
}

export function CheckboxComp({ freight, product }: CheckboxProps) {
  const { setIsLoading, updateFreigthValue } = useCartContext();
  const { formatPrice } = normalize();

  const [selectedOption, setSelectedOption] = useState<"PAC" | "Sedex" | "">(product[0].freight.serviceType ?? "");

  const renderOption = (
    serviceType: "PAC" | "Sedex" | "",
    serviceCode: string,
    index: number,
    id: string
  ) => {
    if (!freight || !freight[0]) return null;

    const { PrazoEntrega, Valor, EntregaSabado } = freight[0][index];

    const deadline = PrazoEntrega || "";
    const price = formatPrice(Valor) || "";

    return (
      <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
        <Checkbox.Root
          value={serviceCode}
          checked={selectedOption === serviceType}
          onClick={() => {
            updateFreigthValue(product, serviceType, deadline, price)
            setSelectedOption(serviceType);
          }}
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
            {serviceType} - entrega em até {deadline} dias: {price}
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
      {renderOption("PAC", "04510", 0, "c1")}
      {renderOption("Sedex", "04014", 1, "c2")}
    </form>
  );
}
