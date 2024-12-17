import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/shared/api/axiosInstance";

// Типы для аргументов функции обновления
interface UpdateAnimalTypeInput {
	id: number;
	updatedData: {
		name: string;
	};
}

export const useUpdateAnimalType = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ id, updatedData }: UpdateAnimalTypeInput) => {
			const response = await axiosInstance.patch(
				`/animal-type/${id}`,
				updatedData
			);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["animal-type"] });
		},
	});
};
