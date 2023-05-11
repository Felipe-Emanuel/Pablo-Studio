import { addFireStore, getFireStore, removeProductFireStore } from "@database/clientCart"
import { Product } from "@models/Product"
import { DocumentData } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "./useCartContext";
import { addFireStoreViewInfo } from "@database/productViewInfo";

export const useRecentlySeen = () => {
  const { setIsLoading } = useCartContext()
  const [recentlySeen, setRecentlySeen] = useState<DocumentData[] | Product[]>([]);

  const addRecentlySeen = async (product: Product, guestId: string) => {

    const newDate = new Date();
    const hours = String(newDate.getHours()).padStart(2, '0');
    const minutes = String(newDate.getMinutes()).padStart(2, '0');
    const seconds = String(newDate.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;

      const recentlySeen = formattedTime

      const newProduct = {
        ...product,
        guestProductId: guestId,
        recentlySeen,
      }

    await addFireStore("recentlySeen", newProduct)
      .catch((err) => console.error("Erro ao adicionar vistos por último: ", err));

    await addFireStoreViewInfo(product)
      .catch((err) => console.error("Erro ao atualizar informações de visualização: ", err));
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
