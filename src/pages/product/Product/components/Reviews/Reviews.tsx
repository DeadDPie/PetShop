//import { ReviewProps } from "@/assets/constants/database";
import { useGetReviews } from "@/pages/admin/hooks/Review/useGetReviews";
import { Review, Typography } from "@/shared/ui";
import { useParams } from "react-router-dom";

// Интерфейс для отзыва
export interface ReviewType {
	review_id: number;
	productId: number;
	userId: number;
	rating: number;
	reviewText: string;
}

export const Reviews = () => {
	const { id } = useParams<{ id: string }>();
	console.log(id);

	// Получение данных через кастомный хук
	const { data: reviews, isLoading } = useGetReviews();

	if (isLoading) {
		return <div>Загрузка...</div>;
	}

	// Фильтрация отзывов для конкретного товара
	const filteredReviews = reviews?.filter(
		(review: ReviewType) => review.productId === Number(id)
	);

	return (
		<div className="flex flex-col w-full gap-[11px] max-w-[700px] lg:max-w-none mt-[14px] mb-[34px] xl:gap-[19px] xl:mt-[69px] xl:mb-[26px] items-center">
			<Typography variant="h4" className="xl:text-[32px]">
				Отзывы
			</Typography>

			{filteredReviews && filteredReviews.length > 0 ? (
				<div className="flex flex-col gap-5 w-full items-center">
					{filteredReviews.map((review: ReviewType) => (
						<Review key={review.review_id} review={review} />
					))}
				</div>
			) : (
				<Typography variant="h6" className="text-center">
					Отзывы для данного товара отсутствуют.
				</Typography>
			)}
		</div>
	);
};
