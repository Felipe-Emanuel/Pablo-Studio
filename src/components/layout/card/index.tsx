import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ICardProps = {
  img: string;
  alt: string;
  href: string;
  className?: string
};

export function Card({ img, alt, href, className }: ICardProps) {

  return (
    <Link
      href={href}
      className={`
        relative rounded-3xl p-1 w-56 sm:w-80 h-72 sm:h-[30rem] border
        border-transparent hover:border-secondary transition-all ${className}
      `}
    >
      <Image
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMDYutBwADuQGRo8ohBwAAAABJRU5ErkJggg=="
        src={img}
        alt={alt}
        width={320}
        height={468}
        quality={100}
        className={`w-full h-full rounded-3xl transition-all brightness-75 hover:brightness-100`}
      />
    </Link>
  );
}
