import { useWindow } from "@hooks/useWindow";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";


interface LogoProps {
  isMobile?: boolean
  isSearch?: boolean
  isNavBar?: boolean
  href: string
  className?: string
}

  export function Logo ({isMobile, isSearch, isNavBar, href, className}: LogoProps) {
    const { width } = useWindow();

    const mobile = isMobile ? width <= 935 : width >= 935;

    const navBarStyles = isNavBar && `pt-2.5 flex items-center justify-center w-fit
    flex-1 absolute left-1/2 transform -translate-x-1/2 z-50`;

    function renderLogo () {
      return (
        <>
          <Link
            href={href}
            className={`${navBarStyles} ${className}`}
          >
            <Image
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMDYutBwADuQGRo8ohBwAAAABJRU5ErkJggg=="
              src={logo}
              alt="Pablo Studio 3D Logo"
              height={750}
              width={750}
              quality={100}
              className="w-10 h-10 justify-center relative rounded-full"
            />
          </Link>
        </>
      )
    }

    return (
      <>
        {isSearch ? (
          <>
            {!isSearch && mobile && (
              renderLogo()
            )}
          </>
        ) : renderLogo()}
      </>
    );
  };
