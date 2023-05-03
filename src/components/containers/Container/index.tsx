import { useCartContext } from "@hooks/useCartContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { parseCookies, setCookie } from "nookies";

interface ContainerProps {
  children: ReactNode;
  pageTitle: string;
  style?: boolean;
}

export function Container({ children, pageTitle, style }: ContainerProps) {
  const { popUp } = useCartContext();

  useEffect(() => {
    const cookies = parseCookies();

    const verifyGuestCookie = () => {
      const guestId = uuidv4();
      if (cookies._guest) {
        return;
      }

      setCookie({}, "_guest", guestId, {
        maxAge: 86400 * 7,
        path: "/",
      });
    };

    verifyGuestCookie();
  }, []);

  const effect = {
    background:
      "linear-gradient(128.53deg, #121214 0%, #121214 55.16%, #0B292B 74.3%, #121214 99.69%)",
  };
  const isPopUp = popUp ? "overflow-hidden" : "overflow-y-auto";

  const router = useRouter();

  const padding =
    router.asPath === "/cart" || router.asPath === "/" ? "p-1 sm:p-10" : "p-10";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main
        style={style ? effect : {}}
        className={`relative pt-16 lg:pt-24 ${padding} w-screen h-screen
          flex flex-col gap-4 bg-dark overflow-x-hidden
          ${isPopUp} `}
      >
        {children}
      </main>
    </>
  );
}
