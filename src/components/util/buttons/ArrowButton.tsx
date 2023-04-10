import { ArrowVector } from "../../vectores/Vectores";

interface ArrowButtonProps {
  inverse?: boolean;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function ArrowButton({ inverse, className, hover, onClick }: ArrowButtonProps) {
  const isInverse = inverse ? "rotate-180" : "";
  const isHover = hover ? "opacity-75 hover:opacity-100" : "";

  return (
      <ArrowVector
        onClick={onClick}
        className={`
        absolute
        transition-all w-10 h-10 cursor-pointer
        ${isHover} ${isInverse} ${className}`}
      />
  );
}
