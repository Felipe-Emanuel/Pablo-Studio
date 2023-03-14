import { ArrowVector } from "../../vectores/Vectores";

interface ArrowButtonProps {
  inverse?: boolean;
  className?: string;
  hover?: boolean;
}

export function ArrowButton({ inverse, className, hover }: ArrowButtonProps) {
  const isInverse = inverse ? "rotate-180" : "";
  const isHover = hover ? "opacity-75 hover:opacity-100" : "";

  return (
    <ArrowVector
      className={`
        transition-opacity w-10 h-10 cursor-pointer
        ${isHover} ${isInverse} ${className}`}
    />
  );
}
