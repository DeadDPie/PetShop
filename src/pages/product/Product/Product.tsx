import { PRODUCTS } from "@/assets/constants/database";
import { Rating, Review, Typography } from "@/shared/ui";
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
        <div>
          {product.image}
          <div className="relative w-[279px] h-[259px] overflow-hidden">
            fgb
            <img
              src={product.image}
              className="w-full h-full object-contain flex justify-end relative"
            />
            <Heart className="stroke-1 xl:stroke-2 absolute top-[7px] right-[11px]" />
          </div>
          <Rating rating={product.rating} />
          <Reviews reviews={product.reviews} />
        </div>
      )}
    </>
  );
};
