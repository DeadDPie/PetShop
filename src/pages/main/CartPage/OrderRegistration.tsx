import { ADDRESSES } from "@/assets/constants/addresses";
import { useCart } from "@/shared/contexts/cart";
import { Button, Typography } from "@/shared/ui";

export const OrderRegistration = () => {
  const { cart } = useCart();

  const totalPrice = cart
    .map((item) => item.amount * item.price)
    .reduce((total, price) => total + price, 0);

  return (
    <div className="w-full flex flex-col md:w-[430px] items-center ">
      <Typography
        variant="h4"
        className="flex justify-center mb-7 xl:text-[32px]"
      >
        Оформление заказа
      </Typography>
      <div className="w-full">
        <form className="flex flex-col w-full items-center">
          <div className="mb-4 w-full">
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-grey bg-grey rounded-xl"
              placeholder="Введите ваше имя"
            />
          </div>
          <div className="mb-4 w-full">
            <input
              type="text"
              id="post"
              className="w-full p-3 border border-grey bg-grey rounded-xl"
              placeholder="Введите email"
            />
          </div>
          <div className="mb-4 w-full">
            <input
              type="tel"
              id="phone"
              className="w-full p-3 border border-grey bg-grey rounded-xl"
              placeholder="Введите телефон"
            />
          </div>
          <div className="mb-4 w-full">
            <select
              id="store"
              className="w-full p-3 border border-grey bg-grey rounded-xl"
            >
              <option value="">Выберите магазин</option>
              {ADDRESSES.map((address) => (
                <option value={address}>{address}</option>
              ))}
            </select>
          </div>
          <div className="mb-6 w-full">
            <select
              id="payment"
              className="w-full p-3 border border-grey bg-grey rounded-xl"
            >
              <option value="">Выберите способ оплаты</option>
              <option value="card">Карта</option>
              <option value="cash">Наличные</option>
              <option value="online">Онлайн оплата</option>
            </select>
          </div>
          <Typography
            variant="h4"
            className="flex justify-between w-full mb-7 xl:text-[30px] px-[19px]"
          >
            <p>Итого:</p> <p>{totalPrice}₽</p>
          </Typography>
          <Button
            type="submit"
            className="xl:text-2xl py-3 w-full max-w-[238px] md:max-w-none md:py-[21px] max-h-[69px] rounded-[12px] font-normal"
          >
            Оформить заказ
          </Button>
        </form>
      </div>
    </div>
  );
};
