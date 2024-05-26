import { ADDRESSES } from "@/assets/constants/addresses";
import { Button, Typography } from "@/shared/ui";

export const OrderRegistration = () => {
  return (
    <div>
      <Typography
        variant="h4"
        className="flex justify-center mb-7 xl:text-[30px]"
      >
        Оформление заказа
      </Typography>
      <div>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-grey bg-grey rounded-xl"
              placeholder="Введите ваше имя"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="post"
              className="w-full p-3 border border-grey bg-grey rounded-xl"
              placeholder="Введите email"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              id="phone"
              className="w-full p-3 border border-grey bg-grey rounded-xl"
              placeholder="Введите телефон"
            />
          </div>
          <div className="mb-4">
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
          <div className="mb-6">
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
            className="flex justify-start mb-7 xl:text-[30px]"
          >
            Итого: {"1128"}
          </Typography>
          <Button type="submit" className="xl:text-2xl   ">
            Оформить заказ
          </Button>
        </form>
      </div>
    </div>
  );
};
