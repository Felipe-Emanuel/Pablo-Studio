import Image from "next/image";
import Link from "next/link";

export interface ProductCartImageProps {
  src: string;
  alt: string;
  productLink: string;
}

export function ProductCartImage({
  src,
  alt,
  productLink,
}: ProductCartImageProps) {
  return (
    <Link className="flex" href={productLink}>
      <Image
        alt={alt}
        src={src}
        width={250}
        height={300}
        className="m-auto w-20 md:w-52 h-20 md:h-40 lg:h-48"
      />
    </Link>
  );
}
