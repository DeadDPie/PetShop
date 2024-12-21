import { useState } from "react";
import { useCart } from "@/shared/contexts/cart";
import { Button, Typography } from "@/shared/ui";
import axiosInstance from "@/shared/api/axiosInstance";
import { useStoreAddresses } from "@/shared/api/hooks/useStoreAddresses";

export const OrderRegistration = () => {
	const { cart } = useCart();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		store: "",
		payment: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const totalPrice = cart
		.map((item) => item.amount * item.price)
		.reduce((total, price) => total + price, 0);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const orderDate = new Date().toISOString(); // Using the current date
		const userId = 2; // Example: Replace this with the actual user ID
		const storeAddressId = parseInt(formData.store, 10); // The selected store address ID

		try {
			// 1. Create the order
			const orderResponse = await axiosInstance.post("/order", {
				totalCost: totalPrice,
				orderDate,
				status: "Pending",
				user: { connect: { user_id: userId } },
				storeAddress: {
					connect: { store_adress_id: storeAddressId },
				},
			});

			// 2. Add products to the order as order items
			const orderId = orderResponse.data.order_id;

			await Promise.all(
				cart.map((item) =>
					axiosInstance.post("/order-item", {
						amount: item.amount,
						price: item.price,
						order: { connect: { order_id: orderId } },
						product: { connect: { product_id: item.id } },
					})
				)
			);

			alert("Заказ успешно оформлен!");
		} catch (error) {
			console.error("Ошибка при создании заказа:", error);
		}
	};

	const { data: ADDRESSES } = useStoreAddresses();

	return (
		<form onSubmit={handleSubmit} className="flex flex-col w-full items-center">
			{/* <div className="w-full">
				<label>Имя</label>
				<input
					type="text"
					id="name"
					className="w-full p-2 border border-beige bg-beige rounded-xl"
					value={formData.name}
					onChange={handleInputChange}
				/>
			</div>
			<div className="w-full">
				<label>Почта</label>
				<input
					type="email"
					id="email"
					className="w-full p-2 border border-beige bg-beige rounded-xl"
					value={formData.email}
					onChange={handleInputChange}
				/>
			</div>
			<div className="w-full">
				<label>Телефон</label>
				<input
					type="tel"
					id="phone"
					className="w-full p-2 border border-beige bg-beige rounded-xl"
					value={formData.phone}
					onChange={handleInputChange}
				/>
			</div> */}
			<div className="w-full">
				<label>Выберите магазин</label>
				<select
					id="store"
					className="w-full p-3 border border-beige bg-beige rounded-xl"
					value={formData.store}
					onChange={handleInputChange}
				>
					<option value=""></option>
					{ADDRESSES &&
						ADDRESSES.map((address) => (
							<option
								key={address.store_adress_id}
								value={address.store_adress_id}
							>
								{address.address}
							</option>
						))}
				</select>
			</div>
			<div className="mb-4 w-full">
				{/* Payment method can be added if needed */}
			</div>
			<Typography
				variant="h4"
				className="flex justify-between w-full mb-7 xl:text-[30px] px-[19px]"
			>
				<p>Итого:</p> <p>{totalPrice}₽</p>
			</Typography>
			<div className="w-full">
				<Button
					type="submit"
					className="xl:text-2xl py-3 w-full md:max-w-none md:py-[21px] max-h-[69px] rounded-[12px] font-normal"
				>
					Оформить заказ
				</Button>
			</div>
		</form>
	);
};
