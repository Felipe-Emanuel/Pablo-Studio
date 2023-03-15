import { PriceCard } from "@layout/priceCard";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 bg-dark">
      <PriceCard price="50,50"/>
    </div>
  );
}
