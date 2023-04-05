import { useCartContext } from "@hooks/useCartContext";

interface CartQtdNotificationProps {
  className?: string;
}

export function CartQtdNotification({ className }: CartQtdNotificationProps) {
  const { state } = useCartContext();

  return (
    <>
      {state.cart.length > 0 && (
        <span
          className={`
              w-4 h-4 rounded-full bg-tertiary pointer-events-none
              text-white absolute -right-1 -top-1 text-xs items-center
              justify-start text-center ring-1 ring-white
              ${className}
            `}
        >
          <span className="flex justify-center relative ">
            {state.cart.length}
          </span>
        </span>
      )}
    </>
  );
}
