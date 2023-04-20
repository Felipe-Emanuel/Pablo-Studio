import db from "../config";
import {
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { parseCookies } from "nookies";

export const addUser = async () => {
  const cookies = parseCookies();
  const guestId = cookies._guest ?? "";

  const guestUser = {
    id: guestId,
    guestId,
    cep: "",
    city: "",
    uf: "",
    error: {
      cepError: {},
    },
  };

  const user = cookies._userGuest
    ? JSON.parse(cookies._userGuest)
    : guestUser;

  try {
    if (!user.error.erro) {
      const userRef = collection(db, "users");
      const querySnapshot = await getDocs(
        query(userRef, where("id", "==", user.id))
      );

      if (querySnapshot.docs.length > 0) {
        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, user);
        console.log("ID Atualizado com ID: ", docRef.id);
      } else {
        const docRef = await addDoc(userRef, user);

        console.log("ID Adicionado com ID: ", docRef.id);
      }
    }

  } catch (error) {
    console.error("Ocorreu um erro ao adicionar o usuário", error);
  }
};
