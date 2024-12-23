import { Link } from "react-router-dom";
import { X } from "tabler-icons-react";

import { useCart } from "@/shared/contexts/cart";
import { ProductProps } from "@/shared/api/types/types";

export const CartItem = (product: ProductProps) => {
	const { cart, setCart } = useCart();
	const cartItem = cart.find((item) => item.id === product.id);

	const updateCart = (change: number) => {
		if (change !== 0) {
			setCart((prevCart) =>
				prevCart.map((cartItem) =>
					cartItem.id === product.id
						? { ...cartItem, amount: cartItem.amount + change }
						: cartItem
				)
			);
		} else {
			setCart((prevCart) =>
				prevCart.filter((cartItem) => cartItem.id !== product.id)
			);
		}
	};

	const handleRemove = () => {
		setCart((prevCart) =>
			prevCart.filter((cartItem) => cartItem.id !== product.id)
		);
	};

	const SERVER_URL = "http://localhost:3000";

	return (
		<div className="w-full flex flex-row border rounded-xl justify-between border-greyDark p-2 md:p-4">
			<div className="flex md:gap-[56px]">
				<Link to={`/${product.id}`} className="relative cursor-pointer">
					<img
						src={`${SERVER_URL}${product.image}`}
						alt={product.title}
						className="w-38 max-w-36 h-26 md:pl-[30px] xl:w-42 xl:h-30 object-contain"
					/>
				</Link>
				<div className="flex flex-col place-content-between">
					<div className="flex-grow">
						<p className="text-sm font-semibold text-wrap flex justify-start mt-[4px] lg:text-xl">
							{product.title}
						</p>
					</div>
					<div className="h-[29px] md:h-[40px] mb-1">
						<button
							className="text-sm px-[14px] h-full py-1 md:px-[20px] md:text-xl bg-grey border-2 border-grey rounded-l-[12px] hover:bg-greyDark"
							onClick={() => updateCart(-1)}
							disabled={cartItem?.amount === 1}
						>
							-
						</button>
						<button className="text-sm px-[14px] h-full py-1 md:px-[20px] md:text-xl bg-white border-2 border-grey border-l border-r hover:bg-greyDark">
							{cartItem?.amount}
						</button>
						<button
							className="text-sm px-[14px] py-1 h-full md:px-[20px] md:text-xl bg-grey border-2 border-grey rounded-r-[12px] hover:bg-greyDark"
							onClick={() => updateCart(1)}
						>
							+
						</button>
					</div>
				</div>
			</div>
			<div className="flex flex-col place-content-between items-center pb-3">
				<button onClick={handleRemove}>
					<X />
				</button>
				<div className="flex justify-center text-base font-medium md:text-2xl">
					<p>{product.price}₽</p>
				</div>
			</div>
		</div>
	);
};
