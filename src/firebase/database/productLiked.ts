import { DocumentData, addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import db from "../config";
import { Product } from "@models/Product";

export const changeLikeState = async (product: DocumentData | Product, guestId: string) => {
  try {
    const productLikedRef = collection(db, "productLiked");
    const querySnapshot = await getDocs(
      query(productLikedRef, where("id", "==", product.id))
    );

    if (!querySnapshot.empty) {
      const docRef = querySnapshot.docs[0].ref;
      const isLiked = querySnapshot.docs[0].data().isLiked;
      await updateDoc(docRef, {
        isLiked: !isLiked,
      });
      return docRef;
    } else {
      const docRef = await addDoc(productLikedRef, {
        ...product,
        isLiked: true,
        guestProductId: guestId
      });
      return docRef;
    }
  } catch (error) {
    console.error("Ocorreu um erro na adição ou atualização do produto", error);
  }
};

export const getProductLiked = async (product: DocumentData | Product) => {
  try {
    const productLikedRef = collection(db, "productLiked");
    const querySnapshot = await getDocs(
      query(productLikedRef, where("id", "==", product.id))
    );

    if (!querySnapshot.empty) {
      const docRefs = querySnapshot.docs;
      const productLikedItem = docRefs.map((doc) => doc.data());
      return productLikedItem;
    }
  } catch (error) {
    console.error("Ocorreu um erro ao resgatar os produtos", error);
  }
};
