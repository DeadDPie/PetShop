import { useState } from "react";
import { ANIMALS } from "@/assets/constants/animals";
import { PRODUCTS } from "@/assets/constants/database";
import { Button, Typography } from "@/shared/ui";
import { SquareCheck, Square } from "tabler-icons-react";
import { X } from "tabler-icons-react";

interface FilterProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Filter: React.FC<FilterProps> = ({ setModal }) => {
  const [check, setCheck] = useState<string[]>([]);
  const uniqueBrand = [...new Set(PRODUCTS.map((item) => item.brand))];
  const sortedBrands = uniqueBrand.sort((a, b) => a.localeCompare(b));
  const topBrands = sortedBrands.slice(0, 5);
  // const remainingBrands = sortedBrands.slice(5);
  const toggleCheck = (title: string) => {
    setCheck((prevCheck) =>
      prevCheck.includes(title)
        ? prevCheck.filter((item) => item !== title)
        : [...prevCheck, title]
    );
  };
  return (
    <div className="bg-white p-8 rounded-[20px] border-white py-[30px] flex flex-col  justify-center max-w-[290px]  lg:border-[2px]  xl:border-greyDark">
      <button
        className="flex mr-[1px] ml-auto lg:hidden"
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
            className="flex flex-row m-[6px] cursor-pointer"
            onClick={() => toggleCheck(animal.title)}
          >
            {check.includes(animal.title) ? (
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
        {topBrands.map((brand, index) => (
          <div
            className="flex flex-row m-[6px] cursor-pointer"
            onClick={() => toggleCheck(brand)}
          >
            {check.includes(brand) ? (
              <SquareCheck color="#F9A779" className="cursor-pointer" />
            ) : (
              <Square className="stroke-1" />
            )}
            <p key={index} className="ml-2">
              {brand}
            </p>
          </div>
        ))}
        <div className="hidden">
          {/* {remainingBrands.map((brand, index) => (
            <div className="flex flex-row m-[6px]">
              {false ? <SquareCheck color="#F9A779" /> : <Square />}
              <p key={index + 5}>{brand}</p>
            </div>
          ))} */}
        </div>
      </div>

      <p className="font-semibold text-[18px] flex justify-center mt-[4px]">
        Цена
      </p>
      <div className="flex w-full max-w-[240px] justify-between ">
        <input
          className="m-2 border-2 border-greyDark rounded-lg text-center placeholder-black max-w-[100px] h-[40px]"
          placeholder="от"
        />
        <input
          className="m-2 border-2 border-greyDark rounded-lg text-center placeholder-black max-w-[100px]"
          placeholder="до"
        />
      </div>
      <Button className="my-5 h-[40px] text-l px-[7px] py-[7px] rounded-[7px] xl:rounded-[12px] xl:px-[10px] xl:py-[10px] xl:text-base">
        Отфильтровать
      </Button>
    </div>
  );
};
