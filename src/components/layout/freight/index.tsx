import { TruckLoader } from "@animations/truckLoader/TruckLoader";
import { Methods } from "@functions/Methods";
import { normalize } from "@functions/normalized";
import { useCartContext } from "@hooks/useCartContext";
import { Product } from "@models/Product";
import { CheckboxComp } from "@util/assets/CheckboxComp";
import { DropDown } from "@util/assets/Dropdown";
import { ArrowButton } from "@util/buttons/ArrowButton";
import { Text } from "@util/texts/Text";
import { Title } from "@util/texts/Title";
import { DocumentData } from "firebase/firestore";

interface FreightProps {
  onClick: () => void;
  isVisible?: boolean;
  className?: string;
  product: DocumentData[] & Product[];
}

export function Freight({ onClick, isVisible, product }: FreightProps) {
  const { isFreigthLoading } = useCartContext();
  const { formatPrice } = normalize();
  const { reducePrice } = Methods()

  const checkVisibility = isVisible ? "h-32 md:h-36" : "h-12";
  const checkRotate = isVisible ? "-rotate-90" : "rotate-90";
  const isNewFreightObject = !isVisible
    ? "opacity-100 visible"
    : "opacity-0 invisible";
  const arrowVisibility = !isVisible
    ? "opacity-0 invisible sm:opacity-100 sm:visible"
    : "opacity-100 visible sm:opacity-100 sm:visible";

  const { deadline, serviceCode } = product[0]?.choisedService || '';

  const checkServiceType = serviceCode === "04014" ? "SEDEX" : "PAC"

  const renderSelectedOption = () => {
    return (
      <>
        {product && +deadline > 0 && (
          <div
            className={`cursor-default transition-all absolute flex flex-col right-3 w-fit h-fit ${isNewFreightObject}`}
          >
            <div className="leading-4">
              <div className="flex gap-1.5">
                <Text
                  medium
                  className="text-xs md:text-sm"
                  text={`${checkServiceType}:`}
                />
                <Text
                  bold
                  className="text-xs md:text-sm"
                  text={formatPrice(reducePrice(product, checkServiceType))}
                />
              </div>
              <Text
                light
                className="text-xs md:text-sm"
                text={`Entrega em até ${deadline} ${
                  +deadline > 1 ? "dias" : "dia"
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
        className={`${arrowVisibility} sm:flex right-0 absolute left-1/2 top-2 h-4 pointer-events-none ${checkRotate}`}
      />
      <Title
        bold
        title="Frete"
        className="flex justify-start w-fit items-start text-start"
      />
      {isFreigthLoading ? <TruckLoader /> : (
        <>
          {isVisible && <CheckboxComp product={product} />}
          {renderSelectedOption()}
        </>
      )}
    </DropDown>
  );
}
