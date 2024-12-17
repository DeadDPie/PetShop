import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/shared/api/axiosInstance";

// Типы для аргументов функции обновления
interface UpdateTagInput {
	id: number;
	updatedData: {
		name: string;
	};
}

export const useUpdateCategory = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ id, updatedData }: UpdateTagInput) => {
			const response = await axiosInstance.patch(
				`/category/${id}`,
				updatedData
			);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["category"] });
		},
	});
};
