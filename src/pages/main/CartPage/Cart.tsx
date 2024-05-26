import { PRODUCTS } from "@/assets/constants/database";
import { CartItem } from "./CartItem";
import { Typography } from "@/shared/ui";
export const Cart = () => {
  return (
    <div>
      <Typography
        variant="h4"
        className="flex justify-center mb-7 xl:text-[30px]"
      >
        Корзина
      </Typography>
      <div className="flex flex-col gap-x-[35px] gap-y-6">
        {PRODUCTS.map((product) => (
          <CartItem {...product} />
        ))}
      </div>
    </div>
  );
};
