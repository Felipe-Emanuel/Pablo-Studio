import db from "../config";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  DocumentData,
  writeBatch,
  setDoc
} from "firebase/firestore";

export const addFireStore = async (collectionRef: string, product: DocumentData) => {
  try {
    const cartRef = collection(db, collectionRef);
    const querySnapshot = await getDocs(
      query(cartRef, where("id", "==", product.id))
    );

    const docRef = querySnapshot.docs.length > 0
      ? querySnapshot.docs[0].ref
      : await addDoc(cartRef, product);

    await setDoc(docRef, product);
    return docRef;
  } catch (error) {
    console.error("Ocorreu um erro na adição ou atualização do produto", error);
  }
};

export const getFireStore = async (collectionRef: string, guestId: string) => {
  try {
    const cartRef = collection(db, collectionRef);
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

export const removeProductFireStore = async (collectionRef: string, product: DocumentData) => {
  try {
    const itemRef = collection(db, collectionRef);
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
