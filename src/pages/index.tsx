import { ThumbSlider } from "@layout/slider/thumbSlider";

export default function Home() {

  const images = [
    "https://picsum.photos/seed/1/800/600",
    "https://picsum.photos/seed/2/800/600",
    "https://picsum.photos/seed/3/800/600",
    "https://picsum.photos/seed/4/800/600",
    "https://picsum.photos/seed/5/800/600",
  ];


  return (
    <div className="w-screen h-screen flex flex-col gap-4 bg-dark">
      <ThumbSlider  images={images} />
    </div>
  );
}
