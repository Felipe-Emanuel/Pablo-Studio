import { Budget } from "@layout/Budget";
import { Placeholder } from "@util/Layer/Placeholder";
import { Text } from "@util/texts/Text";
import { Title } from "@util/texts/Title";
import { LineVector } from "@vectores/Vectores";

export function EmptyCartTitle() {
  return (
    <div className="flex flex-col w-full pt-10 lg:pt-0">
      <Placeholder className="mb-3 md:mb-0">
        <Title
          size="lg"
          title="Não deixe seu carrinho vazio!"
          className="leading-7 mb-3"
        />
        <Text text="Revisite seus últimos produtos ou dê uma conferida no que há de novo." />
      </Placeholder>
      <Budget neverDesappear className="md:flex py-4" />
      <LineVector />
    </div>
  );
}
