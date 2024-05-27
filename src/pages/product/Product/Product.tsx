import { PRODUCTS } from "@/assets/constants/database";
import { Button, Rating, Typography } from "@/shared/ui";
import { useParams } from "react-router-dom";
import { Reviews } from "./components/Reviews/Reviews";
import { Heart } from "tabler-icons-react";
import { useGetProductByIdQuery } from "@/shared/api/hooks/useGetProductByIdQuery";
import { useLiked } from "@/shared/contexts/liked";
import { useCart } from "@/shared/contexts/cart";

export interface ReviewProps {
  rating: number;
  name: string;
  review: string;
}

export interface ProductProps {
  id: number;
  image: string;
  title: string;
  price: string;
  rating: number;
  brand: string;
  for: string;
  class: string;
  type: string;
  description: string;
  structure: string;
  reviews: ReviewProps[];
}

export const Product = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isSuccess } = useGetProductByIdQuery({
    id: id as string,
  });
  console.log(product);

  const { liked, setLiked } = useLiked();
  const { cart, setCart } = useCart();

  const toggleLiked = () => {
    if (liked.includes(product!.id)) {
      setLiked(liked.filter((id) => id !== product!.id)); // Remove from liked
    } else {
      setLiked([...liked, product!.id]); // Add to liked
    }
  };

  const toggleCart = () => {
    if (cart.includes(product!.id)) {
      setCart(cart.filter((id) => id !== product!.id)); // Remove from cart
    } else {
      setCart([...cart, product!.id]); // Add to cart
    }
  };

  return (
    <>
      {product && isSuccess && (
        <div className="px-[17px] flex flex-col items-center pt-[26px] lg:px-[55px] lg:pt-[71px]">
          <div className="flex flex-col w-full  items-center lg:items-start lg:justify-between gap-3 max-w-[1360px] lg:flex-row lg:gap-[69px]">
            <div className="relative w-[170px] h-[220px] xl:ml-[69px]">
              <img
                src={product.image}
                className="w-full h-full object-contain flex justify-end relative"
              />
              {liked.includes(product.id) ? (
                <Heart
                  className="fill-peach size-8 lg:hidden stroke-1 xl:stroke-2 absolute top-0 -right-[38px] cursor-pointer"
                  onClick={toggleLiked}
                />
              ) : (
                <Heart
                  className="size-8 lg:hidden stroke-1 xl:stroke-2 absolute top-0 -right-[38px] cursor-pointer"
                  onClick={toggleLiked}
                />
              )}
            </div>

            <Typography
              variant="h4"
              className="text-center lg:hidden max-w-[245px] mb-[6px]"
            >
              {product.title}
            </Typography>
            <div className="flex w-full lg:hidden justify-between max-w-[280px] items-center mb-[2px]">
              <p className="text-[24px]">{product.price}₽</p>
              {cart.includes(product.id) ? (
                <Button
                  variant="OUTLINE"
                  className="px-[5px] py-[13px] min-w-[190px]"
                  onClick={toggleCart}
                >
                  В корзине
                </Button>
              ) : (
                <Button className="px-[5px] py-[13px]" onClick={toggleCart}>
                  Добавить в корзину
                </Button>
              )}
            </div>
            <div className="w-full lg:w-fit flex flex-col gap-[10px] max-w-[700px] lg:flex-grow lg:max-w-[633px]">
              <p className="text-[36px] hidden lg:block font-comfortaa">
                {product.title}
              </p>
              <Rating rating={product.rating} />
              <div className="w-full flex flex-col gap-3">
                <p className="font-bold">Информация о товаре</p>
                <div className="flex gap-1">
                  <p className="font-bold">Бренд:</p>
                  <p>{product.brand}</p>
                </div>
                <div className="flex gap-1">
                  <p className="font-bold">Для кого:</p>
                  <p>{product.for}</p>
                </div>
                <div className="flex gap-1">
                  <p className="font-bold">Класс:</p>
                  <p>{product.class}</p>
                </div>
                <p>{product.description}</p>

                <p className="flex flex-wrap">
                  <span className="font-bold">Состав:</span>
                  {product.structure}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[61px]">
              <div className="w-full pl-[13px] lg:flex hidden justify-between flex-col gap-[10px]">
                <p className="text-[32px]">{product.price}₽</p>
                {cart.includes(product.id) ? (
                  <Button
                    variant="OUTLINE"
                    className="px-[21px] py-[13px] rounded-[12px] text-[18px] max-w-[245px]"
                    onClick={toggleCart}
                  >
                    В корзине
                  </Button>
                ) : (
                  <Button
                    className="px-[21px] py-[13px] rounded-[12px] text-[18px] max-w-[245px]"
                    onClick={toggleCart}
                  >
                    Добавить в корзину
                  </Button>
                )}
              </div>
              <div className="w-full lg:flex hidden justify-between items-center max-w-[272px] flex-col">
                <p className="text-[20px] font-comfortaa">
                  Сохраните этот товар
                </p>
                <Button className="px-[21px] py-[13px] rounded-[12px] bg-pink max-w-[245px] text-[18px]">
                  Добавить в избранное
                </Button>
              </div>
            </div>
          </div>
          <Reviews reviews={product.reviews} />
        </div>
      )}
    </>
  );
};
