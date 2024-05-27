import { ANIMALS } from "@/assets/constants/animals";
import { CategoryCard, Typography } from "@/shared/ui";
import { Link } from "react-router-dom";

export const AnimalProducts = () => (
  <div className="relative flex flex-col items-center pt-[21px] xl:pt-[68px] px-6 pb-[3px] xl:gap-[25px] gap-[8px]">
    <Typography variant="h4" className="xl:text-[32px]">
      Товары для животных
    </Typography>
    <div className="grid grid-cols-3 sm:grid-cols-5 xl:gap-x-7 gap-x-[8px] gap-y-6 ">
      {ANIMALS.map((animal) => (
        <Link to={`animal?type=${animal.route}`} key={animal.route}>
          <CategoryCard {...animal} key={animal.route} />
        </Link>
      ))}
    </div>
  </div>
);
