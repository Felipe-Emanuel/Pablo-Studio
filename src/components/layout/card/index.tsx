import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CardProps {
  img: StaticImageData;
  alt: string;
  href: string;
}

export function Card({ img, alt, href }: CardProps) {
  const [isOverlay, setIsOverlay] = useState(true);

  const setOverlay = () => setIsOverlay((isOverlay) => !isOverlay);
  const checkOverlay = isOverlay ? "bg-dark/50" : "bg-transparent";

  return (
    <Link
      href={href}
      onMouseEnter={setOverlay}
      onMouseLeave={setOverlay}
      className="
      relative rounded-3xl p-1 w-56 sm:w-80 h-72 sm:h-[468px] border
      border-transparent hover:border-secondary transition-all"
    >
      <div
        className={`transition-all absolute inset-1 rounded-3xl ${checkOverlay}`}
      />
      <Image
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMDYutBwADuQGRo8ohBwAAAABJRU5ErkJggg=="
        src={img}
        alt={alt}
        width={320}
        height={468}
        quality={100}
        className={`w-full h-full rounded-3xl`}
      />
    </Link>
  );
}
