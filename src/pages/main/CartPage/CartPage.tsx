import { Cart } from "./Cart";
import { OrderRegistration } from "./OrderRegistration";

export const CartPage = () => {
  return (
    <div className="relative flex flex-col xl:flex-row gap-12 pt-[21px] xl:pt-[68px] px-6 pb-[3px] xl:gap-[100px] xl:justify-center mb-[55px]">
      <Cart />
      <OrderRegistration />
    </div>
  );
};
