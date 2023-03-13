import { HeartButton } from "@animations/heart/HeartButton";
import { ArrowButton } from "@util/ArrowButton";
import { Button } from "@util/Button";
import { Title } from "@util/Title";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-dark">
      <Title size="2xl" title="Olá mundo!" />
      <ArrowButton hover className="absolute right-0" />
      <ArrowButton inverse hover/>
      <Button text="Adicionar ao carrinho"/>
      <HeartButton />
    </div>
  );
}
