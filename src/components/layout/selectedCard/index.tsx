import { Flex } from "@container/Flex";
import { ProductDescription } from "@layout/selectedCard/productDescription";
import { ThumbSlider } from "@layout/slider/thumbSlider";
import { Title } from "@util/texts/Title";
import { CardInfo } from "./cardInfo";
import { PriceCard } from "./priceCard";
import { Stock } from "./stock";

export interface SelectedCardProps {
  id: number;
  images: string[];
  productName: string;
  productDescription: string;
  productPrice: string;
  productViews: number;
  productQtd: number;
}

export function SelectedCard({
  images,
  productName,
  productDescription,
  productViews,
  productPrice,
  productQtd,
  id
}: SelectedCardProps) {
  const product = {
    id,
    images,
    productName,
    productDescription,
    productViews,
    productPrice,
    productQtd,
  };

  return (
    <Flex>
      <div
        className={`
          relative -left-10 w-screen md:w-fit m-auto xl:h-full md:-left-0 h-fit sm:h-[30rem]`}
      >
        <ThumbSlider images={images} />
      </div>
      <Title
        bold
        title={productName}
        className="lg:hidden truncate sm:text-center pt-4 sm:pt-8 w-full text-xl sm:text-2xl "
      />
      <article
        className="
        flex w-full md:w-fit flex-col gap-4 lg:py-24 xl:py-0
        md:flex-row m-auto md:gap-10 lg:flex-col lg:gap-4"
      >
        <div className="flex flex-col md:w-1/2 lg:w-full z-10">
          <Title
            bold
            title={productName}
            className="hidden lg:block truncate md:pt-8 xl:pt-0 w-full text-xl sm:text-2xl "
          />
          <CardInfo views={productViews} />
          <PriceCard price={productPrice} product={product} />
        </div>
        <div className="flex flex-col gap-4 pt-16 sm:pt-4 lg:pt-16 md:w-1/2 lg:w-full z-0">
          <Stock qtd={productQtd} />
          <ProductDescription description={productDescription} />
        </div>
      </article>
    </Flex>
  );
}
