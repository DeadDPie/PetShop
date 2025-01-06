import { useCart } from "@/shared/contexts/cart";
import { Cart } from "./Cart";
import { OrderRegistration } from "./OrderRegistration";

export const CartPage = () => {
  const { cart } = useCart();
  return (
    <div className="w-full flex justify-center">
      <div className="relative flex flex-col w-full items-center xl:items-start max-w-[713px] xl:max-w-[1264px] xl:flex-row gap-12 pt-[21px] xl:pt-[68px] px-6 xl:px-0 pb-[3px] xl:gap-[100px] xl:justify-between mb-[55px]">
        <Cart />
        {!!cart.length && <OrderRegistration />}
      </div>
    </div>
  );
};
