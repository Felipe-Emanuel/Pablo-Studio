import { Hamburguer } from "@animations/hamburguer";
import { MenuItem } from "@menu/menuItem";
import { PablosSignature } from "@vectores/Vectores";

interface MenuMobileProps {
  isClosed: boolean;
  openMenu: () => void;
}

export function MenuMobile({ isClosed, openMenu }: MenuMobileProps) {

  return (
    <>
      <Hamburguer onClick={openMenu} isClose={isClosed} />
      {isClosed &&
      <div className="flex flex-col">
        <nav className="relative transition-all flex top-10 justify-center gap-14 sm:gap-16 z-50 w-full">
          <MenuItem onClick={openMenu} href="/" text="Início" />
          <MenuItem onClick={openMenu} href="/about" text="Sobre" />
          <MenuItem onClick={openMenu} href="/budget" text="Orçamento" />
        </nav>
        <PablosSignature className="relative top-10"/>
      </div>
      }
    </>
  );
}
