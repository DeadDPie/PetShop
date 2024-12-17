import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/shared/api/axiosInstance";

export const useCreateTag = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (newTag: { name: string }) => {
			const response = await axiosInstance.post("/tag", newTag);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["tags"] });
		},
	});
};
