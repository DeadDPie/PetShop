import { PRODUCTS } from "@/assets/constants/database";
import { Button, Rating, Typography } from "@/shared/ui";
import { useParams } from "react-router-dom";
import { Reviews } from "./components/Reviews/Reviews";
import { Heart } from "tabler-icons-react";

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
  const product = PRODUCTS.find((p) => p.id === parseInt(id || "", 10));

  return (
    <>
      {product && (
        <div className="px-[17px] flex flex-col items-center pt-[26px] lg:px-[55px] lg:pt-[71px]">
          <div className="flex flex-col w-full  items-center lg:items-start lg:justify-between gap-3 max-w-[1360px] lg:flex-row lg:gap-[69px]">
            <div className="relative w-[170px] h-[220px] xl:ml-[69px]">
              <img
                src={product.image}
                className="w-full h-full object-contain flex justify-end relative"
              />
              <Heart className="size-8 lg:hidden stroke-1 xl:stroke-2 absolute top-0 -right-[38px]" />
            </div>

            <Typography
              variant="h4"
              className="text-center lg:hidden max-w-[245px] mb-[6px]"
            >
              {product.title}
            </Typography>
            <div className="flex w-full lg:hidden justify-between max-w-[280px] items-center mb-[2px]">
              <p className="text-[24px]">{product.price}₽</p>
              <Button className="px-[5px] py-[13px]">Добавить в корзину</Button>
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
            <div className="w-full lg:flex hidden justify-between max-w-[245px] flex-col gap-[10px]">
              <p className="text-[32px]">{product.price}₽</p>
              <Button className="px-[5px] py-[13px]">Добавить в корзину</Button>
            </div>
          </div>
          <Reviews reviews={product.reviews} />
        </div>
      )}
    </>
  );
};
