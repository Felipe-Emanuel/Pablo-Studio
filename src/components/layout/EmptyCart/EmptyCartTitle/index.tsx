import { Budget } from "@layout/Budget";
import { Product } from "@models/Product";
import { User } from "@models/User";
import { Placeholder } from "@util/Layer/Placeholder";
import { Text } from "@util/texts/Text";
import { Title } from "@util/texts/Title";
import { LineVector } from "@vectores/Vectores";
import { DocumentData } from "firebase/firestore";

interface EmptyCartTitleProps {
  recentlySeen: DocumentData[] | Product[];
  preference: DocumentData[] | User[];
}

export function EmptyCartTitle({
  recentlySeen,
  preference,
}: EmptyCartTitleProps) {

  return (
    <div className="flex flex-col w-full pt-10 lg:pt-0">
      <Placeholder className="mb-3 md:mb-0">
        <Title
          size="lg"
          title="Não deixe seu carrinho vazio!"
          className="leading-7 mb-3"
        />
        <Text
          text={
            recentlySeen.length > 0
              ? "Revisite seus últimos produtos ou dê uma conferida no que há de novo."
              : "Confira o que há de novo!"
          }
        />
      </Placeholder>
      <Budget neverDesappear className="md:flex py-4" />
      <LineVector />
    </div>
  );
}
