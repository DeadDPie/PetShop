import { useSearchParams } from "react-router-dom";
import { AdjustmentsHorizontal } from "tabler-icons-react";

import { CATEGORIES } from "@/assets/constants/categories";
import { PRODUCTS } from "@/assets/constants/database";
import { CategoryCard, Modal, ProductCard, Typography } from "@/shared/ui";
import { Filter } from "@/shared/ui/Filter/Filter";
import { useState } from "react";

export const Category = () => {
  const [searchParams] = useSearchParams();
  const [modal, setModal] = useState(false);

  console.log(searchParams.get("id"));

  return (
    <div className="relative flex flex-col items-center pt-[21px] xl:pt-[68px] px-6 pb-[3px] xl:gap-[25px] gap-[8px] mb-[55px]">
      <Typography variant="h4" className="xl:text-[32px]">
        Категории
      </Typography>
      <div className="grid grid-cols-3 sm:grid-cols-5 xl:gap-x-7 gap-x-[8px] gap-y-6 ">
        {CATEGORIES.map((category) => (
          <CategoryCard {...category} type="category" />
        ))}
      </div>

      <div className="flex flex-col gap-[18px] mt-4">
        <div className="flex justify-between w-full xl:hidden">
          <Typography variant="h4" className="xl:text-[32px]">
            Товары
          </Typography>
          <AdjustmentsHorizontal
            className="size-6 cursor-pointer"
            onClick={() => setModal(true)}
          />
        </div>
        <div className="flex flex-row">
          <div className="hidden xl:block mx-10">
            <Filter setModal={setModal} />
          </div>

          <Modal className={modal ? "w-full" : "hidden"}>
            <Filter setModal={setModal} />
          </Modal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[35px] gap-y-6">
            {PRODUCTS.filter(
              (animal) => animal.category === searchParams.get("id")
            ).map((animal) => (
              <ProductCard {...animal} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
