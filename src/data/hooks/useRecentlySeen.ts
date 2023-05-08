import { addFireStore, getFireStore, removeProductFireStore } from "@database/clientCart"
import { Product } from "@models/Product"
import { DocumentData } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "./useCartContext";

export const useRecentlySeen = () => {
  const { setIsLoading } = useCartContext()
  const [recentlySeen, setRecentlySeen] = useState<DocumentData[] | Product[]>([]);

  const addRecentlySeen = async (product: Product, guestId: string) => {
    const newProduct = {
      ...product,
      guestProductId: guestId
    }

    await addFireStore("recentlySeen", newProduct)
      .catch((err) => console.error("Error ao adicionar vistos por último: ", err))
  }

  const removeRecentlySeen = async (product: Product | DocumentData) => {
    setIsLoading(true),
    await removeProductFireStore("recentlySeen", product)
    .then(() => setIsLoading(false))
    .catch((err) => console.error("Error ao recuperar vistos por último: ", err))
  }

  const getRecentlySeen = async (guestId: string) => {
    await getFireStore("recentlySeen", guestId)
      .then((resp) => {
        setRecentlySeen(resp || [])})
      .catch((err) => console.error("Error ao recuperar vistos por último: ", err))
  }

  return {
    addRecentlySeen,
    removeRecentlySeen,
    getRecentlySeen,
    recentlySeen
  }
}
