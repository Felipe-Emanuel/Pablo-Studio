import { useCartContext } from "@hooks/useCartContext";
import db from "../config";
import {
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
  deleteDoc,
  DocumentData,
  writeBatch
} from "firebase/firestore";
import { Freight, Product } from "@models/Product";

export const addProductCart = async (product: DocumentData) => {
  try {
    const cartRef = collection(db, "carts");
    const querySnapshot = await getDocs(
      query(cartRef, where("id", "==", product.id))
    );

    if (querySnapshot.docs.length > 0) {
      const docRef = querySnapshot.docs[0].ref;
      await updateDoc(docRef, product);
    } else {
      const docRef = await addDoc(cartRef, product);
      console.log("Produto Adicionado com ID: ", docRef.id);
    }
  } catch (error) {
    console.error("Ocorreu um erro na adição ou atualização do produto", error);
  }
};

export const getProductCart = async (guestId: string) => {
  try {
    const cartRef = collection(db, "carts");
    const querySnapshot = await getDocs(
      query(cartRef, where("guestProductId", "==", guestId))
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

export const removeProductCart = async (product: DocumentData) => {
  try {
    const itemRef = collection(db, "carts");
    const querySnapshot = await getDocs(
      query(itemRef, where("id", "==", product.id))
    );

    if (querySnapshot) {
      const docRef = querySnapshot.docs;
      if (docRef.length > 0) {
        const cartItemRef = docRef[0].ref;
        await deleteDoc(cartItemRef);
      }
    }
  } catch (error) {
    console.error("Ocorreu um erro ao remover o produto", error);
  }
};

export const clearCartContent = async (guestId: string) => {
  try {
    const cartRef = collection(db, "carts");
    const querySnapshot = await getDocs(
      query(cartRef, where("guestProductId", "==", guestId))
    );
    if (querySnapshot.size > 0) {
      const docsToDelete = querySnapshot.docs;
      const batch = writeBatch(db);
      docsToDelete.forEach(doc => batch.delete(doc.ref));
      await batch.commit();
    }
  } catch (error) {
    console.error("Ocorreu um erro ao limpar o carrinho", error);
  }
};
