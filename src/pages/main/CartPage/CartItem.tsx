import { Link } from "react-router-dom";

import { Button } from "@/shared/ui";
import { CartProps, useCart } from "@/shared/contexts/cart";
import { ProductProps } from "@/shared/api/types/types";
export const CartItem = (product: ProductProps) => {
  const { cart, setCart } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);

  const changCart = (change: number) => {
    if (change !== 0) {
      setCart((prevCart: CartProps[]) => {
        return prevCart.map((cartItem) => {
          if (cartItem.id === product.id) {
            cartItem.amount += change;
          }
          return cartItem;
        });
      });
    } else {
      setCart((prevCart: CartProps[]) => {
        return prevCart.filter((cartItem) => cartItem.id !== product.id);
      });
    }
  };

  return (
    <div className="p-2 flex flex-row border rounded-xl border-greyDark xl:gap-10  xl:p-4">
      <Link to={`/${product.id}`} className="relative cursor-pointer">
        <img
          src={product.image}
          alt={product.title}
          className="w-38 h-26 xl:w-42 xl:h-30 object-contain"
        />
      </Link>
      <div className="flex flex-col place-content-between">
        <div className="flex-grow">
          <p className="text-sm font-semibold flex justify-start mt-[4px] xl:text-xl">
            {product.title}
          </p>
        </div>
        <div className="">
          <button
            className="text-sm px-[14px] py-1 xl:px-[20px] xl:text-xl bg-grey border-2 border-grey rounded-l-lg hover:bg-greyDark"
            onClick={() => changCart(-1)}
            disabled={cartItem?.amount === 1}
          >
            -
          </button>
          <button className="text-sm px-[14px] py-1 xl:px-[20px] xl:text-xl bg-white border-2 border-grey border-l border-r hover:bg-greyDark">
            {cartItem?.amount}
          </button>
          <button
            className="text-sm px-[14px] py-1 xl:px-[20px] xl:text-xl bg-grey border-2 border-grey rounded-r-lg hover:bg-greyDark"
            onClick={() => changCart(1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col place-content-between">
        <Button
          variant="OUTLINE"
          className="text-xs text-[black] border-greyDark rounded-[10px] px-2 py-[4px] xl:text-base "
          onClick={() => changCart(0)}
        >
          Удалить
        </Button>
        <div className="felx justify-center text-base font-medium xl:text-2xl ">
          <p>{product.price}₽</p>
        </div>
      </div>
    </div>
  );
};
