import { ReactNode } from "react";

interface TextProps {
  className?: string;
  text: ReactNode;
  title?: string;
  as?: "span";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  light?: boolean;
  bold?: boolean;
  medium?: boolean;
}

export function Text({ text, as, className, size, bold, medium, light }: TextProps) {
  const Comp = as ?? "p";
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
      {text}
    </Comp>
  );
}
