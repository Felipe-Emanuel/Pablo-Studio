import { Placeholder } from "@util/Layer/Placeholder";
import { Text } from "@util/texts/Text";
import { Title } from "@util/texts/Title";

export function EmptyCartTitle() {
  return (
    <Placeholder className="w-full mb-3 md:mb-0">
      <Title size="lg" title="Não deixe seu carrinho vazio!" className="leading-7 mb-3" />
      <Text text="Revisite seus últimos produtos ou dê uma conferida no que há de novo." />
    </Placeholder>
  )
}
