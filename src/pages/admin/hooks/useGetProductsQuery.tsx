import { useState, useEffect } from "react";
import axios from "axios"; // Используем axios для отправки запросов

// Типы данных
interface ProductProps {
	id: number;
	title: string;
	description: string;
	price: number;
	rating: number;
	image: string | null;
	categoryId: number;
	brandId: number;
	animalTypeId: number;
	tagId: number;
}

interface GetProductsResponse {
	rows: ProductProps[];
	total: number;
}

interface UseGetProductsQueryParams {
	params: {
		limit: string;
		current: string;
	};
}

export const useGetProductsQuery = ({ params }: UseGetProductsQueryParams) => {
	const [data, setData] = useState<GetProductsResponse | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	useEffect(() => {
		const fetchProducts = async () => {
			setIsLoading(true);
			setIsError(false);

			try {
				const response = await axios.get("http://localhost:3000/product", {
					params: {
						limit: params.limit,
						current: params.current,
					},
				});

				// Преобразуем данные из ответа для использования на фронте
				const products = response.data.map((product: any) => ({
					id: product.product_id,
					title: product.title,
					description: product.description,
					price: product.price,
					rating: product.rating,
					image: product.image,
					categoryId: product.categoryId,
					brandId: product.brandId,
					animalTypeId: product.animalTypeId,
					tagId: product.tagId,
				}));

				setData({
					rows: products,
					total: products.length, // Обновляем общее количество
				});
				setIsSuccess(true);
			} catch (error) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};

		fetchProducts();
	}, [params.limit, params.current]);

	return { data, isSuccess, isLoading, isError };
};
