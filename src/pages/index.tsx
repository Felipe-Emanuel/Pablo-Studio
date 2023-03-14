import { Button } from "@util/buttons/Button";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 bg-dark/50">
      <Button cart text="Adicionar ao carrinho" />
    </div>
  );
}
