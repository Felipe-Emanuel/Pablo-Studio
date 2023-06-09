import { normalize } from "@functions/normalized";
import { useCartContext } from "@hooks/useCartContext";

interface PricePixContentProps {
  totalWithPix: number;
  total: number
}

export function PricePixContent({ totalWithPix, total }: PricePixContentProps) {
  const { formatPrice } = normalize();
  const { discount } = useCartContext()

  return (
    <div
      className={`
      bg-green-400 rounded-md text-green-600 p-2
      flex justify-between items-center text-sm sm:text-md`}
    >
      <p className="w-32 sm:w-full">
        Poupe{" "}
        <span className="font-bold text-green-900">
          {formatPrice(total * discount)}
        </span>{" "}
        com o <span className="font-bold text-green-900">Pix:</span>{" "}
      </p>
      <span className="font-bold text-green-900">
        {formatPrice(totalWithPix)}
      </span>
    </div>
  );
}
