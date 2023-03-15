import { CardInfo } from "@layout/cardInfo";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 bg-dark">
      <CardInfo views={25} />
    </div>
  );
}
