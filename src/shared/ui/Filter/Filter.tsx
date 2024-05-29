import { useState } from "react";
import { Button, Typography } from "@/shared/ui";
import { X, Square, SquareCheck } from "tabler-icons-react";
import { ANIMALS } from "@/assets/constants/animals";
import { PRODUCTS } from "@/mock/database/database";

interface FilterProps {
  setModal: (props: boolean) => void;
  onApplyFilters: (
    checkedTypes: string[],
    checkedBrands: string[],
    minPrice: string,
    maxPrice: string
  ) => void;
  initialSelectedTypes: string[];
  initialSelectedBrands: string[];
  initialMinPrice: string | null;
  initialMaxPrice: string | null;
}

export const Filter = ({
  setModal,
  onApplyFilters,
  initialSelectedTypes,
  initialSelectedBrands,
  initialMinPrice,
  initialMaxPrice,
}: FilterProps) => {
  const [checkedTypes, setCheckedTypes] =
    useState<string[]>(initialSelectedTypes);
  const [checkedBrands, setCheckedBrands] = useState<string[]>(
    initialSelectedBrands
  );
  const [minPrice, setMinPrice] = useState(initialMinPrice || "");
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice || "");

  const uniqueBrand = [...new Set(PRODUCTS.map((item) => item.brand))];
  const sortedBrands = uniqueBrand.sort((a, b) => a.localeCompare(b));
  const topBrands = sortedBrands.slice(0, 5);

  const toggleTypeCheck = (type: string) => {
    setCheckedTypes((prevCheckedTypes) =>
      prevCheckedTypes.includes(type)
        ? prevCheckedTypes.filter((item) => item !== type)
        : [...prevCheckedTypes, type]
    );
  };

  const toggleBrandCheck = (brand: string) => {
    setCheckedBrands((prevCheckedBrands) =>
      prevCheckedBrands.includes(brand)
        ? prevCheckedBrands.filter((item) => item !== brand)
        : [...prevCheckedBrands, brand]
    );
  };

  const handleApplyFilters = () => {
    onApplyFilters(checkedTypes, checkedBrands, minPrice, maxPrice);
    setModal(false);
  };

  return (
    <div className="bg-white p-8 rounded-[20px] border-white py-[30px] flex flex-col  justify-center max-w-[290px]  lg:border-[2px]  xl:border-greyDark">
      <button
        className="flex mr-[1px] ml-auto xl:hidden"
        onClick={() => setModal(false)}
      >
        <X />
      </button>
      <Typography
        variant="h2"
        className="font-bold xl:text-[30px] flex justify-center"
      >
        Фильтр
      </Typography>
      <p className="font-semibold text-[18px] flex justify-center mt-[4px]">
        Для кого
      </p>
      <div>
        {ANIMALS.map((animal) => (
          <div
            key={animal.title}
            className="flex flex-row m-[6px] cursor-pointer"
            onClick={() => toggleTypeCheck(animal.route)}
          >
            {checkedTypes.includes(animal.route) ? (
              <SquareCheck color="#F9A779" className="cursor-pointer" />
            ) : (
              <Square className="stroke-1" />
            )}
            <p className="ml-2">{animal.title}</p>
          </div>
        ))}
      </div>

      <p className="font-semibold text-[18px] flex justify-center mt-[4px]">
        Бренд
      </p>
      <div>
        {topBrands.map((brand) => (
          <div
            key={brand}
            className="flex flex-row m-[6px] cursor-pointer"
            onClick={() => toggleBrandCheck(brand)}
          >
            {checkedBrands.includes(brand) ? (
              <SquareCheck color="#F9A779" className="cursor-pointer" />
            ) : (
              <Square className="stroke-1" />
            )}
            <p className="ml-2">{brand}</p>
          </div>
        ))}
      </div>
      <p className="font-semibold text-[18px] flex justify-center mt-[4px]">
        Цена
      </p>
      <div className="flex w-full max-w-[240px] justify-between">
        <input
          className="m-2 border-2 border-greyDark rounded-lg text-center placeholder-black max-w-[100px] h-[40px]"
          placeholder="от"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          className="m-2 border-2 border-greyDark rounded-lg text-center placeholder-black max-w-[100px]"
          placeholder="до"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <Button
        className="my-5 h-[40px] text-l px-[7px] py-[7px] rounded-[7px] xl:rounded-[12px] xl:px-[10px] xl:py-[10px] xl:text-base"
        onClick={handleApplyFilters}
      >
        Отфильтровать
      </Button>
      <Button
        variant="OUTLINE"
        className="my-1 h-[40px] text-l px-[7px] py-[7px] rounded-[7px] xl:rounded-[12px] xl:px-[10px] xl:py-[10px] xl:text-base"
      >
        Сбросить
      </Button>
    </div>
  );
};
