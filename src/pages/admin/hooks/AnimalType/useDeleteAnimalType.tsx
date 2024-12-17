import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/shared/api/axiosInstance";

export const useDeleteAnimalType = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: number) => {
			await axiosInstance.delete(`/animal-type/${id}`);
		},

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["animal-type"] });
		},
	});
};
