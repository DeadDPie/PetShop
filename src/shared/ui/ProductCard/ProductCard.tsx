import { Heart } from "tabler-icons-react";
import { Link } from "react-router-dom";

import { ProductProps } from "@/assets/constants/database";

import { Button } from "../Button/Button";
import { useLiked } from "@/shared/contexts/liked";
import { useCart } from "@/shared/contexts/cart";

export const ProductCard = (product: ProductProps) => {
  const { liked, setLiked } = useLiked();
  const { cart, setCart } = useCart();

  const toggleLiked = () => {
    if (liked.includes(product.id)) {
      setLiked(liked.filter((id) => id !== product.id)); // Remove from liked
    } else {
      setLiked([...liked, product.id]); // Add to liked
    }
  };

  const toggleCart = () => {
    if (cart.includes(product.id)) {
      setCart(cart.filter((id) => id !== product.id)); // Remove from cart
    } else {
      setCart([...cart, product.id]); // Add to cart
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-[129px] h-[197px] xl:h-[299px] gap-[5px] xl:gap-[10px] xl:w-[210px]">
      {product.image && (
        <div className="flex-grow w-full overflow-hidden relative cursor-pointer">
          <Link to={`/${product.id}`}>
            <img
              src={product.image}
              className="w-full h-full object-contain flex justify-end absolute bottom-0"
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
        {cart.includes(product.id) ? (
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
