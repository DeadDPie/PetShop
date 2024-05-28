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
    <div className="w-full flex flex-row border rounded-xl justify-between border-greyDark p-2 md:p-4">
      <div className="flex md:gap-[56px]">
        <Link to={`/${product.id}`} className="relative cursor-pointer">
          <img
            src={product.image}
            alt={product.title}
            className="w-38 h-26 md:pl-[30px] xl:w-42 xl:h-30 object-contain"
          />
        </Link>
        <div className="flex flex-col place-content-between">
          <div className="flex-grow">
            <p className="text-sm font-semibold text-wrap flex justify-start mt-[4px] lg:text-xl">
              {product.title}
            </p>
          </div>
          <div className="h-[29px] md:h-[40px] mb-1">
            <button
              className="text-sm px-[14px] h-full py-1 md:px-[20px] md:text-md bg-grey border-2 border-grey rounded-l-lg hover:bg-greyDark"
              onClick={() => changCart(-1)}
              disabled={cartItem?.amount === 1}
            >
              -
            </button>
            <button className="text-sm px-[14px] h-full py-1 md:px-[20px] md:text-md bg-white border-2 border-grey border-l border-r hover:bg-greyDark">
              {cartItem?.amount}
            </button>
            <button
              className="text-sm px-[14px] py-1 h-full md:px-[20px] md:text-md bg-grey border-2 border-grey rounded-r-lg hover:bg-greyDark"
              onClick={() => changCart(1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col place-content-between items-center pb-3">
        <Button
          variant="OUTLINE"
          className="text-xs text-[black] border-greyDark rounded-[10px] px-1 md:px-2 py-[4px] md:text-base "
          onClick={() => changCart(0)}
        >
          Удалить
        </Button>
        <div className="felx justify-center text-base font-medium md:text-2xl ">
          <p>{product.price}₽</p>
        </div>
      </div>
    </div>
  );
};
