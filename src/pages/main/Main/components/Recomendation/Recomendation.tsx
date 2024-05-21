import { PRODUCTS } from "@/assets/constants/database";
import { Button, ProductCard, Typography } from "@/shared/ui";

export const Recomendation = () => (
  <div className="relative flex flex-col items-center pt-[21px] xl:pt-[68px] px-6 pb-[3px] xl:gap-[25px] gap-[8px] mb-[55px]">
    <Typography variant="h4" className="xl:text-[32px]">
      Рекомендуем
    </Typography>
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-x-[35px] gap-y-6">
      {PRODUCTS.filter((product) => product.category === "recomendation").map(
        (product) => (
          <ProductCard {...product} />
        )
      )}
    </div>
    <Button
      variant="OUTLINE"
      className="text-xs rounded-[7px] mt-7  px-6 py-[7px]"
    >
      Больше
    </Button>
  </div>
);
