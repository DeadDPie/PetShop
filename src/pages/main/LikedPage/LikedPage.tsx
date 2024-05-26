import { PRODUCTS } from "@/assets/constants/database";
import { ProductCard, Typography } from "@/shared/ui";

export const LikedPage = () => {
  return (
    <div className="w-full">
      <div className="relative flex flex-col items-center pt-[21px] xl:pt-[68px] px-6 pb-[3px] xl:gap-[25px] gap-[8px] mb-[55px]">
        <div className="flex flex-col gap-[18px] mt-4">
          <Typography
            variant="h4"
            className="flex justify-center mb-7 xl:text-[32px]"
          >
            Избранное
          </Typography>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[35px] gap-y-6">
            {PRODUCTS.map((animal) => (
              <ProductCard {...animal} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
