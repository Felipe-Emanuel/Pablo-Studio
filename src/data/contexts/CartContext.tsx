import { paymentStatesType } from "@layout/PaymentLine";
import { SelectedCardProps } from "@layout/selectedCard";
import {
  CartVector,
  CheckVector,
  EyeVector,
  PaymentVector,
  UserVector,
} from "@vectores/Vectores";
import { createContext, useReducer, ReactNode, useState } from "react";

type CartActionType =
  | { type: "Add-to-cart"; payload: SelectedCardProps }
  | { type: "Remove-from-cart"; payload: SelectedCardProps };

type CartType = {
  cart: SelectedCardProps[];
};

type PaymentStatesType = {
  paymentStates: paymentStatesType[];
};

type CartContextType = {
  state: CartType;
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
  changePaymentState: () => void;
  changeProgressRingValue: () => void;
};


const initialState: CartType = { cart: [] };

function cartReducer(state: CartType, action: CartActionType) {
  switch (action.type) {
    case "Add-to-cart":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "Remove-from-cart":
      const newCart = state.cart.filter(
        (item: SelectedCardProps) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
}

const states = [
  { icon: <CartVector />, isActive: true, isLast: false, text: "Carrinho" },
  { icon: <UserVector />, isActive: false, isLast: false, text: "Identificação" },
  { icon: <PaymentVector />, isActive: false, isLast: false, text: "Pagamento" },
  { icon: <EyeVector />, isActive: false, isLast: false, text: "Confirmação" },
  { icon: <CheckVector />, isActive: false, isLast: true, text: "Conclusão" }
]

export const CartContext = createContext<CartContextType>({
  state: initialState,
  discount: 0,
  totalProductsValue: 0,
  freight: 0,
  totalOnCredit: 0,
  totalWithPix: 0,
  moneyToBeSaved: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  changePaymentState: () => {},
  changeProgressRingValue: () => {},
  progressValue: 20,
  paymentStates: states,
});

interface cartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: cartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [progressValue, setProgressValue] = useState(20);

  const discount = 0.15;
  const totalProductsValue = 750;
  const freight = 34.75;

  const totalOnCredit = totalProductsValue + freight;
  const totalWithPix = totalOnCredit - totalProductsValue * discount;
  const moneyToBeSaved = totalOnCredit - totalWithPix;

  const [paymentStates, setPaymentStates] = useState<paymentStatesType[]>(states);
  function changePaymentState() {
    const activeIndex = paymentStates.findIndex((state) => state.isActive);
    if (activeIndex < paymentStates.length - 1) {
      const newPaymentStates = [...paymentStates];
      newPaymentStates[activeIndex].isActive = false;
      newPaymentStates[activeIndex + 1].isActive = true;
      setPaymentStates(newPaymentStates);
    }
  }

  function changeProgressRingValue() {
    setProgressValue(progressValue + 20);
  }

  const addToCart = (product: SelectedCardProps) => {
    dispatch({ type: "Add-to-cart", payload: product });
  };

  const removeFromCart = (product: SelectedCardProps) => {
    dispatch({ type: "Remove-from-cart", payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        progressValue,
        paymentStates,
        discount,
        totalProductsValue,
        freight,
        totalOnCredit,
        moneyToBeSaved,
        totalWithPix,
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
