import axiosInstance from "@/shared/api/axiosInstance";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

// Тип данных для продукта
type Product = {
	id: number;
	name: string;
	description: string;
	price: number;
	categoryId: number;
	animalTypeId: number;
	brandId: number;
	[key: string]: any; // Для дополнительных полей
};

// Хук для получения информации о товаре по ID
export const useGetProductById = (
	id: number
): UseQueryResult<Product, Error> => {
	return useQuery<Product, Error>({
		queryKey: ["product", id],
		queryFn: async () => {
			const response = await axiosInstance.get<Product>(`/product/${id}`);
			console.log(response.data);
			return response.data;
		},
	});
};
