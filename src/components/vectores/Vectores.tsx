export function MenuVector() {
  return (
    <svg
      width="396"
      height="214"
      viewBox="0 0 396 214"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-96 h-56"
    >
      <path
        d="M24.1268 -0.5C29.861 25.3037 35.1613 69.7805 36.6506 95.9928C38.0631 120.852 37.1849 146.059 36.0753 170.914C35.5646 182.355 34.4894 194.236 30.4994 205.078C29.7328 207.161 27.1632 212.376 24.1268 212.159C21.3955 211.964 17.9322 208.208 15.9842 206.538C11.9444 203.076 10.2973 198.251 8.37253 193.439C4.51497 183.795 2 173.187 2 162.772C2 144.903 3.28441 127.614 9.34611 110.641C14.5717 96.0092 18.6508 83.9986 33.0661 75.9901C41.8711 71.0984 51.429 68.6146 60.9459 65.5905C74.0998 61.4108 87.5992 61.2039 101.128 59.218C117.312 56.8424 134.23 57.1805 150.56 55.6334C177.935 53.04 205.986 55.2352 233.491 55.2352C258.139 55.2352 282.791 55.1231 307.439 55.2352C336.293 55.3663 365.011 58.4214 393.91 58.4214"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PabloVector() {
  return (
    <svg width="285" height="94" viewBox="0 0 285 94" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-72 h-24">
        <path d="M57 37C57.3325 41.3642 62.0257 62.4872 57 65" stroke="white" strokeLinecap="round"/>
        <path d="M1 29C17.3924 21.4729 78.4668 -18.4347 90.7778 13.2223C102.26 42.7488 70.5713 47 49 47" stroke="white" strokeLinecap="round"/>
        <path d="M87.0001 55.0001C87.8545 54.8652 107.786 51.5984 97.5556 51.1112C94.2286 50.9528 65.1124 50.5213 75.3334 52.1112C83.7862 53.4261 93.5265 55.5724 102.111 55.0001C105.599 54.7676 111.217 48.2628 114.111 46.3334C117.519 44.0616 117 48.463 117 50.6667C117 52.7207 119.966 46.2497 121.778 45.4445C123.598 44.6356 123 50.8037 123 51.6667C123 52.0278 124.597 50.7422 125.889 51.1112C127.647 51.6136 126.379 53.5966 127.444 54.5556C129.132 56.0744 132.417 53.8907 133 57.0001C133.555 59.9606 139.196 57.0001 142 57.0001C146.907 57.0001 143.357 47.9644 147 51.0001C151.108 54.4235 156.594 52.0625 161 55.0001" stroke="white" strokeLinecap="round"/>
        <path d="M169 37C170.843 37.2303 170.325 37.6491 171 39" stroke="white" strokeLinecap="round"/>
        <path d="M135 15C172.904 8.35017 215.273 5.10575 253.444 10.7778C263.123 12.216 278.04 15.8617 283.222 25.6666C288.428 35.5155 271.917 52.3918 266 57.7778C240.351 81.1251 204.229 93.4132 169.889 92.6666C166.709 92.5975 141.167 90.6654 145 83" stroke="white" strokeLinecap="round"/>
        <path d="M281 65H277" stroke="white" strokeLinecap="round"/>
    </svg>

  );
}

type ArrowVectorType = {
  className: string
}
export function ArrowVector({className}: ArrowVectorType) {
  return (
    <svg className={className} width="38" height="100" viewBox="0 0 38 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.52018 4C9.44643 13.2625 18.2356 24.441 22.0807 32.9626C24.9832 39.3953 28.1355 46.5706 32.9626 51.8804C37.0846 56.4146 27.7719 63.9256 25.0942 66.9477C16.939 76.1514 10.7605 85.7695 4 95.9103" stroke="white" strokeWidth="7.53363" strokeLinecap="round"/>
    </svg>
  );
}

export function HeartVector() {
  return (
    <svg className="w-5 h-5" width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.25 0C17.6688 0 15.4088 1.11 14 2.98625C12.5912 1.11 10.3313 0 7.75 0C5.69528 0.00231592 3.72539 0.819575 2.27248 2.27248C0.819575 3.72539 0.00231592 5.69528 0 7.75C0 16.5 12.9738 23.5825 13.5262 23.875C13.6719 23.9533 13.8346 23.9943 14 23.9943C14.1654 23.9943 14.3281 23.9533 14.4737 23.875C15.0262 23.5825 28 16.5 28 7.75C27.9977 5.69528 27.1804 3.72539 25.7275 2.27248C24.2746 0.819575 22.3047 0.00231592 20.25 0ZM14 21.85C11.7175 20.52 2 14.4613 2 7.75C2.00198 6.22561 2.60842 4.76423 3.68633 3.68633C4.76423 2.60842 6.22561 2.00198 7.75 2C10.1812 2 12.2225 3.295 13.075 5.375C13.1503 5.55841 13.2785 5.71528 13.4432 5.82569C13.6079 5.93609 13.8017 5.99503 14 5.99503C14.1983 5.99503 14.3921 5.93609 14.5568 5.82569C14.7215 5.71528 14.8497 5.55841 14.925 5.375C15.7775 3.29125 17.8188 2 20.25 2C21.7744 2.00198 23.2358 2.60842 24.3137 3.68633C25.3916 4.76423 25.998 6.22561 26 7.75C26 14.4513 16.28 20.5188 14 21.85Z" fill="#FF0000"/>
    </svg>
  );
}

export function EyeVector() {
  return (
    <svg className="w-5 h-5" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.9138 15.595C30.87 15.4963 29.8113 13.1475 27.4575 10.7937C24.3213 7.6575 20.36 6 16 6C11.64 6 7.67875 7.6575 4.5425 10.7937C2.18875 13.1475 1.125 15.5 1.08625 15.595C1.02939 15.7229 1.00002 15.8613 1.00002 16.0012C1.00002 16.1412 1.02939 16.2796 1.08625 16.4075C1.13 16.5062 2.18875 18.8538 4.5425 21.2075C7.67875 24.3425 11.64 26 16 26C20.36 26 24.3213 24.3425 27.4575 21.2075C29.8113 18.8538 30.87 16.5062 30.9138 16.4075C30.9706 16.2796 31 16.1412 31 16.0012C31 15.8613 30.9706 15.7229 30.9138 15.595ZM16 24C12.1525 24 8.79125 22.6012 6.00875 19.8438C4.86706 18.7084 3.89574 17.4137 3.125 16C3.89553 14.5862 4.86687 13.2915 6.00875 12.1562C8.79125 9.39875 12.1525 8 16 8C19.8475 8 23.2088 9.39875 25.9913 12.1562C27.1352 13.2912 28.1086 14.5859 28.8813 16C27.98 17.6825 24.0538 24 16 24ZM16 10C14.8133 10 13.6533 10.3519 12.6666 11.0112C11.6799 11.6705 10.9109 12.6075 10.4567 13.7039C10.0026 14.8003 9.88378 16.0067 10.1153 17.1705C10.3468 18.3344 10.9182 19.4035 11.7574 20.2426C12.5965 21.0818 13.6656 21.6532 14.8295 21.8847C15.9933 22.1162 17.1997 21.9974 18.2961 21.5433C19.3925 21.0892 20.3295 20.3201 20.9888 19.3334C21.6481 18.3467 22 17.1867 22 16C21.9984 14.4092 21.3657 12.884 20.2408 11.7592C19.116 10.6343 17.5908 10.0017 16 10ZM16 20C15.2089 20 14.4355 19.7654 13.7777 19.3259C13.1199 18.8864 12.6072 18.2616 12.3045 17.5307C12.0017 16.7998 11.9225 15.9956 12.0769 15.2196C12.2312 14.4437 12.6122 13.731 13.1716 13.1716C13.731 12.6122 14.4437 12.2312 15.2196 12.0769C15.9956 11.9225 16.7998 12.0017 17.5307 12.3045C18.2616 12.6072 18.8864 13.1199 19.3259 13.7777C19.7654 14.4355 20 15.2089 20 16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20Z" fill="white"/>
    </svg>
  );
}

export function CartVector() {
  return (
    <svg className="w-4 h-4 hover:scale-110 transition-transform duration-300" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.7675 5.35875C26.6736 5.24642 26.5562 5.15607 26.4236 5.09408C26.291 5.03209 26.1464 4.99998 26 5H5.835L5.22375 1.6425C5.14003 1.18167 4.89723 0.764838 4.53767 0.464677C4.17812 0.164517 3.72462 6.7693e-05 3.25625 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H3.25L6.445 19.5362C6.53911 20.0563 6.76895 20.5423 7.11125 20.945C6.63881 21.3863 6.29781 21.9498 6.12607 22.573C5.95433 23.1962 5.95856 23.8549 6.13829 24.4759C6.31801 25.0968 6.66622 25.6559 7.14428 26.0911C7.62235 26.5263 8.2116 26.8205 8.8467 26.9412C9.48179 27.062 10.1379 27.0044 10.7423 26.775C11.3467 26.5456 11.8758 26.1533 12.2708 25.6416C12.6658 25.1299 12.9114 24.5187 12.9804 23.8759C13.0493 23.2332 12.9388 22.5838 12.6613 22H18.3388C18.115 22.4684 17.9993 22.981 18 23.5C18 24.1922 18.2053 24.8689 18.5899 25.4445C18.9744 26.0201 19.5211 26.4687 20.1606 26.7336C20.8001 26.9985 21.5039 27.0678 22.1828 26.9327C22.8617 26.7977 23.4854 26.4644 23.9749 25.9749C24.4644 25.4854 24.7977 24.8617 24.9327 24.1828C25.0678 23.5039 24.9985 22.8001 24.7336 22.1606C24.4687 21.5211 24.0201 20.9744 23.4445 20.5899C22.8689 20.2053 22.1922 20 21.5 20H9.39625C9.16206 20 8.93532 19.9177 8.75554 19.7677C8.57576 19.6176 8.45436 19.4092 8.4125 19.1787L8.01625 17H22.5163C23.2188 16.9999 23.8991 16.7532 24.4384 16.303C24.9777 15.8527 25.3419 15.2275 25.4675 14.5362L26.9875 6.17875C27.0132 6.0343 27.0069 5.88596 26.9688 5.74424C26.9308 5.60253 26.8621 5.47092 26.7675 5.35875ZM21.5 22C21.7967 22 22.0867 22.088 22.3334 22.2528C22.58 22.4176 22.7723 22.6519 22.8858 22.926C22.9993 23.2001 23.0291 23.5017 22.9712 23.7926C22.9133 24.0836 22.7704 24.3509 22.5607 24.5607C22.3509 24.7704 22.0836 24.9133 21.7926 24.9712C21.5017 25.0291 21.2001 24.9993 20.926 24.8858C20.6519 24.7723 20.4176 24.58 20.2528 24.3334C20.088 24.0867 20 23.7967 20 23.5C20 23.1022 20.158 22.7206 20.4393 22.4393C20.7206 22.158 21.1022 22 21.5 22ZM9.5 22C9.79667 22 10.0867 22.088 10.3334 22.2528C10.58 22.4176 10.7723 22.6519 10.8858 22.926C10.9994 23.2001 11.0291 23.5017 10.9712 23.7926C10.9133 24.0836 10.7704 24.3509 10.5607 24.5607C10.3509 24.7704 10.0836 24.9133 9.79264 24.9712C9.50166 25.0291 9.20006 24.9993 8.92597 24.8858C8.65189 24.7723 8.41762 24.58 8.2528 24.3334C8.08797 24.0867 8 23.7967 8 23.5C8 23.1022 8.15804 22.7206 8.43934 22.4393C8.72064 22.158 9.10218 22 9.5 22Z" fill="#23CAD4"/>
    </svg>
  );
}

export function SearchVector() {
  return (
    <svg className="w-5 h-5" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.7075 27.2925L22.4488 21.035C24.2628 18.8571 25.1674 16.0637 24.9743 13.2359C24.7812 10.4081 23.5054 7.76355 21.4122 5.85244C19.319 3.94134 16.5696 2.9108 13.7359 2.9752C10.9022 3.0396 8.20246 4.19398 6.19824 6.19821C4.19401 8.20243 3.03963 10.9022 2.97523 13.7359C2.91083 16.5695 3.94137 19.319 5.85248 21.4122C7.76358 23.5054 10.4081 24.7812 13.2359 24.9743C16.0637 25.1673 18.8571 24.2628 21.035 22.4487L27.2925 28.7075C27.3854 28.8004 27.4957 28.8741 27.6171 28.9244C27.7385 28.9747 27.8686 29.0005 28 29.0005C28.1314 29.0005 28.2615 28.9747 28.3829 28.9244C28.5043 28.8741 28.6146 28.8004 28.7075 28.7075C28.8004 28.6146 28.8741 28.5043 28.9244 28.3829C28.9747 28.2615 29.0006 28.1314 29.0006 28C29.0006 27.8686 28.9747 27.7385 28.9244 27.6171C28.8741 27.4957 28.8004 27.3854 28.7075 27.2925ZM5.00001 14C5.00001 12.2199 5.52785 10.4799 6.51678 8.99985C7.50572 7.51981 8.91132 6.36625 10.5559 5.68506C12.2004 5.00388 14.01 4.82565 15.7558 5.17291C17.5017 5.52018 19.1053 6.37735 20.364 7.63602C21.6226 8.89469 22.4798 10.4983 22.8271 12.2442C23.1743 13.99 22.9961 15.7996 22.3149 17.4441C21.6337 19.0887 20.4802 20.4943 19.0001 21.4832C17.5201 22.4721 15.78 23 14 23C11.6139 22.9973 9.32623 22.0483 7.63897 20.361C5.95172 18.6738 5.00266 16.3861 5.00001 14Z" fill="#F86A04"/>
    </svg>
  );
}


