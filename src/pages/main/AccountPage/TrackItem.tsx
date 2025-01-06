import { Link } from "react-router-dom";
import { Typography } from "@/shared/ui";
import { TrackeProductProps } from "@/assets/constants/database";

export const TrackItem = (product: TrackeProductProps) => {
  return (
    <div className="p-2 mt-3 flex flex-row border-b border-greyDark max-w-[280px] xl:max-w-[480px] xl:gap-10 xl:p-4">
      <Link to={`/${product.id}`} className="relative cursor-pointer">
        <img
          src={product.image}
          alt={product.title}
          className="min-w-[120px] min-h-[100px] object-contain"
        />
      </Link>
      <div className="flex flex-col place-content-between">
        <div className="flex-grow">
          <Typography
            variant="h4"
            className=" font-bold xl:text-[20px] flex justify-start p-[2px]"
          >
            {product.title}
          </Typography>
          <Typography
            variant="h4"
            className={`text-base text-${product.status.color} xl:text-[18px] flex justify-start p-[2px]`}
          >
            {product.status.status}
          </Typography>
          <Typography
            variant="h4"
            className=" xl:text-[18px] flex justify-start p-[2px]"
          >
            {product.adress}
          </Typography>
        </div>
      </div>
    </div>
  );
};
