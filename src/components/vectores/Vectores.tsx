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
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
}

export function PabloVector() {
  return (
    <svg width="285" height="94" viewBox="0 0 285 94" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-72 h-24">
        <path d="M57 37C57.3325 41.3642 62.0257 62.4872 57 65" stroke="white" stroke-linecap="round"/>
        <path d="M1 29C17.3924 21.4729 78.4668 -18.4347 90.7778 13.2223C102.26 42.7488 70.5713 47 49 47" stroke="white" stroke-linecap="round"/>
        <path d="M87.0001 55.0001C87.8545 54.8652 107.786 51.5984 97.5556 51.1112C94.2286 50.9528 65.1124 50.5213 75.3334 52.1112C83.7862 53.4261 93.5265 55.5724 102.111 55.0001C105.599 54.7676 111.217 48.2628 114.111 46.3334C117.519 44.0616 117 48.463 117 50.6667C117 52.7207 119.966 46.2497 121.778 45.4445C123.598 44.6356 123 50.8037 123 51.6667C123 52.0278 124.597 50.7422 125.889 51.1112C127.647 51.6136 126.379 53.5966 127.444 54.5556C129.132 56.0744 132.417 53.8907 133 57.0001C133.555 59.9606 139.196 57.0001 142 57.0001C146.907 57.0001 143.357 47.9644 147 51.0001C151.108 54.4235 156.594 52.0625 161 55.0001" stroke="white" stroke-linecap="round"/>
        <path d="M169 37C170.843 37.2303 170.325 37.6491 171 39" stroke="white" stroke-linecap="round"/>
        <path d="M135 15C172.904 8.35017 215.273 5.10575 253.444 10.7778C263.123 12.216 278.04 15.8617 283.222 25.6666C288.428 35.5155 271.917 52.3918 266 57.7778C240.351 81.1251 204.229 93.4132 169.889 92.6666C166.709 92.5975 141.167 90.6654 145 83" stroke="white" stroke-linecap="round"/>
        <path d="M281 65H277" stroke="white" stroke-linecap="round"/>
    </svg>

  );
}

type ArrowVectorType = {
  className: string
}
export function ArrowVector({className}: ArrowVectorType) {
  return (
    <svg className={className} width="38" height="100" viewBox="0 0 38 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.52018 4C9.44643 13.2625 18.2356 24.441 22.0807 32.9626C24.9832 39.3953 28.1355 46.5706 32.9626 51.8804C37.0846 56.4146 27.7719 63.9256 25.0942 66.9477C16.939 76.1514 10.7605 85.7695 4 95.9103" stroke="white" stroke-width="7.53363" stroke-linecap="round"/>
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
