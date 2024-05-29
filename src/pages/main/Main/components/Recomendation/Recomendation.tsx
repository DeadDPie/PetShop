import { useGetProductsQuery } from "@/shared/api/hooks/useGetProductsQuery";
import { Button, ProductCard, Typography } from "@/shared/ui";
import { Link } from "react-router-dom";

export const Recomendation = () => {
  const { data, isSuccess } = useGetProductsQuery({
    params: {
      limit: "5",
      current: "1",
    },
  });

  return (
    <>
      {data && isSuccess && (
        <div className="relative w-full flex flex-col items-center pt-[21px] xl:pt-[68px] px-6 pb-[3px] xl:gap-[25px] gap-[8px] mb-[55px]">
          <Typography variant="h4" className="xl:text-[32px]">
            Рекомендуем
          </Typography>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-x-[35px] gap-y-6">
            {data.rows
              .filter((product) => product.isRecommended)
              .map((product) => (
                <ProductCard {...product} />
              ))}
          </div>
          <div>
            <Link to="animal">
              <Button
                variant="OUTLINE"
                className="text-xs text-center w-full rounded-[7px] mt-7 px-[100px] xl:px-[50px] py-[7px] md:rounded-[12px] md:text-base md:px-9 md:py-[10px]"
              >
                Больше
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
