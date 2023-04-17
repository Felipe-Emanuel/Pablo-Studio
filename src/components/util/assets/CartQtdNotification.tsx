// import { localStorageProduct } from "@functions/Cookies";
import { useEffect } from "react";

interface CartQtdNotificationProps {
  className?: string;
}

export function CartQtdNotification({ className }: CartQtdNotificationProps) {
  // const { cookieCart, getCartFromCookie } = localStorageProduct();

  useEffect(() => {
    // getCartFromCookie();
  }, []);

  return (
    <>
      {/* {cookieCart.length > 0 && (
        <span
          className={`
              w-4 h-4 rounded-full bg-tertiary pointer-events-none
              text-white absolute -right-1 -top-1 text-xs items-center
              justify-start text-center ring-1 ring-white
              ${className}
            `}
        >
          <span className="flex justify-center relative ">
            {cookieCart.length}
          </span>
        </span>
      )} */}
    </>
  );
}
