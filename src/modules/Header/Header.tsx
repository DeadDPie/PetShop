import { useCart } from "@/shared/contexts/cart";
import { useLiked } from "@/shared/contexts/liked";
import { Link } from "react-router-dom";
import { Heart, Search, ShoppingCart, User } from "tabler-icons-react";

export const Header = () => {
  const { liked } = useLiked();
  const { cart } = useCart();

  return (
    <div className="flex w-full justify-center z-20 shadow-md">
      <div className="w-full flex  gap-[55px] max-w-[1440px] bg-none justify-between items-center lg:px-[60px] px-[15px] py-[10px]">
        <div className="flex gap-[5px] lg:gap-[9px] items-center">
          <img
            className="size-[30px] sm:size-[60px]"
            src="./src/assets/logo.png"
          />
          <span className="font-comfortaa text-base lg:text-[24px] text-primaryDark ">
            ЦапЦарап
          </span>
        </div>
        <input
          className="border-brown max-w-[735px] bg-transparent placeholder-shown:bg-transparent hidden lg:block placeholder-brown font-comfortaa placeholder-shown:text-center max-h-[45px] text-brown text-[22px] border-2 py-[10px] px-6 rounded-[40px] flex-grow"
          placeholder="Поиск..."
        />
        <div className="flex gap-[17px] text-brown">
          <Search className="lg:hidden size-[30px] lg:size-[45px] stroke-1" />
          <Link to="/liked" className="relative w-fit">
            <Heart className="size-[30px] lg:size-[45px] stroke-1 cursor-pointer" />
            {liked.length > 0 && (
              <div className="absolute -right-2 top-0 rounded-full px-2 bg-brown text-white">
                {liked.length}
              </div>
            )}
          </Link>
          <User className="size-[30px] lg:size-[45px] fill-brown stroke-1" />
          <Link to="/cart" className="relative w-fit">
            <ShoppingCart className="size-[30px] lg:size-[45px] stroke-1" />
            {cart.length > 0 && (
              <div className="absolute -right-2 top-0 rounded-full px-2 bg-brown text-white">
                {cart.length}
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
