import { Avatar } from "@util/assets/Avatar";
import { HeaderInfo } from "@util/texts/HeaderInfo";
import { Text } from "@util/texts/Text";
import { Title } from "@util/texts/Title";
import Link from "next/link";

interface CardDescComent {
  title: string;
  text: string;
  avatar?: boolean;
  productDescription?: boolean;
  user?: string;
  alt?: string;
  img?: string;
  date?: string;
  TitleSize?: string;
  textSize?: string;
}

export function CardDescComent({
  title,
  text,
  avatar,
  user,
  alt,
  img,
  date,
  productDescription,
  TitleSize,
  textSize,
}: CardDescComent) {
  const isProductDescription = productDescription ? "gap-2" : "gap-8";

  return (
    <>
      {avatar ? (
        <>
          <div className="flex items-center">
            <div className="w-10 h-10">
              <Avatar as={Link} href={user} alt={alt!} img={img!} />
            </div>
            <Title bold title={title} className="w-fit pl-4 truncate text-md" />
            <HeaderInfo date={date} />
          </div>
          <Text
            light
            text={`"${text}"`}
            className="max-w-md pt-2 pl-[3.5rem]"
          />
        </>
      ) : (
        <div className={`flex flex-col ${isProductDescription}`}>
          <Title
            bold
            title={title}
            className={`w-full max-w-md leading-none text-md ${TitleSize}`}
          />
          <Text light text={text} className={`max-w-md text-sm ${textSize}`} />
        </div>
      )}
    </>
  );
}
