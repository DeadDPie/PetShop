import { useCart } from "@/shared/contexts/cart";
import { Cart } from "./Cart";
import { OrderRegistration } from "./OrderRegistration";

export const CartPage = () => {
  const { cart } = useCart();
  return (
    <div className="relative flex flex-col xl:flex-row gap-12 pt-[21px] xl:pt-[68px] px-6 pb-[3px] xl:gap-[100px] xl:justify-center mb-[55px]">
      <Cart />
      {!!cart.length && <OrderRegistration />}
    </div>
  );
};
