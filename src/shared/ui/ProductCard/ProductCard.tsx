import { Heart } from "tabler-icons-react";
import { Button } from "../Button/Button";

export interface Review {
  rating: number;
  name: string;
  review: string;
}
interface ProductCardProps {
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
  reviews: Review[];
}

export const ProductCard = (product: ProductCardProps) => (
  <div className="flex flex-col items-center justify-between w-[129px] h-[197px] xl:h-[299px] gap-[5px] xl:gap-[10px] xl:w-[210px]">
    <div className="flex-grow w-full overflow-hidden relative">
      <img
        src={product.image}
        className="w-full h-full object-contain flex justify-end absolute bottom-0"
      />
      <Heart className="stroke-1 xl:stroke-2 absolute top-[7px] right-[11px]" />
    </div>

    <p className="text-xs xl:text-base max-w-[168px]">{product.title}</p>
    <div className="flex w-full items-center justify-between">
      <p className="text-sm px-[7px] xl:px-[15px] xl:text-base">
        {product.price}₽
      </p>
      <Button className="text-xs px-[7px] py-[7px] rounded-[7px] xl:rounded-[12px] xl:px-[10px] xl:py-[10px] xl:text-base">
        В корзину
      </Button>
    </div>
  </div>
);
