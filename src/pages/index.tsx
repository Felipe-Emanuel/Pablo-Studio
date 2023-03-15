import { Stock } from "@layout/stock";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 bg-dark">
      <Stock qtd={1}/>
    </div>
  );
}
