import { setCookie } from "nookies";

export function Cookies() {
  const SetCookie = (cookieName: string, newCookieObj: {}) => {
    setCookie({}, cookieName, JSON.stringify(newCookieObj), {
      maxAge: 86400 * 7,
      path: "/",
    });
  };

  return {
    SetCookie,
  };
}
