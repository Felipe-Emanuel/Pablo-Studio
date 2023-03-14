import { LogOutButton } from "@animations/logOut/LogOutButton";
import { MenuItem } from "@menu/menuItem";

export function AccessButton() {
  const hasUser = true ? true : false;

  function renderAcessButtons() {
    return (
      <MenuItem href="/auth" text="Entrar"/>
    )
  }

  return (
    <div className="w-fit h-7 flex items-center">
      {hasUser ? <LogOutButton /> : renderAcessButtons()}
    </div>
  );
}
