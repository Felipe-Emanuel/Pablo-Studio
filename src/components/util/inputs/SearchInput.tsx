import { useWindow } from "@hooks/useWindow";
import { SearchVector } from "@vectores/Vectores";
import { FormEvent, useEffect, useRef, useState } from "react";

interface SearchInputProps {
  onClick?: () => void;
}

export function SearchInput({onClick}: SearchInputProps) {
  const { width } = useWindow()
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isVisible ? inputRef.current?.focus() : false;
  }, [isVisible]);

  useEffect(() => {
    width <= 935 && (setIsVisible(false), inputRef.current?.blur())
  }, [width])

  const openSearch = (e: FormEvent) => {
    e.preventDefault();
    setIsVisible((isVisible) => !isVisible);

    setValue("");
    inputRef.current?.blur();
  };


  const checkVisible = isVisible ? `w-44 sm:w-64 xl:w-96` : "w-10";


  return (
    <div onClick={onClick ? () => onClick() : undefined} className="relative w-96 flex items-center justify-end z-10">
      <form className="absolute flex -right-10">
        <input
          ref={inputRef}
          placeholder={isVisible ? "Buscar..." : ""}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          className={`
            placeholder:text-white text-white text-sm border border-tertiary bg-transparent
            transition-all duration-300 outline-none px-2 rounded-full
            ${checkVisible}`}
        />
        <button
          type="submit"
          onClick={openSearch}
          className="
            relative rounded-full right-10 z-10
            transition-all hover:opacity-75 h-10 w-10 flex
            items-center justify-center"
        >
          <SearchVector />
        </button>
      </form>
    </div>
  );
}
