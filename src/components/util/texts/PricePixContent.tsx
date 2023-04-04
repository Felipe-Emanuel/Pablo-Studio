import { normalize } from "@functions/normalized";
import { useCartContext } from "@hooks/useCartContext";

interface PricePixContentProps {
  totalWithPix: number;
  totalOnCredit: number;
}

export function PricePixContent({ totalOnCredit, totalWithPix }: PricePixContentProps) {
  const { formatPrice } = normalize();
  const { moneyToBeSaved } = useCartContext()

  return (
    <div
      className={`
      bg-green-400 rounded-md text-green-600 p-2
      flex justify-between items-center text-sm sm:text-md`}
    >
      <p>
        Poupe{" "}
        <span className="font-bold text-green-900">
          {formatPrice(moneyToBeSaved)}
        </span>{" "}
        com o <span className="font-bold text-green-900">Pix:</span>{" "}
      </p>
      <span className="font-bold text-green-900">
        {formatPrice(totalWithPix)}
      </span>
    </div>
  );
}
