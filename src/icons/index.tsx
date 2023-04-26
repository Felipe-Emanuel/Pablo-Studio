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

export function UpArrowIcon({className, onClick}: ArrowsIconType) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <div className="h-3 w-3 md:h-5 md:w-5 bg-secondary rounded-full animate-pulse" />
  );
}
