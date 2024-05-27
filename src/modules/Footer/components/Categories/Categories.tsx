import { ANIMALS } from "@/assets/constants/animals";
import { CATEGORIES } from "@/assets/constants/categories";
import { Link } from "react-router-dom";

export const Categories = () => (
  <div>
    <div className="flex flex-col gap-3">
      <div className="text-xl">Категории товаров</div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-[77px]">
        <div className="flex flex-col gap-3 text-base">
          {CATEGORIES.map((category) => (
            <Link
              to={category.route}
              key={category.title}
              className="hover:font-bold"
            >
              {category.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 text-base">
          {ANIMALS.map((animal) => (
            <Link
              to={animal.route}
              key={animal.title}
              className="hover:font-bold"
            >
              {animal.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);
