import { Flex } from "@container/Flex";
import { useWindow } from "@hooks/useWindow";
import { ProductDescription } from "@layout/selectedCard/productDescription";
import { ThumbSlider } from "@layout/slider/thumbSlider";
import { Title } from "@util/texts/Title";
import { PabloVector } from "@vectores/Vectores";
import { CardInfo } from "./cardInfo";
import { PriceCard } from "./priceCard";
import { Stock } from "./stock";

interface SelectedCardProps {
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
}: SelectedCardProps) {
  const { width } = useWindow();

  const checkWidth = width < 540 ? "h-96" : "h-[25rem]";
  const checkWidthTitleSize = width < 540 ? "lg" : "xl";

  return (
    <Flex>
      <div
        className={`
          relative -left-10 w-screen md:w-fit m-auto
          sm:h-[30rem] xl:h-full md:-left-0 ${checkWidth}`}
      >
        <ThumbSlider images={images} />
      </div>
      <Title
        bold
        size={checkWidthTitleSize}
        title={productName}
        className="lg:hidden truncate sm:text-center pt-4 sm:pt-8 w-full"
      />
      <article
        className="
        flex w-full md:w-fit flex-col gap-4 lg:py-24 xl:py-0
        md:flex-row m-auto md:gap-10 lg:flex-col lg:gap-4"
      >
        <div className="flex flex-col md:w-1/2 lg:w-full z-10">
          <Title
            bold
            size={checkWidthTitleSize}
            title={productName}
            className="hidden lg:block truncate md:pt-8 xl:pt-0 w-full"
          />
          <CardInfo views={productViews} />
          <PriceCard price={productPrice} />
        </div>
        <div className="flex flex-col gap-4 pt-16 sm:pt-4 lg:pt-16 md:w-1/2 lg:w-full z-0">
          <Stock qtd={productQtd} />
          <ProductDescription description={productDescription} />
        </div>
      </article>
        <div>
          <PabloVector className="hidden lg:flex xl:hidden lg:top-[63rem] lg:-right-0" />
        </div>
      <PabloVector className="hidden xl:flex" />
    </Flex>
  );
}
