import { paymentStatesType } from "@layout/PaymentLine";
import { DataType } from "@layout/slider/productSlider";
import {
  CartVector,
  CheckVector,
  EyeVector,
  PaymentVector,
  UserVector,
} from "@vectores/Vectores";
import { createContext, useReducer, ReactNode, useState, Dispatch } from "react";

type CartActionType =
  | { type: "Add-to-cart"; payload: DataType }
  | { type: "Remove-from-cart"; payload: DataType }
  | { type: "Add-to-count"; payload: DataType }
  | { type: "Remove-to-count"; payload: DataType }
  | { type: "Clear-cart"; payload: DataType }
  | { type: "Checkout"; payload: DataType };

type CartType = {
  total: number;
  cart: DataType[];
};

type CartContextType = {
  state: CartType;
  popUp: boolean;
  discount: number;
  freight: number;
  progressValue: number;
  paymentStates: paymentStatesType[];
  dispatch: Dispatch<CartActionType>;
  addToCart: (product: DataType) => void;
  removeFromCart: (product: DataType) => void;
  addToCount: (product: DataType) => void;
  removeToCount: (product: DataType) => void;
  togglePopUp: (value: boolean) => void;
  changePaymentState: () => void;
  changeProgressRingValue: () => void;
};

interface cartProviderProps {
  children: ReactNode;
}

const initialState: CartType = { cart: [], total: 0 };
const discount = 0.10;
const freight = 10;

const cartReducer = (state: CartType, action: CartActionType) =>
  ({
    "Add-to-cart": () => {
      const existingItem = state.cart.find(
        (item: DataType) => item.id === action.payload.id
      );

      if (existingItem) {
        const updatedCart = state.cart.map((item: DataType) => {
          return item.id === existingItem.id
            ? {
                ...item,
                count: item.count + 1,
                productPrice: item.initialPrice * (item.count + 1),
              }
            : item;
        });

        const total = updatedCart.reduce(
          (acc: number, item: DataType) => acc + item.productPrice,
          0
        );

        return {
          ...state,
          cart: updatedCart,
          total: total,
        };
      } else {
        const newItem = { ...action.payload, count: 1, initialPrice: action.payload.productPrice, productPrice: action.payload.productPrice };
        const updatedCart = [...state.cart, newItem];
        const total = updatedCart.reduce(
          (acc: number, item: DataType) => acc + item.productPrice,
          0
        );
        return {
          ...state,
          cart: updatedCart,
          total: total,
        };
      }
    },
    "Remove-from-cart": () => {
      const removedItem = state.cart.find((item: DataType) => item.id === action.payload.id);
      const updatedCart = state.cart.filter((item: DataType) => item.id !== action.payload.id);
      const total = removedItem ? state.total - removedItem.productPrice * removedItem.count : state.total;
      return {
        ...state,
        cart: updatedCart,
        total: total,
      };
    },
    "Add-to-count": () => {
      const updatedCart = state.cart.map((item: DataType) =>
        item.id === action.payload.id
          ? { ...item, count: item.count + 1, initialPrice: item.initialPrice, productPrice: item.initialPrice * (item.count + 1) }
          : item
      );
      const total = updatedCart.reduce(
        (acc: number, item: DataType) => acc + item.productPrice,
        0
      );
      return {
        ...state,
        cart: updatedCart,
        total: total,
      };
    },
    "Remove-to-count": () => {
      const updatedCart = state.cart.map((item: DataType) =>
        item.count === 1
          ? item
          : item.id === action.payload.id
          ? { ...item, count: item.count - 1, initialPrice: item.initialPrice, productPrice: item.initialPrice * (item.count - 1) }
          : item
      );
      const total = updatedCart.reduce(
        (acc: number, item: DataType) => acc + item.productPrice,
        0
      );
      return {
        ...state,
        cart: updatedCart,
        total: total,
      };
    },
    "Clear-cart": () => ({
      ...state,
      cart: [],
      total: 0,
    }),
    "Checkout": () => {
      const totalWithoutDiscount = state.total + freight;
      const total = totalWithoutDiscount - totalWithoutDiscount * discount;
      return {
        ...state,
        cart: [],
        total: 0,
        totalWithDiscount: total,
      };
    },
  }[action.type]?.() || state);



const states = [
  { icon: <CartVector />, isActive: true, isLast: false, text: "Carrinho" },
  {
    icon: <UserVector />,
    isActive: false,
    isLast: false,
    text: "Identificação",
  },
  {
    icon: <PaymentVector />,
    isActive: false,
    isLast: false,
    text: "Pagamento",
  },
  { icon: <EyeVector />, isActive: false, isLast: false, text: "Confirmação" },
  { icon: <CheckVector />, isActive: false, isLast: true, text: "Conclusão" },
];

export const CartContext = createContext<CartContextType>({
  state: initialState,
  popUp: false,
  discount,
  freight,
  dispatch: () => {},
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
  const [paymentStates, setPaymentStates] = useState<paymentStatesType[]>(states);

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

  const addToCart = (product: DataType) => {
    dispatch({ type: "Add-to-cart", payload: product });
  };

  const removeFromCart = (product: DataType) => {
    dispatch({ type: "Remove-from-cart", payload: product });
    togglePopUp(false);
  };

  const addToCount = (product: DataType) => {
    dispatch({ type: "Add-to-count", payload: product });
  };

  const removeToCount = (product: DataType) => {
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
        freight,
        dispatch,
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
