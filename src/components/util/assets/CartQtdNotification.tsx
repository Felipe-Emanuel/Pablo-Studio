// import { localStorageProduct } from "@functions/Cookies";
import { useCartContext } from "@hooks/useCartContext";
import { Product } from "@models/Product";
import { DocumentData } from "firebase/firestore";
import { parseCookies } from "nookies";
import { useEffect,useState } from "react";
import { getProductCart } from "@database/clientCart";

interface CartQtdNotificationProps {
  className?: string;
}

export function CartQtdNotification({ className }: CartQtdNotificationProps) {
  const { isLoading } = useCartContext();
  const [productCart, setProductCart] = useState<DocumentData[] & Product[]>([]);

  const cookies = parseCookies()
  const guestId = cookies._guest

  useEffect(() => {
    const reloadProduct = async () => {
      //@ts-ignore
      await getProductCart(guestId).then((resp) => setProductCart(resp));
    };
    reloadProduct();
  }, [isLoading]);

  return (
    <>
      {productCart && productCart.length && (
        <span
          className={`
              w-4 h-4 rounded-full bg-tertiary pointer-events-none
              text-white absolute -right-1 -top-1 text-xs items-center
              justify-start text-center ring-1 ring-white
              ${className}
            `}
        >
          <span className="flex justify-center relative ">
            {productCart.length}
          </span>
        </span>
      )}
    </>
  );
}
