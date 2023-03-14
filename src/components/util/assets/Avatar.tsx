import Image from "next/image";
import Link from "next/link";

interface AvatarProps {
  img: string;
  alt: string;
  href?: string;
  as?: typeof Link;
}

export function Avatar({ img, alt, as, href }: AvatarProps) {
  const Comp = as ?? "div";

  function renderAvatar() {
    const checkComp = href && "cursor-pointer";

    return (
      <Comp
        href={href!}
        className={`
          flex justify-center items-center w-14 h-14
          rounded-full p-0.5 border border-secondary ${checkComp}`}
      >
        <Image
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMDYutBwADuQGRo8ohBwAAAABJRU5ErkJggg=="
          width={100}
          height={100}
          src={img}
          alt={alt}
          className="w-full h-full rounded-full"
        />
      </Comp>
    );
  }

  return renderAvatar();
}