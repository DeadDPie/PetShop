import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/shared/api/axiosInstance";

// Типы для аргументов функции обновления
interface UpdateTagInput {
	id: number;
	updatedData: {
		name: string;
	};
}

export const useUpdateTag = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ id, updatedData }: UpdateTagInput) => {
			const response = await axiosInstance.patch(`/tag/${id}`, updatedData);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["tags"] });
		},
	});
};
