import { MenuItem } from "@menu/menuItem";
import { MenuVector } from "@vectores/Vectores";

export function Navigation() {
  return (
    <div className="relative flex w-fit">
      <div className="relative -top-2 z-0">
        <MenuVector />
      </div>
      <nav className="flex gap-16 absolute top-7 left-16 z-40 w-fit">
        <MenuItem href="/" text="Início" />
        <MenuItem href="/about" text="Sobre" />
        <MenuItem href="/budget" text="Orçamento" />
      </nav>
    </div>
  );
}
