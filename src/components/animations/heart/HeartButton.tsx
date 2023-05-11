import { useState, useEffect, useCallback } from "react";
import { HeartFillVector, HeartVector } from "src/components/vectores/Vectores";
import { DocumentData } from "firebase/firestore";
import { Product } from "@models/Product";
import { changeLikeState, getProductLiked } from "@database/productLiked";
import { useCartContext } from "@hooks/useCartContext";
import { addUser } from "@database/clientData";
import { parseCookies } from "nookies";

interface HeartButtonProps {
  className?: string;
  product: DocumentData | Product;
}

export function HeartButton({ className, product }: HeartButtonProps) {
  const { setIsLoading } = useCartContext();
  const [isActive, setIsActive] = useState(false);
  const [showHeartFill, setShowHeartFill] = useState(false);

  const getProducts = useCallback(async () => {
    await getProductLiked(product).then((resp) => {
      const isLiked = resp && resp[0].isLiked;
      setShowHeartFill(isLiked);

    });
  }, [setIsLoading, product]);

  const setProductsLiked = useCallback(async () => {
    setIsLoading(true);

    await changeLikeState(product).then(() => {setIsLoading(false)});
  }, [setIsLoading, product]);

  useEffect(() => {
    getProducts();
  }, [getProducts, isActive]);

  const setHeart = async () => {
    await setProductsLiked();
    await addUser(product, !showHeartFill);

    setIsActive((isActive) => !isActive);
  };

  return (
    <button
      className={`
        relative w-14 h-14 flex justify-center
        items-center pointer-events-none ${className}`}
    >
      <span onClick={setHeart} className="absolute pointer-events-auto hover:animate-heartWiggle">
        {showHeartFill ? <HeartFillVector /> : <HeartVector />}
      </span>
    </button>
  );
}
