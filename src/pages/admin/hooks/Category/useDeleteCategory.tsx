import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/shared/api/axiosInstance";

export const useDeleteCategory = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: number) => {
			await axiosInstance.delete(`/category/${id}`);
		},

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["category"] });
		},
	});
};
