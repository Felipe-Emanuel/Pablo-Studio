import { HeaderInfo } from "@util/HeaderInfo";
import { EyeVector } from "@vectores/Vectores";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-dark">
      <HeaderInfo icon={<EyeVector />} qtd={20}/>
      <HeaderInfo text="Estoque" qtd={1}/>
      <HeaderInfo text="Felipe" date="13.03.2023"/>
    </div>
  );
}
