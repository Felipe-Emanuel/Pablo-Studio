import Image from "next/image"

export interface ProductCartImageProps{
  src: string
  alt: string
}

export function ProductCartImage({src, alt}: ProductCartImageProps) {
  return (
    <>
      <Image alt={alt} src={src} width={250} height={300} className="w-52 h-64" />
    </>
  )
}
