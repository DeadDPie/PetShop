import { Heart, Search, ShoppingCart, User } from "tabler-icons-react";

export const Header = () => {
  return (
    <div className="w-full flex shadow-md gap-[55px]  justify-between items-center px-[15px] py-[10px] bg-white">
      <div className="flex gap-[5px] items-center">
        <img className="size-[30px]" src="./src/assets/logo.png" />
        <span className="font-comfortaa text-primary ">ЦапЦарап</span>
      </div>
      <input
        className="border-brown max-w-[735px] hidden smx:block placeholder-brown font-comfortaa placeholder-shown:text-center max-h-[45px] text-brown text-[22px] border-2 py-[10px] px-6 rounded-[40px] flex-grow"
        placeholder="Поиск..."
      />
      <div className="flex gap-[17px] text-brown">
        <Search className="sm:hidden" />
        <Heart />
        <User />
        <ShoppingCart />
      </div>
    </div>
  );
};
