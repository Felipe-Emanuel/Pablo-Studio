import { Product } from "@models/Product";
import db from "../config";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  DocumentData,
  updateDoc
} from "firebase/firestore";

export const addFireStoreViewInfo = async (product: DocumentData) => {
  try {
    const cartRef = collection(db, "productViewInfo");
    const querySnapshot = await getDocs(
      query(cartRef, where("id", "==", product.id))
    );

    if (!querySnapshot.empty) {
      const docRef = querySnapshot.docs[0].ref;
      const numberOfViews = querySnapshot.docs[0].data().productViewInfo.numberOfViews;
      await updateDoc(docRef, {
        productViewInfo: {
          numberOfViews: numberOfViews + 1,
        },
      });
      return docRef;
    } else {
      const docRef = await addDoc(cartRef, {
        ...product,
        productViewInfo: {
          numberOfViews: 1,
        },
      });
      return docRef;
    }
  } catch (error) {
    console.error("Ocorreu um erro na adição ou atualização do produto", error);
  }
};

  export const getFireStoreViewInfo = async (product: DocumentData | Product) => {

    try {
      const cartRef = collection(db, "productViewInfo");
      const querySnapshot = await getDocs(
        query(cartRef, where("id", "==", product.id))
      );

      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs;
        const cartItems = docRef.map((item) => item.data());
        return cartItems;
      }
    } catch (error) {
      console.error("Ocorreu um erro ao resgatar os produto", error);
    }
  };

