import { ProductProps } from "@/shared/api/types/types";
import { Button, Typography } from "@/shared/ui";
import { Link } from "react-router-dom";

interface ReviewProps {
  setModalReview: (props: boolean) => void;
  product: ProductProps;
}

export const Review = ({ setModalReview, product }: ReviewProps) => {
  return (
    <div className="bg-white px-8 rounded-[20px] min-w-[300px] max-w-[330px] border-white py-[30px] flex flex-col  justify-center xl:p-16 lg:min-w-[520px]">
      <Typography
        variant="h3"
        className="font-bold xl:text-[24px] flex justify-center xl:mb-4"
      >
        Оставить отзыв
      </Typography>

      <form>
        <div className="flex flex-col xl:flex-row">
          <div className="flex flex-col items-center justify-between gap-[3px] w-[135px] h-[213px] xl:h-[299px]  xl:w-[210px]">
            <Typography
              variant="h3"
              className="font-bold xl:text-[24px] flex justify-center xl:mb-4"
            >
              {product.title}
            </Typography>
            {product.image && (
              <div className="flex-grow w-full overflow-hidden relative cursor-pointer">
                <Link to={`/${product.id}`}>
                  <img
                    src={product.image}
                    className="w-full h-full object-contain flex justify-end absolute bottom-0"
                  />
                </Link>
              </div>
            )}
          </div>

          <div className="m-2">
            <input
              type="text"
              id="post"
              className="w-full h-full p-2 border border-beige bg-beige rounded-xl"
              placeholder="Здесь можно оставить отзыв"
            />
          </div>
        </div>

        <div className="flex flex-row gap-5 justify-center xl:justify-around">
          <Button type="submit" className="px-2 py-1">
            Оставить отзыв
          </Button>
          <Button
            variant="OUTLINE"
            className="px-2 py-1"
            onClick={() => setModalReview(false)}
          >
            Отмена
          </Button>
        </div>
      </form>
    </div>
  );
};
