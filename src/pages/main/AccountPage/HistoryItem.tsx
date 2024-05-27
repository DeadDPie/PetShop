// import { Link } from "react-router-dom";
import { ProductProps } from "@/shared/api/types/types";
import { Link } from "react-router-dom";

export const HistoryItem = (product: ProductProps) => {
  return (
    <div className="flex flex-col items-center justify-between gap-[3px] w-[135px] h-[213px] xl:h-[299px]  xl:w-[210px]">
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
      <p className="text-sm text-center xl:text-lg max-w-[168px]">
        {product.title}
      </p>
      <p className="text-xs xl:text-base ">04.03.2024</p>

      <p className="text-sm px-[7px] font-medium xl:px-[15px] xl:text-base">
        {product.price}₽
      </p>
      <button className="bg-white border border-brown px-[8px] py-[1px] rounded-[10px] ">
        Оставить отзыв
      </button>
    </div>
  );
};
