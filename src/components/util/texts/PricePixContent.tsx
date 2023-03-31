import { normalize } from "@functions/normalized";

interface PricePixContentProps {
  totalWithPix: number;
  totalOnCredit: number;
}

export function PricePixContent({ totalOnCredit, totalWithPix }: PricePixContentProps) {
  const { formatPrice } = normalize();
  const moneyToBeSaved = totalOnCredit - totalWithPix;

  return (
    <div
      className={`
      bg-green-green-400 rounded-md text-green-green-600 p-2
      flex justify-between items-center`}
    >
      <p>
        Poupe{" "}
        <span className="font-bold text-green-green-900">
          {formatPrice(moneyToBeSaved)}
        </span>{" "}
        com o <span className="font-bold text-green-green-900">Pix:</span>{" "}
      </p>
      <span className="font-bold text-green-green-900">
        {formatPrice(totalWithPix)}
      </span>
    </div>
  );
}
