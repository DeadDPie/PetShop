import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/shared/api/axiosInstance";

export const useCreateCategory = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (newTag: { name: string }) => {
			const response = await axiosInstance.post("/category", newTag);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["category"] });
		},
	});
};
