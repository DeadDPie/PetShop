import { Heart } from "tabler-icons-react";
import { Link } from "react-router-dom";

import { Button } from "../Button/Button";
import { useLiked } from "@/shared/contexts/liked";
import { useCart } from "@/shared/contexts/cart";
import { ProductProps } from "@/shared/api/types/types";

export const ProductCard = (product: ProductProps) => {
  const { liked, setLiked } = useLiked();
  const { cart, setCart } = useCart();

  const toggleLiked = () => {
    if (liked.includes(product.id)) {
      setLiked(liked.filter((id) => id !== product.id));
    } else {
      setLiked([...liked, product.id]);
    }
  };

  const toggleCart = () => {
    if (!!cart.length && cart.find((cart) => cart.id === product.id)) {
      setCart(cart.filter((cart) => cart.id !== product.id));
    } else {
      setCart([...cart, { id: product.id, amount: 1, price: product.price }]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-[129px] h-[197px] xl:h-[299px] gap-[5px] xl:gap-[10px] xl:w-[208px]">
      {product.image && (
        <div
          className={`flex-grow w-full overflow-hidden relative cursor-pointer ${
            product.tag === "Новинка" &&
            "rounded-[13px] border-[3px] border-pink"
          }  ${
            product.tag === "Эксклюзив" &&
            "rounded-[13px] border-[3px] border-secondary"
          }`}
        >
          <Link to={`/${product.id}`}>
            <img
              src={product.image}
              className={`w-full h-full object-contain flex justify-end  ${
                product.tag !== null &&
                "bottom-2 h-[100px] !w-[100px]"
              }`}
            />
          </Link>
          {liked.includes(product.id) ? (
            <Heart
              className="fill-peach stroke-1 xl:stroke-2 absolute top-[7px] right-[11px]"
              onClick={toggleLiked}
            />
          ) : (
            <Heart
              className="stroke-1 xl:stroke-2 absolute top-[7px] right-[11px]"
              onClick={toggleLiked}
            />
          )}
        </div>
      )}
      <p className="text-xs xl:text-base max-w-[168px]">{product.title}</p>
      <div className="flex w-full items-center justify-between">
        <p className="text-sm px-[7px] xl:px-[15px] xl:text-base">
          {product.price}₽
        </p>
        {cart.find((cart) => cart.id === product.id) ? (
          <Button
            variant="OUTLINE"
            className="text-xs px-[7px] py-[7px] rounded-[7px] xl:rounded-[12px] xl:px-[10px] xl:py-[10px] xl:text-base"
            onClick={toggleCart}
          >
            В корзине
          </Button>
        ) : (
          <Button
            className="text-xs px-[7px] py-[7px] rounded-[7px] xl:rounded-[12px] xl:px-[10px] xl:py-[10px] xl:text-base"
            onClick={toggleCart}
          >
            В корзину
          </Button>
        )}
      </div>
    </div>
  );
};
