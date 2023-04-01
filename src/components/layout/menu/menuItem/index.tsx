import { useMobileMenu } from "@hooks/useMobile";
import { Text } from "@util/texts/Text";
import Link from "next/link";
import { useRouter } from "next/router";

interface MenuItemProps {
  href: string;
  text: string;
  className?: string;
  onClick?: () => void;
}

export function MenuItem({ href, text, className, onClick }: MenuItemProps) {
  const path = useRouter().asPath;

  const checkPath = path === href ? "text-white/75 cursor-default" : "";

  return (
    <Link
      onClick={onClick && (() => onClick())}
      href={href}
      className="w-fit h-fit"
    >
      <Text
        bold
        text={text}
        className={`hover:text-white/75 transition-colors ${checkPath} ${className}`}
      />
    </Link>
  );
}
