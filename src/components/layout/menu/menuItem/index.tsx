import { Text } from "@util/texts/Text";
import Link from "next/link";
import { useRouter } from "next/router";

interface MenuItemProps{
  href: string
  text: string
}

export function MenuItem({href, text}: MenuItemProps) {
  const path = useRouter().asPath

  const checkPath = path === href ? 'text-white/75' : ''

  return (
    <Link href={href} className="w-fit h-fit">
      <Text bold text={text} className={`hover:text-white/75 transition-colors ${checkPath}`}/>
    </Link>
  )
}
