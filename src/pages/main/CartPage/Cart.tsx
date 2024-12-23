import { PRODUCTS } from "@/mock/database/database";
import { CartItem } from "./CartItem";
import { Typography } from "@/shared/ui";
import { useCart } from "@/shared/contexts/cart";
import { useGetProductsQuery } from "@/pages/admin/hooks/useGetProductsQuery";
import { useState } from "react";
export const Cart = () => {
	const { cart } = useCart();
	const [currentPage, setCurrentPage] = useState(1);
	const limit = 10;
  
	// Получаем данные о продуктах
	const { data, isSuccess, isLoading, isError } = useGetProductsQuery({
	  params: {
		limit: limit.toString(),
		current: currentPage.toString(),
	  },
	});
  
	// Фильтруем продукты, которые есть в корзине
	const cartProducts = data?.rows.filter((product) =>
	  cart.some((item) => item.id === product.id)
	);
  
	return (
	  <div className="w-full max-w-[713px]">
		<Typography
		  variant="h4"
		  className="flex justify-center mb-7 xl:text-[30px]"
		>
		  Корзина
		</Typography>
		<div className="flex flex-col gap-x-[35px] gap-y-6">
		  {cartProducts?.length > 0 ? (
			cartProducts.map((product) => <CartItem key={product.id} {...product} />)
		  ) : (
			<div>Корзина пуста</div>
		  )}
		</div>
	  </div>
	);
  };
  