import Image, { StaticImageData } from "next/image";

interface BannerProps {
  img: StaticImageData;
  alt: string;
}

export function Banner({ img, alt }: BannerProps) {
  const style = {
    background:
      "linear-gradient(180deg, rgba(18, 18, 20, 0) 0.05%, #121214 100%)",
  };
  const sideStyle = {
    background:
      "linear-gradient(-95deg, rgba(18, 18, 20, 0) 0.05%, #121214 85%)",
  };

  return (
    <div className="w-screen h-[85%] pointer-events-none absolute z-0 inset-0">
      <div
        style={style}
        className="w-full h-full pointer-events-none absolute"
      />
      <div
        style={sideStyle}
        className="w-full h-full pointer-events-none absolute"
      />

      <Image
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMDYutBwADuQGRo8ohBwAAAABJRU5ErkJggg=="
        alt={alt}
        src={img}
        width={1980}
        height={980}
        quality={100}
        className="w-full h-full"
      />
    </div>
  );
}
