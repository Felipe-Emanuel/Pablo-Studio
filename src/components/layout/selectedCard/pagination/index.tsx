import { useState, useEffect } from "react";
import { ArrowButton } from "@util/buttons/ArrowButton";
import { useWindow } from "@hooks/useWindow";
import { DataType } from "@layout/slider/productSlider";
import { useRouter } from "next/router";

interface PaginationProps {
  id: number;
  product: DataType[];
  selectedCard: DataType[];
}

export function Pagination({ id, product, selectedCard }: PaginationProps) {
  const { width, windowSize } = useWindow();
  const router = useRouter();
  const [prevWidth, setPrevWidth] = useState(windowSize.width);
  const [lettersToBeShowed, setLettersToBeShowed] = useState(16);
  const [nextProductTitle, setNextProductTitle] = useState("");
  const [previousProductTitle, setPreviousProductTitle] = useState("");
  const [isNextProductNameShowed, setIsNextProductNameShowed] = useState(false);
  const [isPreviousProductNameShowed, setIsPreviousProductNameShowed] =
    useState(false);

  useEffect(() => {
    if (width < prevWidth) {
      setLettersToBeShowed(lettersToBeShowed - 0.5);
    } else if (width > prevWidth) {
      setLettersToBeShowed(lettersToBeShowed + 0.5);
    }
    setPrevWidth(width);
  }, [width, prevWidth]);

  const showNextAndPreviousProductName = () => {
    id > 0 && id < product.length
      ? setPreviousProductTitle(product[id - 1].productName)
      : setPreviousProductTitle("");

    id >= 0 && id < product.length - 1
      ? setNextProductTitle(product[id + 1].productName)
      : setNextProductTitle("");
  };

  const nextProduct = async () => {
    const nextProductId = id + 1;
    if (nextProductId < product.length) {
      await router.push(`/products/${nextProductId}`);
    }
  };

  const previousProduct = async () => {
    const previousProductId = id - 1;
    if (previousProductId >= 0) {
      await router.push(`/products/${previousProductId}`);
    }
  };

  useEffect(() => {
    if (id && product.some((p) => p.id === +id)) {
      showNextAndPreviousProductName();
    }
  }, [selectedCard, id, product]);

  const paginationButtonClasses =
    "disabled:opacity-25 disabled:pointer-events-none w-full";

  const paginationDivClasses = `absolute w-0 bg-white/25 transition-all
  hidden top-1/2 md:flex opacity-50 hover:opacity-100`;

  const isNextProductShowed = isNextProductNameShowed
    ? "translate-x-0 opacity-100"
    : "translate-x-96 opacity-0";
  const isPreviousProductShowed = isPreviousProductNameShowed
    ? "translate-x-0 opacity-100"
    : "-translate-x-96 opacity-0";

  return (
    <>
      <div
        onMouseEnter={() =>
          setIsPreviousProductNameShowed(
            (isPreviousProductNameShowed) => !isPreviousProductNameShowed
          )
        }
        onMouseLeave={() =>
          setIsPreviousProductNameShowed(
            (isPreviousProductNameShowed) => !isPreviousProductNameShowed
          )
        }
        className={`${paginationDivClasses} left-0`}
      >
        <button
          onClick={() => {
            id > 0 && previousProduct();
          }}
          disabled={id === 0}
          className={paginationButtonClasses}
        >
          <ArrowButton inverse className="z-20" />
        </button>
        {previousProductTitle && (
          <span
            className={`hidden z-0 truncate pointer-events-none 2xl:flex absolute top-1.5
              text-white left-10 transition-all duration-500 ${isPreviousProductShowed}`}
          >
            {previousProductTitle.slice(0, lettersToBeShowed)}...
          </span>
        )}
      </div>
      <div
        onMouseEnter={() =>
          setIsNextProductNameShowed(
            (isNextProductNameShowed) => !isNextProductNameShowed
          )
        }
        onMouseLeave={() =>
          setIsNextProductNameShowed(
            (isNextProductNameShowed) => !isNextProductNameShowed
          )
        }
        className={`${paginationDivClasses} right-10`}
      >
        <button
          disabled={id === +product?.length - 1}
          onClick={nextProduct}
          className={`${paginationButtonClasses}`}
        >
          <ArrowButton className="absolute -right-10 -top-2 z-20" />
        </button>
        {nextProductTitle && (
          <span
            className={`absolute z-0 truncate pointer-events-none hidden 2xl:flex
              text-white right-1 transition-all duration-500 ${isNextProductShowed}`}
          >
            {nextProductTitle.slice(0, lettersToBeShowed)}...
          </span>
        )}
      </div>
    </>
  );
}
