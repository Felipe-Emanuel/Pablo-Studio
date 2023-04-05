import { paymentStatesType } from "@layout/PaymentLine";
import { SelectedCardProps } from "@layout/selectedCard";
import {
  CartVector,
  CheckVector,
  EyeVector,
  PaymentVector,
  UserVector,
} from "@vectores/Vectores";
import { useRouter } from "next/router";
import { createContext, useReducer, ReactNode, useState } from "react";

type CartActionType =
  | { type: "Add-to-cart"; payload: SelectedCardProps }
  | { type: "Remove-from-cart"; payload: SelectedCardProps }
  | { type: "Add-to-count"; payload: SelectedCardProps }
  | { type: "Remove-to-count"; payload: SelectedCardProps };

type CartType = {
  cart: SelectedCardProps[];
};

type CartContextType = {
  state: CartType;
  popUp: boolean;
  discount: number;
  totalProductsValue: number;
  freight: number;
  totalOnCredit: number;
  totalWithPix: number;
  moneyToBeSaved: number;
  progressValue: number;
  paymentStates: paymentStatesType[];
  addToCart: (product: SelectedCardProps) => void;
  removeFromCart: (product: SelectedCardProps) => void;
  addToCount: (product: SelectedCardProps) => void;
  removeToCount: (product: SelectedCardProps) => void;
  togglePopUp: (value: boolean) => void;
  changePaymentState: () => void;
  changeProgressRingValue: () => void;
};

interface cartProviderProps {
  children: ReactNode;
}

const initialState: CartType = { cart: [] };

const cartReducer = (state: CartType, action: CartActionType) =>
  ({
    "Add-to-cart": () => {
      const existingItem = state.cart.find(
        (item: SelectedCardProps) => item.id === action.payload.id
      );
      if (existingItem) {
        const updatedCart = state.cart.map((item: SelectedCardProps) =>
          item.id === existingItem.id
            ? { ...item, count: item.count + 1 }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const newItem = { ...action.payload, count: 1 };
        return {
          ...state,
          cart: [...state.cart, newItem],
        };
      }
    },
    "Remove-from-cart": () => ({
      ...state,
      cart: state.cart.filter(
        (item: SelectedCardProps) => item.id !== action.payload.id
      ),
    }),
    "Add-to-count": () => ({
      ...state,
      cart: state.cart.map((item: SelectedCardProps) =>
        item.id === action.payload.id
          ? { ...item, count: item.count + 1 }
          : item
      ),
    }),
    "Remove-to-count": () => ({
      ...state,
      cart: state.cart.map((item: SelectedCardProps) =>
        item.count === 1
          ? item
          : item.id === action.payload.id
          ? { ...item, count: item.count - 1 }
          : item
      ),
    }),
  }[action.type]?.() || state);

  const states = [
    { icon: <CartVector />, isActive: true, isLast: false, text: "Carrinho" },
    { icon: <UserVector />, isActive: false, isLast: false, text: "Identificação" },
    { icon: <PaymentVector />, isActive: false, isLast: false, text: "Pagamento" },
    { icon: <EyeVector />, isActive: false, isLast: false, text: "Confirmação" },
    { icon: <CheckVector />, isActive: false, isLast: true, text: "Conclusão" }
  ]

export const CartContext = createContext<CartContextType>({
  state: initialState,
  popUp: false,
  discount: 0,
  totalProductsValue: 0,
  freight: 0,
  totalOnCredit: 0,
  totalWithPix: 0,
  moneyToBeSaved: 0,
  addToCount: () => {},
  removeToCount: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  changePaymentState: () => {},
  changeProgressRingValue: () => {},
  togglePopUp: () => {},
  progressValue: 20,
  paymentStates: states,
});

export function CartProvider({ children }: cartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [progressValue, setProgressValue] = useState(20);
  const [popUp, setPopUp] = useState(false);
  const [paymentStates, setPaymentStates] =
    useState<paymentStatesType[]>(states);

  const counter = state.cart.map((cart) => cart.count);

  const discount = 0.15;
  const totalProductsValue = 750;
  const freight = 34.75;
  const totalOnCredit = totalProductsValue + freight;
  const totalWithPix = totalOnCredit - totalProductsValue * discount;
  const moneyToBeSaved = totalOnCredit - totalWithPix;

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

  const addToCart = (product: SelectedCardProps) => {
    dispatch({ type: "Add-to-cart", payload: product });
  };

  const removeFromCart = (product: SelectedCardProps) => {
    dispatch({ type: "Remove-from-cart", payload: product });
    togglePopUp(false);
  };

  const addToCount = (product: SelectedCardProps) => {
    dispatch({ type: "Add-to-count", payload: product });
  };

  const removeToCount = (product: SelectedCardProps) => {
    dispatch({ type: "Remove-to-count", payload: product });

    if (product.count === 1) {
      togglePopUp(true);
    }
  };

  return (
    <CartContext.Provider
      value={{
        state,
        popUp,
        progressValue,
        paymentStates,
        discount,
        totalProductsValue,
        freight,
        totalOnCredit,
        moneyToBeSaved,
        totalWithPix,
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
