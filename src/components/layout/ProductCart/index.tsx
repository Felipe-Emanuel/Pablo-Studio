import { useCartContext } from "@hooks/useCartContext";
import { ProductCartImage } from "./ProductCartImage";
import { ProductCartInfo } from "./ProductCartInfo";
import { ProductCartDetails } from "./ProductCartDetails/ProductCartDetails";
import { MobileProductCartDetails } from "./MobileProductCartDetails/MobileProductCartDetails";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { Product } from "@models/Product";

interface ProductCartProps {
  image: string;
  productName: string;
  productDescription: string;
  product: DocumentData & Product;
  cookieUser: string;
  freight: number;
}

export function ProductCart({
  image,
  productName,
  productDescription,
  product,
  cookieUser,
  freight
}: ProductCartProps) {
  const { discount } = useCartContext();
  const [isVisible, setIsVisible] = useState(false);
  const productPrice = product.productPrice;

  const totalOnCredit = productPrice + freight + productPrice * discount;
  const moneyToBeSaved = productPrice * discount;

  const changeRotate = () => setIsVisible((isVisible) => !isVisible);

  useEffect(() => {
    setIsVisible(false);
  }, []);

  return (
    <>
      <div
        onClick={changeRotate}
        className="
        p-3 rounded-md mb-4 bg-placeholder flex
        w-full h-fit justify-between items-center overflow-hidden"
      >
        <div className="flex gap-3">
          <ProductCartImage
            productLink={product.link}
            src={image}
            alt={productName}
          />
          <ProductCartInfo
            productLink={product.link}
            productPrice={product.initialPrice}
            productName={productName}
            productDescription={productDescription}
            moneyToBeSaved={moneyToBeSaved}
            totalOnCredit={totalOnCredit}
          />
        </div>
        <div className="md:ml-8">
          <ProductCartDetails cookieUser={cookieUser} product={product} />
        </div>
      </div>
      <MobileProductCartDetails
        cookieUser={cookieUser}
        onClick={changeRotate}
        isVisible={isVisible}
        product={product}
      />
    </>
  );
}
