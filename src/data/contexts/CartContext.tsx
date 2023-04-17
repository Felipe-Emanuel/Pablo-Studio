import { paymentStatesType } from "@layout/PaymentLine";
import {
  CartVector,
  CheckVector,
  EyeVector,
  PaymentVector,
  UserVector,
} from "@vectores/Vectores";
import { createContext, ReactNode, useState, SetStateAction, Dispatch, useEffect } from "react";
import { parseCookies } from "nookies";
import {
  addProductCart,
  clearCartContent,
  getProductCart,
  removeProductCart,
} from "@database/clientCart";
import { DocumentData } from "firebase/firestore";
import { Product } from "@models/Product";

type CartContextType = {
  inputCepValue: string;
  productName: string;
  popUp: boolean;
  isLoading: boolean;
  discount: number;
  progressValue: number;
  paymentStates: paymentStatesType[];
  addToCart: (product: DocumentData & Product, guestId: string) => Promise<void>;
  removeFromCart: (product: DocumentData[] & Product[]) => Promise<void>;
  addToCount: (product: DocumentData & Product, guestId: string) => Promise<void>;
  removeToCount: (product: DocumentData & Product, guestId: string) => Promise<void>;
  updateProductCep: (product: DocumentData[] & Product[]) => void;
  updateFreigthValue: (product: DocumentData[] & Product[], serviceType: string, deadline: string, price: string) => void;
  clearCart: (guestId: string) => void;
  togglePopUp: (value: boolean) => void;
  FnsetProductName: (newName: string) => void;
  changePaymentState: () => void;
  setInputCepValue: Dispatch<SetStateAction<string>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>
  changeProgressRingValue: () => void;
};

interface cartProviderProps {
  children: ReactNode;
}

const discount = 0.1;

const states = [
  { icon: <CartVector />, isActive: true, isLast: false, text: "Carrinho" },
  { icon: <UserVector />, isActive: false, isLast: false, text: "Identificação" },
  { icon: <PaymentVector />, isActive: false, isLast: false, text: "Pagamento" },
  { icon: <EyeVector />, isActive: false, isLast: false, text: "Confirmação" },
  { icon: <CheckVector />, isActive: false, isLast: true, text: "Conclusão" },
];

export const CartContext = createContext<CartContextType>({
  popUp: false,
  isLoading: false,
  inputCepValue: '',
  productName: '',
  discount,
  setInputCepValue: () => {},
  //@ts-ignore
  addToCount: () => {},
  //@ts-ignore
  removeToCount: () => {},
  //@ts-ignore
  addToCart: () => {},
  //@ts-ignore
  clearCart: () => {},
  //@ts-ignore
  removeFromCart: () => {},
  //@ts-ignore
  FnsetProductName: () => {},
  //@ts-ignore
  updateProductCep: () => {},
  updateFreigthValue: () => {},
  setIsLoading: () => {},
  changePaymentState: () => {},
  changeProgressRingValue: () => {},
  togglePopUp: () => {},
  progressValue: 20,
  paymentStates: states,
});

export function CartProvider({ children }: cartProviderProps) {
  const [productWithNewFreigthValues, setProductWithNewFreigthValues] = useState({});
  const [inputCepValue, setInputCepValue] = useState("");
  const [productName, setProductName] = useState("")
  const [progressValue, setProgressValue] = useState(20);
  const [popUp, setPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStates, setPaymentStates] =
    useState<paymentStatesType[]>(states);

  const changePaymentState = () => {
    const activeIndex = paymentStates.findIndex((state) => state.isActive);
    if (activeIndex < paymentStates.length - 1) {
      const newPaymentStates = [...paymentStates];
      newPaymentStates[activeIndex].isActive = false;
      newPaymentStates[activeIndex + 1].isActive = true;
      setPaymentStates(newPaymentStates);
    }
  };

  const togglePopUp = (value: boolean) => {
    return setPopUp(value);
  };

  const changeProgressRingValue = () => {
    setProgressValue(progressValue + 20);
  };

  const addToCart = async (
    product: DocumentData & Product,
    guestId: string
  ): Promise<void> => {
    await getProductCart(guestId)
    return new Promise<void>(async (resolve, reject) => {
      try {
        const resp = await getProductCart(guestId);
        const cartItem = resp?.find((item) => item.id === product.id);
        const cookies = parseCookies();
        const guestProductId = cookies._guest ? cookies._guest : "";
        const userGuest =
          cookies._userGuest != undefined ? JSON.parse(cookies._userGuest) : {};
        const sCepDestino = userGuest.cep;

        if (cartItem) {
          const newItem = {
            ...cartItem,
            count: cartItem.count + 1,
            productPrice: cartItem.initialPrice * (cartItem.count + 1),
            finalWeigth:
              cartItem.dimensions.nVlPeso +
              +cartItem.dimensions.nVlPeso * cartItem.count,
            dimensions: cartItem.dimensions,
            guestProductId: guestProductId,
          };
          if (sCepDestino) {
            newItem.dimensions = {
              ...cartItem.dimensions,
              sCepDestino,
            };
          }
          addProductCart(newItem);
        } else {
          const newItem = {
            ...product,
            count: 1,
            productPrice: product.initialPrice,
            guestProductId: guestProductId,
            dimensions: product.dimensions,
          };
          if (sCepDestino) {
            newItem.dimensions = {
              ...product.dimensions,
              sCepDestino,
            };
          }
          addProductCart(newItem);
        }

        resolve();
      } catch (error) {
        console.log("Erro no cart context de adição: ", error);
        reject();
      }
    });
  };

  const addToCount = async (
    product: DocumentData & Product,
    guestId: string
  ): Promise<void> => {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const resp = await getProductCart(guestId);
        const cartItem = resp?.find((item) => item.id === product.id);

        if (cartItem) {
          setIsLoading(true);
          const newItem = {
            ...cartItem,
            count: cartItem.count + 1,
            productPrice: cartItem.initialPrice * (cartItem.count + 1),
            finalWeigth:
              cartItem.dimensions.nVlPeso +
              +cartItem.dimensions.nVlPeso * cartItem.count,
          };

          await addProductCart(newItem);
        }

        resolve();
        setIsLoading(false);
      } catch (error) {
        console.error("Ocorreu um erro na atualização do produto", error);
        reject(error);
      }
    });
  };

  const removeToCount = async (
    product: DocumentData & Product,
    guestId: string
  ): Promise<void> => {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const resp = await getProductCart(guestId);
        const cartItem = resp?.find((item) => item.id === product.id);

        if (cartItem && cartItem.count > 1) {
          setIsLoading(true);
          const newItem = {
            ...cartItem,
            count: cartItem.count - 1,
            productPrice: cartItem.initialPrice * (cartItem.count - 1),
            finalWeigth:
              cartItem.dimensions.nVlPeso -
              +cartItem.dimensions.nVlPeso * cartItem.count,
          };

          await addProductCart(newItem);
        }
        if (product.count === 1) {
          togglePopUp(true);
        }

        resolve();
        setIsLoading(false);
      } catch (error) {
        console.error("Ocorreu um erro na atualização do produto", error);
        reject(error);
      }
    });
  };

  const removeFromCart = async (product: DocumentData[] & Product[]): Promise<void> => {
    setIsLoading(true);

    await removeProductCart(product);
    setIsLoading(false);
    setPopUp(false);
  };

  const clearCart = async (guestId: string): Promise<void> => {
    setIsLoading(true);

    await clearCartContent(guestId);
    setIsLoading(false);
  };

  const FnsetProductName = (newName: string) => setProductName(newName)


  const updateFreigthValue = (product: DocumentData[] & Product[],
    serviceType: string,
    deadline: string,
    price: string) => {
    setIsLoading(true)
    product.map(async (item: Product) => {
      const newFreigthValue = {
        ...item,
        freight: {
          serviceType,
          deadline,
          price,
        }
      }

      await addProductCart(newFreigthValue)
        .then(() => {
          setIsLoading(false)
      })
    })
  }

  const updateProductCep = (product: DocumentData[] & Product[]) => {

    product?.map(async (item: Product) => {
      const updatedProduct = {
        ...item,
        dimensions: {
          ...item?.dimensions,
          sCepDestino: inputCepValue,
        },
        freight: {
          deadline: item?.freight.deadline,
          serviceType: item?.freight.serviceType,
          price: item?.freight.price
        },
      };
      addProductCart(updatedProduct)
    })
  }


  return (
    <CartContext.Provider
      value={{
        popUp,
        progressValue,
        paymentStates,
        discount,
        isLoading,
        productName,
        inputCepValue,
        updateFreigthValue,
        setInputCepValue,
        updateProductCep,
        FnsetProductName,
        setIsLoading,
        clearCart,
        togglePopUp,
        addToCount,
        removeToCount,
        addToCart,
        removeFromCart,
        changePaymentState,
        changeProgressRingValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
