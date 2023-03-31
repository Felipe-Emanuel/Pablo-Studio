interface TitleProps {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  title?: string;
  className?: string;
  light?: boolean;
  bold?: boolean;
  medium?: boolean;
}

export function Title({
  title,
  className,
  size,
  as,
  bold,
  medium,
  light,
}: TitleProps) {
  const Comp = as ?? "h1";
  const textSize = size ?? "sm";
  const isLight = light ? "font-light" : "";
  const isBold = bold ? "font-bold" : "";
  const isMedium = medium ? "font-bold" : "";

  return (
    <Comp
      className={`transition-all
          font-sans text-${textSize} text-white
          ${isLight}
          ${isMedium}
          ${isBold}
          ${className}
        `}
    >
      {title}
    </Comp>
  );
}
