import { Card } from "@layout/card";
import img from '../../public/a.png'

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 bg-dark">
      <Card alt="a" img={img} />
    </div>
  );
}
