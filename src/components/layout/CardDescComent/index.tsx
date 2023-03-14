import { Avatar } from "@util/assets/Avatar";
import { HeaderInfo } from "@util/texts/HeaderInfo";
import { Text } from "@util/texts/Text";
import { Title } from "@util/texts/Title";
import Link from "next/link";
import { ReactNode } from "react";

interface CardDescComent {
  title: string;
  text: string;
  titleSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
  textSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
  avatar?: ReactNode;
  user?: string;
  alt?: string;
  img?: string;
}

export function CardDescComent({
  title,
  text,
  titleSize,
  textSize,
  avatar,
  user,
  alt,
  img,
}: CardDescComent) {
  return (
    <div className="flex flex-col gap-2">
      {avatar ? (
        <div>
          <div className="flex items-center">
            <Avatar as={Link} href={user} alt={alt!} img={img!} />
            <Title bold size={titleSize} title={title} className="w-fit pl-4" />
            <HeaderInfo date="23.06.1998" />
          </div>
          <Text
            light
            size={textSize}
            text={`"${text}"`}
            className="max-w-md pl-[4.5rem]"
          />
        </div>
      ) : (
        <>
          <Title bold size={titleSize} title={title} className="w-full" />
          <Text light size={textSize} text={text} className="max-w-md" />
        </>
      )}
    </div>
  );
}
