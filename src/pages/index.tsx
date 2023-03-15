import { Banner } from "@layout/banner/Banner";
import img1 from "../../public/banner-home.jpg";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 bg-dark">
      <Banner alt="b" img={img1} />
    </div>
  );
}
