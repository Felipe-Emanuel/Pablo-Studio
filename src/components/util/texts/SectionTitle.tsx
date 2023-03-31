import { ReactNode } from "react";
import { Title } from "./Title";

interface SectionTitleProps {
  icon: ReactNode;
  text: string;
}

export function SectionTitle({ icon, text }: SectionTitleProps) {
  return (
    <div className="flex gap-2 items-center w-fit h-fit">
      <span>{icon}</span>
      <Title title={text} className="md:text-lg" bold />
    </div>
  );
}
