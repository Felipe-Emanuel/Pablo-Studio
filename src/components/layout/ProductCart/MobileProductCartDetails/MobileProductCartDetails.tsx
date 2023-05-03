import { useCartContext } from "@hooks/useCartContext";
import { Product } from "@models/Product";
import { DropDown } from "@util/assets/Dropdown";
import { ArrowButton } from "@util/buttons/ArrowButton";
import { DocumentData } from "firebase/firestore";

interface MobileProductCartDetailsProps {
  product: DocumentData & Product
  isVisible: boolean
  cookieUser: string
  onClick: () => void;
}

interface renderButtonsCountsProps {
  text: string;
  className?: string;
  onClick: (product: DocumentData & Product) => void;
}

export function MobileProductCartDetails({
  product,
  isVisible,
  cookieUser,
  onClick,
}: MobileProductCartDetailsProps) {

  const { productId, removeFromCart, addToCount, removeToCount } = useCartContext();

  const handleDelete = () => {
    const index = product.findIndex((item: Product) => item.id === productId)
    removeFromCart(product[index])
  }

  const checkRotate = isVisible ? "-rotate-90" : "rotate-90";
  const checkVisibilityToHiddenElements = isVisible ? "flex" : "hidden";

  function RenderButtonsCount({
    text,
    className,
    onClick,
  }: renderButtonsCountsProps) {
    return (
      <button onClick={() => onClick(product)} className={`${className}`}>
        {text}
      </button>
    );
  }

  const checkVisibility = isVisible ? "h-5" : "h-1";

  return (
    <>
      <ArrowButton
        className={`flex md:hidden right-0 absolute top-2 h-4 ${checkRotate}`}
        onClick={onClick}
      />
      <DropDown
        onClick={onClick}
        className={`flex md:hidden items-center relative -top-5 ${checkVisibility}`}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`gap-4 ${checkVisibilityToHiddenElements}`}
        >
          <div className="px-4">
            <RenderButtonsCount
              text="Excluir"
              className="font-bold"
              onClick={handleDelete}
            />
          </div>
          <div className="flex gap-4">
            <RenderButtonsCount
              text="Remover"
              onClick={() => {
                removeToCount(product, cookieUser);
              }}
            />
          </div>
          <span className="text-center">{product.count}</span>
          <RenderButtonsCount
            text="Adicionar"
            onClick={() => {
              addToCount(product, cookieUser);
            }}
          />
        </div>
      </DropDown>
    </>
  );
}
