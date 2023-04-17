import { useCartContext } from "@hooks/useCartContext";
import { Product } from "@models/Product";
import { CheckboxComp } from "@util/assets/CheckboxComp";
import { DropDown } from "@util/assets/Dropdown";
import { ArrowButton } from "@util/buttons/ArrowButton";
import { Text } from "@util/texts/Text";
import { Title } from "@util/texts/Title";
import { PrecoPrazoResponse } from "correios-brasil/dist";
import { DocumentData } from "firebase/firestore";

interface FreightProps {
  onClick: () => void;
  isVisible?: boolean;
  className?: string;
  freight?: PrecoPrazoResponse[];
  product: DocumentData[] & Product[]
}

export function Freight({ onClick, isVisible, freight, product }: FreightProps) {
  const { isLoading } = useCartContext()

  const checkVisibility = isVisible ? "h-32 md:h-36" : "h-12";
  const checkRotate = isVisible ? "-rotate-90" : "rotate-90";
  const isNewFreightObject = !isVisible ? "opacity-100 visible" : "opacity-0 invisible"
  const teste = !isVisible ? "opacity-0 invisible sm:opacity-100 sm:visible" : "opacity-100 visible sm:opacity-100 sm:visible"

  const productFreight = product.map(product => product.freight)
  const renderSelectedOption = () => {
    return (
      <>
        {product && +productFreight[0].deadline > 1 && (
          <div className={`transition-all absolute flex flex-col right-3 w-fit h-fit ${isNewFreightObject}`}>
            <div className="leading-4">
              <div className="flex gap-1.5">
                <Text
                  medium
                  className="text-xs md:text-sm"
                  text={`${productFreight[0].serviceType}:`}
                />
                <Text
                  bold
                  className="text-xs md:text-sm"
                  text={productFreight[0].price}
                />
              </div>
              <Text
                light
                className="text-xs md:text-sm"
                text={`Entrega em até ${productFreight[0].deadline} ${
                  +productFreight[0].deadline > 1 ? "dias" : "dia"
                }`}
              />
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <DropDown
      onClick={onClick}
      className={`flex justify-center flex-col p-3 ${checkVisibility}`}
    >
      <ArrowButton
        className={`${teste} sm:flex right-0 absolute left-1/2 top-2 h-4 pointer-events-none ${checkRotate}`}
      />
      <Title
        bold
        title="Frete"
        className="flex justify-start w-fit items-start text-start"
      />
      {!isLoading && (
        <>
        {isVisible && <CheckboxComp product={product} freight={freight} />}
        {renderSelectedOption()}
        </>
      )}
    </DropDown>
  );
}
