import { Link } from "react-router-dom";

import { ProductProps } from "@/assets/constants/database";
import { Button } from "@/shared/ui";
export const CartItem = (product: ProductProps) => {
  return (
    <div className="p-2 flex flex-row border rounded-xl border-greyDark xl:gap-10  xl:p-4">
      <Link to={`/${product.id}`} className="relative cursor-pointer">
        <img
          src={product.image}
          alt={product.title}
          className="w-38 h-26 xl:w-42 xl:h-30 object-contain"
        />
      </Link>
      <div className="flex flex-col place-content-between">
        <div className="flex-grow">
          <p className="text-sm font-semibold flex justify-start mt-[4px] xl:text-xl">
            {product.title}
          </p>
        </div>
        <div className="">
          <button className="text-sm px-[14px] py-1 xl:px-[20px] xl:text-xl bg-grey border-2 border-grey rounded-l-lg hover:bg-greyDark">
            -
          </button>
          <button className="text-sm px-[14px] py-1 xl:px-[20px] xl:text-xl bg-white border-2 border-grey border-l border-r hover:bg-greyDark">
            1
          </button>
          <button className="text-sm px-[14px] py-1 xl:px-[20px] xl:text-xl bg-grey border-2 border-grey rounded-r-lg hover:bg-greyDark">
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col place-content-between">
        <Button
          variant="OUTLINE"
          className="text-xs text-black border-greyDark rounded-[10px] px-2 py-1 xl:text-base "
        >
          Удалить
        </Button>
        <div className="felx justify-center text-base font-medium xl:text-2xl ">
          <p>{product.price}₽</p>
        </div>
      </div>
    </div>
  );
};
