import { MenuItem } from "@menu/menuItem";
import { MenuVector } from "@vectores/Vectores";

export function Navigation() {
  return (
    <div className="flex w-80 xl:w-96">
      <div className="relative top-14 xl:top-16 z-0">
        <MenuVector />
      </div>
      <nav className="transition-all flex gap-16 absolute left-10 xl:left-16 top-4 z-40 w-fit">
        <MenuItem href="/" text="Início" />
        <MenuItem href="/about" text="Sobre" />
        <MenuItem href="/budget" text="Orçamento" />
      </nav>
    </div>
  );
}
