// Para mais ícones, acesse: https://heroicons.com/

type ArrowsIconType = {
  className?: string;
  onClick?: () => void;
}

export function LeftArrowIcon({className, onClick}: ArrowsIconType) {
  return (
    <svg onClick={onClick && onClick} className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>

  );
}

export function RightArrowIcon({className, onClick}: ArrowsIconType) {
  return (
      <svg onClick={onClick && onClick} className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
  );
}
