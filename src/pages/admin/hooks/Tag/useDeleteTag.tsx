import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/shared/api/axiosInstance";

export const useDeleteTag = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: number) => {
			await axiosInstance.delete(`/tag/${id}`);
		},

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["tags"] });
		},
	});
};
