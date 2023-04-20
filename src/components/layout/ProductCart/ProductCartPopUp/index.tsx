
import { useCartContext } from "@hooks/useCartContext";
import { Product } from "@models/Product";
import { DocumentData } from "firebase/firestore";

interface ProductCartPopUpProps {
  product: DocumentData;
}

export function ProductCartPopUp({ product }: ProductCartPopUpProps) {
  const { popUp, productName, removeFromCart, togglePopUp } = useCartContext();

  const checkPopUp = popUp ? "opacity-100 visible" : " opacity-0 invisible";

  return (
    <>
      <div
        onKeyDown={(e) => e.key === "Escape" && togglePopUp(false)}
        tabIndex={0}
        onClick={() => togglePopUp(false)}
        id="modalBackground"
        className={`
            flex fixed top-0 left-0 w-full h-full bg-dark/40 z-50
            transition-all duration-150 ease-in ${checkPopUp}
          `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          id="modalContent"
          className="
              shadow shadow-white
              rounded-md m-auto relative -left-5 -top-5 w-full
              max-w-md h-fit bg-white text-center"
        >
          <div className="py-8">
            <span>
              Realmente deseja remover{" "}
                <span className="font-bold">{productName}</span>{" "}
              de seu carrinho?{" "}
            </span>
          </div>
          <div className="pb-8 w-full flex justify-evenly text-white">
            <button
              className="bg-danger py-2 px-4  transition-all rounded-md hover:bg-danger/75"
              //@ts-ignore
              onClick={() => removeFromCart(product)}
            >
              Remover
            </button>
            <button
              className="bg-secondary py-2 px-4 transition-all rounded-md hover:bg-secondary/75"
              onClick={() => togglePopUp(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
