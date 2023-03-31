import clsx from "clsx";
import { ReactNode } from "react";

interface TextProps {
  className?: string;
  text: ReactNode;
  title?: string;
  as?: "span";
  light?: boolean;
  bold?: boolean;
  medium?: boolean;
}

export function Text({ text, as, className, bold, medium, light }: TextProps) {
  const Comp = as ?? "p";
  const isLight = light ? "font-light" : "";
  const isBold = bold ? "font-bold" : "";
  const isMedium = medium ? "font-bold" : "";

  const classes = clsx(
    "transition-all",
    "font-sans",
    "text-white",
    isLight,
    isBold,
    isMedium,
    className
  );

  return <Comp className={classes}>{text}</Comp>;
}
