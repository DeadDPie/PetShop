import { useState, useEffect } from "react";
import axiosInstance from "@/shared/api/axiosInstance";
import { Rating } from "../Rating/Rating";
import { ReviewType } from "@/pages/product/Product/components/Reviews/Reviews";

export const Review = ({ review }: { review: ReviewType }) => {
	const [user, setUser] = useState<{ username: string } | null>(null); // Состояние для данных пользователя

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await axiosInstance.get(`/user/${review.userId}`); // Получаем данные пользователя
				setUser(response.data); // Сохраняем данные пользователя
			} catch (error) {
				console.error("Ошибка при получении данных пользователя:", error);
			}
		};

		fetchUserData(); // Вызываем функцию при загрузке компонента
	}, [review.userId]);

	return (
		<div className="flex w-full flex-col max-w-[1091px] px-6 py-[11px] gap-[7px] border-2 border-greyDark rounded-[15px]">
			<div className="flex gap-[21px] items-center flex-wrap">
				<Rating rating={review.rating} /> {/* Отображение рейтинга */}
				<p className="font-comfortaa text-sm">
					{user ? user.username : "Загрузка..."}{" "}
					{/* Отображение имени пользователя */}
				</p>
			</div>
			<p className="text-base flex-wrap">{review.reviewText}</p>{" "}
			{/* Текст отзыва */}
		</div>
	);
};
