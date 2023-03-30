import { useMobileMenu } from "@hooks/useMobile";
import { MenuMobile } from "@menu/menuMobile";
import { Navigation } from "@menu/navegation";
import { Avatar } from "@util/assets/Avatar";
import { AccessButton } from "@util/buttons/AccessButton";
import { CartButton } from "@util/buttons/CartButton";
import { SearchInput } from "@util/inputs/SearchInput";
import Link from "next/link";

export function NavBar() {
const { openMenu, isMenuOpen } = useMobileMenu()

  const style = {
    background:
      "linear-gradient(180deg, #000 0%, rgba(170, 170, 170, 0) 100%)",
  };

  const dropDownMenu = isMenuOpen ? 'h-screen overflow-hidden' : 'h-16 overflow-y-auto overflow-x-hidden'

  return (
    <>
      <div
        style={style}
        className="absolute z-50 justify-between items-center w-full h-16 hidden min-[935px]:flex"
      >
        <Navigation />

        <div className="relative flex gap-4 items-center justify-end">
          <SearchInput />
          <Avatar
            alt="a"
            as={Link}
            href="/profile"
            img="data:image/jpeg;base64,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"
          />
          <CartButton />
          <AccessButton />
        </div>
      </div>
      <div
        style={style}
        className={`absolute flex z-50 transition-all duration-500 ease-in-out
          w-full ${dropDownMenu} min-[935px]:hidden`}>
        <MenuMobile isClosed={isMenuOpen} openMenu={openMenu}/>
      </div>
    </>
  );
}
