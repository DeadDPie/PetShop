import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/shared/api/axiosInstance";

// Типы для аргументов функции обновления
interface UpdateBrandInput {
	id: number;
	updatedData: {
		name: string;
	};
}

export const useUpdateBrand = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ id, updatedData }: UpdateBrandInput) => {
			const response = await axiosInstance.patch(`/brand/${id}`, updatedData);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["brands"] });
		},
	});
};
