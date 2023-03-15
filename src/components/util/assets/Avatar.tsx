import Image from "next/image";
import Link from "next/link";

interface AvatarProps {
  img: string;
  alt: string;
  href?: string;
  as?: typeof Link;
  className?: string
}

export function Avatar({ img, alt, as, href, className }: AvatarProps) {
  const Comp = as ?? "div";

  function renderAvatar() {
    const checkComp = href && "cursor-pointer";

    return (
      <Comp
        href={href!}
        className={`
          flex justify-center items-center min-w-max w-10 h-10 z-40
          rounded-full p-0.5 border border-secondary ${checkComp} ${className}`}
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
