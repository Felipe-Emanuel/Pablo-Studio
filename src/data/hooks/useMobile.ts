import { useState, useEffect } from "react";
import { useWindow } from "./useWindow";

export function useMobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindow();

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    width > 935 && setIsMenuOpen(false);
  }, [width]);

  return {
    openMenu,
    isMenuOpen,
  };
}
