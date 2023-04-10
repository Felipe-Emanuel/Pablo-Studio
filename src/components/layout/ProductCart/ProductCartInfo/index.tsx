import { normalize } from "@functions/normalized";
import { useWindow } from "@hooks/useWindow";
import { Price } from "@util/texts/Price";
import { Text } from "@util/texts/Text";
import { Title } from "@util/texts/Title";
import Link from "next/link";

interface ProductCartInfoProps {
  productName: string;
  productLink: string;
  productPrice: number;
  productDescription: string;
  totalOnCredit: number;
  moneyToBeSaved: number;
}

interface RenderDetailsProps {
  text: string;
  price: number;
}

export function ProductCartInfo({
  productName,
  productLink,
  productPrice,
  productDescription,
  totalOnCredit,
  moneyToBeSaved,
}: ProductCartInfoProps) {
  const { windowSize, width } = useWindow();
  const { formatPrice } = normalize();

  function RenderDetails({ text, price }: RenderDetailsProps) {
    return (
      <span className="flex w-full items-center">
        <span className="text-white/75 font-light">
          {text}
          <span className="ml-1 text-white/100 font-bold">
            {formatPrice(price)}
          </span>
        </span>
      </span>
    );
  }

  const checkWidth =
    +windowSize <= 300 && width <= 300 ? "w-40" : "w-56 md:w-96 lg:w-full xl:w-fit";

  return (
    <div
      className="
        w-full max-w-xl justify-between
        flex flex-col h-full lg:py-8 gap-3 text-xs md:text-md"
    >
      <div>
        <Title
          light
          title={productName}
          className=" text-white/75 text-xs md:text-md"
        />
        <Price price={productPrice} className="" />
      </div>
      <Link href={productLink} className={`${checkWidth}`}>
        <Text
          bold
          text={productDescription}
          className="hover:text-white/75 truncate md:text-ellipsis xl:whitespace-normal"
        />
      </Link>
      <div className="text-white text-xs sm:text-md">
        <RenderDetails
          text={"Pague com pix e economize até:"}
          price={moneyToBeSaved}
        />
        <RenderDetails text={"Ou parcele em até 10x:"} price={totalOnCredit} />
      </div>
    </div>
  );
}
