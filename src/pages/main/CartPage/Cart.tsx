import { PRODUCTS } from "@/mock/database/database";
import { CartItem } from "./CartItem";
import { Typography } from "@/shared/ui";
import { useCart } from "@/shared/contexts/cart";
export const Cart = () => {
  const { cart } = useCart();
  return (
    <div>
      <Typography
        variant="h4"
        className="flex justify-center mb-7 xl:text-[30px]"
      >
        Корзина
      </Typography>
      <div className="flex flex-col gap-x-[35px] gap-y-6">
        {PRODUCTS.filter((product) =>
          cart.some((item) => item.id === product.id)
        ).map((product) => (
          <CartItem {...product} />
        ))}
      </div>
    </div>
  );
};
