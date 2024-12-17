import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/shared/api/axiosInstance";

export const useCreateAnimalType = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (newTag: { name: string }) => {
			const response = await axiosInstance.post("/animal-type", newTag);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["animal-type"] });
		},
	});
};
