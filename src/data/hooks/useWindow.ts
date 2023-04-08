import { useEffect, useState } from "react";

export interface WindowSize {
  width: number;
}

export const useWindow = () => {
  const [width, setWidth] = useState(0);
  const [windowSize, setWindowSize] = useState<WindowSize>({width: 0})

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth });
    }

    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth });
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return {
    width,
    windowSize
  };
};



