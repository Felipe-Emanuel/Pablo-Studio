import { Product } from "@models/Product";
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

export const getUser = async () => {
  const userRef = collection(db, "users");
  const querySnapshot = await getDocs(userRef);
  const users = querySnapshot.docs.map((doc) => doc.data());

  return users;
};

export const addUser = async (product?: Product) => {
  const cookies = parseCookies();
  const guestId = cookies._guest ?? "";

  const currentUser = await getUser().then((resp) => {
    const users = resp.filter((user) => user.guestId === guestId);
    return users;
  });

  const guestUser = currentUser[0]
    ? currentUser[0]
    : {
        id: guestId,
        guestId,
        cep: "",
        city: "",
        uf: "",
        preferences: {},
      };

  const brands = [
    "marvel",
    "dc",
    "disney",
    "anime",
    "starWars",
    "games",
    "statueDrawing",
    "drawing",
    "actionFigure",
  ];

  const user = cookies._userGuest ? JSON.parse(cookies._userGuest) : guestUser;

  if (product) {
    const { brand } = product;
    const checkCurrentUser =
      currentUser[0] !== undefined ? currentUser[0] : user;
    const updatedPrefs = { ...checkCurrentUser.preferences };
    if (brand && brands.includes(brand)) {
      updatedPrefs[brand] = (updatedPrefs[brand] || 0) + 1;
      user.preferences = updatedPrefs;
    }
  }

  try {
    if (user) {
      const userRef = collection(db, "users");
      const querySnapshot = await getDocs(
        query(userRef, where("id", "==", user.id))
      );

      if (querySnapshot.docs.length > 0) {
        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, user);
      } else {
        const docRef = await addDoc(userRef, user);
        return docRef;
      }
    }
  } catch (error) {
    console.error("Ocorreu um erro ao adicionar o usuário", error);
  }
};
