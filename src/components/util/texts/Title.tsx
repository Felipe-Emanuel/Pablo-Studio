import clsx from "clsx";

interface TitleProps {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
  title?: string ;
  className?: string;
  light?: boolean;
  bold?: boolean;
  medium?: boolean;
}

export function Title({ title, className, as, bold, medium, light }: TitleProps) {
  const Comp = as ?? "h1";
  const isLight = light ? "font-light" : 'font-normal';
  const isBold = bold ? "font-bold" : 'font-normal';
  const isMedium = medium ? "font-bold" : 'font-normal';

  const classes = clsx(
    "transition-all",
    "font-sans",
    "text-white",
    isLight,
    isBold,
    isMedium,
    className
  );

  return (
    <Comp className={classes}>
      {title}
    </Comp>
  );
}
