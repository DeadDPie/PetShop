import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button, Typography } from "@/shared/ui";
import { useGetProductsQuery } from "@/pages/admin/hooks/useGetProductsQuery";

// Типы для данных
interface OrderItem {
	order_item_id: number;
	orderId: number;
	productId: number;
	amount: number;
	price: number;
}

interface ReviewData {
	reviewText: string;
	product: {
		connect: {
			product_id: number;
		};
	};
	user: {
		connect: {
			user_id: number;
		};
	};
}

const fetchOrderItems = async (): Promise<OrderItem[]> => {
	const response = await fetch("http://localhost:3000/order-item");
	if (!response.ok) {
		throw new Error("Ошибка при загрузке данных");
	}
	return response.json();
};

const submitReview = async (reviewData: ReviewData): Promise<void> => {
	const response = await fetch("http://localhost:3000/review", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(reviewData),
	});
	if (!response.ok) {
		throw new Error("Ошибка при отправке отзыва");
	}
	return;
};

export const ReviewComponent = () => {
	const SERVER_URL = "http://localhost:3000";

	// Загружаем заказы
	const {
		data: orderItems,
		error,
		isLoading,
	} = useQuery<OrderItem[]>({
		queryKey: ["orderItems"],
		queryFn: fetchOrderItems,
	});

	// Состояния для отзывов
	const [reviewText, setReviewText] = useState<string>("");
	const [selectedProductId, setSelectedProductId] = useState<number | null>(
		null
	);

	// Пагинация
	const [currentPage, setCurrentPage] = useState(1);
	const limit = 50;

	// Получение данных о продуктах
	const { data: Products, isSuccess } = useGetProductsQuery({
		params: {
			limit: limit.toString(),
			current: currentPage.toString(),
		},
	});

	// Мутация для отправки отзыва
	const {
		mutate: createReview,
		isLoading: isReviewLoading,
		isError,
		error: mutationError,
	} = useMutation<void, Error, ReviewData>({
		mutationFn: submitReview,
		onSuccess: () => {
			alert("Отзыв успешно отправлен!");
			setReviewText("");
		},
		onError: () => {
			alert("Ошибка при отправке отзыва");
		},
	});

	const handleSubmitReview = () => {
		if (selectedProductId === null) return;
		const userId = parseInt(localStorage.getItem("userId")!, 10);
		const reviewData: ReviewData = {
			reviewText,
			product: {
				connect: { product_id: selectedProductId },
			},
			user: {
				connect: { user_id: userId },
			},
		};
		createReview(reviewData);
	};

	if (isLoading)
		return <div className="text-center text-xl text-gray-600">Загрузка...</div>;

	if (error instanceof Error)
		return (
			<div className="text-center text-xl text-red-500">
				Ошибка: {error.message}
			</div>
		);

	// Уникальные товары
	const uniqueProducts = Array.from(
		new Set(orderItems?.map((item) => item.productId))
	).map((productId) =>
		Products?.rows.find((product) => product.id === productId)
	);

	return (
		<div>
			<Typography variant="h3" className="mb-4">
				Мои заказанные товары
			</Typography>
			<div className="flex flex-row  max-w-4xl mx-auto p-4">
				<ul className=" space-y-4 m-2">
					{uniqueProducts.map(
						(product) =>
							product && (
								<li
									key={product.id}
									className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow"
								>
									<div className="flex flex-row items-center gap-3">
										<div>
											<h3 className="text-xl m-1 font-semibold text-gray-800">
												{product.title}
											</h3>
											<img
												src={`${SERVER_URL}${product.image}`}
												alt={product.title}
												className="w-36 h-28 xl:w-42 xl:h-30 object-contain"
											/>
										</div>
										<div className="col-span-2">
											<p className="text-gray-600">Цена: {product.price} Р</p>
										</div>
										<div>
											<Button
												onClick={() => setSelectedProductId(product.id)}
												className="w-full"
											>
												Оставить отзыв
											</Button>
										</div>
									</div>
								</li>
							)
					)}
				</ul>

				{selectedProductId && (
					<div className="mt-8 bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto">
						<h2 className="text-2xl font-semibold text-gray-800 mb-4">
							Оставить отзыв
							{/* для товара ID {selectedProductId} */}
						</h2>
						<textarea
							value={reviewText}
							onChange={(e) => setReviewText(e.target.value)}
							placeholder="Введите ваш отзыв"
							className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
							rows={4}
						/>
						<Button
							onClick={handleSubmitReview}
							disabled={isReviewLoading}
							className={`w-full ${
								isReviewLoading ? "bg-gray-400" : "bg-primary"
							}`}
						>
							{isReviewLoading ? "Отправка..." : "Отправить отзыв"}
						</Button>
						{isError && (
							<p className="mt-4 text-red-500 text-sm">
								{mutationError?.message}
							</p>
						)}
					</div>
				)}
			</div>
		</div>
	);
};
