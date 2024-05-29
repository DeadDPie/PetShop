import { ProductProps } from "@/shared/api/types/types";
import { Button, Typography } from "@/shared/ui";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "tabler-icons-react";

interface ReviewProps {
  setModalReview: (props: boolean) => void;
  product: ProductProps;
}

export const Review = ({ setModalReview, product }: ReviewProps) => {
  const [rating, setRating] = useState(0);
  return (
    <div className="bg-white px-8 rounded-[20px] min-w-[300px] max-w-[330px] border-white py-[30px] flex flex-col  justify-center xl:p-12 lg:min-w-[650px]">
      <Typography
        variant="h3"
        className="font-bold xl:text-[24px] flex justify-center xl:mb-4"
      >
        Оставить отзыв
      </Typography>

      <form>
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center ">
          <div className="flex flex-col items-center justify-between gap-[3px] min-w-[100px] min-h-[180px] xl:h-[299px]  xl:w-[210px] my-2">
            <Typography
              variant="h4"
              className="xl:text-[20px] mb-2 flex justify-center xl:mb-4"
            >
              {product.title}
            </Typography>
            {product.image && (
              <div className="flex-grow w-full overflow-hidden relative cursor-pointer ">
                <Link to={`/${product.id}`}>
                  <img
                    src={product.image}
                    className="w-full h-full max-h-[200px] object-contain flex justify-start absolute top-0"
                  />
                </Link>
              </div>
            )}
          </div>

          <div className="w-full xl:max-w-[300px] ">
            <div className="relative flex items-center gap-[15px]">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Star
                    key={`empty-${index}`}
                    className={`text-yellow cursor-pointer ${
                      index < rating ? "fill-yellow" : ""
                    }`}
                    onClick={() => setRating(index + 1)}
                  />
                ))}
            </div>
            <textarea
              id="post"
              className="min-w-[200px] w-full my-1 min-h-[200px] p-2 border border-beige bg-beige rounded-[12px] placeholder:text-center "
              placeholder="Здесь можно оставить отзыв"
            />
          </div>
        </div>

        <div className="flex flex-row gap-5 justify-between xl:justify-around mt-4">
          <Button
            type="submit"
            className="px-1 py-[1px] xl:px-5 xl:py-3 rounded-[12px]"
          >
            Оставить отзыв
          </Button>
          <Button
            variant="OUTLINE"
            className="px-1 py-[1px]  xl:px-5 xl:py-3"
            onClick={() => setModalReview(false)}
          >
            Отмена
          </Button>
        </div>
      </form>
    </div>
  );
};
