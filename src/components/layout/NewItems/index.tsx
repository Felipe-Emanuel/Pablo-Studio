import { useCartContext } from "@hooks/useCartContext"
import { Product } from "@models/Product"
import { SectionTitle } from "@util/texts/SectionTitle"
import { BagVector } from "@vectores/Vectores"
import { SkeletonProductCart } from "src/components/skeletons/SkeletonProductCart"

interface NewItemsProps{
  product: Product[]
}

export function NewItems({product}: NewItemsProps) {

  console.log(product)

  return (
    <>
      <SectionTitle icon={<BagVector />} text="Outros Produtos" />
      {/* {dataGet.length &&
        dataGet.map(item => item)
      } */}
    </>
  )
}
