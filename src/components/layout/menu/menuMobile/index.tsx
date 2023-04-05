import { Hamburguer } from "@animations/hamburguer";
import { MenuItem } from "@menu/menuItem";
import { CartQtdNotification } from "@util/assets/CartQtdNotification";
import { AccessButton } from "@util/buttons/AccessButton";
import { SearchInput } from "@util/inputs/SearchInput";
import { PablosSignature } from "@vectores/Vectores";

interface MenuMobileProps {
  isClosed: boolean;
  isSearch: () => void;
  openMenu: () => void;
}

export function MenuMobile({ isClosed, isSearch, openMenu }: MenuMobileProps) {
  return (
    <>
      <Hamburguer onClick={openMenu} isClose={isClosed} />
      <div className="absolute right-10 top-7">
        <SearchInput onClick={isSearch} />
      </div>
      {isClosed && (
        <div className="flex flex-col">
          <nav
            className="
          relative transition-all flex top-16 justify-center items-center
          gap-x-14 gap-y-4 sm:gap-16 z-50 w-full sm:w-96 mx-auto flex-wrap"
          >
            <MenuItem onClick={openMenu} href="/" text="Início" />
            <MenuItem onClick={openMenu} href="/about" text="Sobre" />
            <MenuItem onClick={openMenu} href="/budget" text="Orçamento" />
            <MenuItem onClick={openMenu} href="/profile" text="Perfil" />
            <div className="relative">
              <CartQtdNotification className="-right-3 -top-2" />
              <MenuItem onClick={openMenu} href="/cart" text="Carrinho" />
            </div>
            <AccessButton />
          </nav>
          <PablosSignature className="relative top-10" />
        </div>
      )}
    </>
  );
}
