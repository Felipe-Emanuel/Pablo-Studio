import { SearchVector } from "@vectores/Vectores";
import { FormEvent, useEffect, useRef, useState } from "react";

export function SearchInput() {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isVisible ? inputRef.current?.focus() : false;
  }, [isVisible]);

  const openSearch = (e: FormEvent) => {
    e.preventDefault();
    setIsVisible((isVisible) => !isVisible);

    setValue("");
    inputRef.current?.blur();
  };

  const checkVisible = isVisible ? "w-48 sm:w-72 xl:w-96" : "w-10";

  return (
    <div className="relative w-full">
      <form className="absolute right-0 flex">
        <input
          ref={inputRef}
          placeholder={isVisible ? "Buscar..." : ""}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          className={`
            text-white text-sm border border-tertiary bg-transparent
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
