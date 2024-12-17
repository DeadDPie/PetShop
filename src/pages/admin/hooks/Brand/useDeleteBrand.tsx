import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/shared/api/axiosInstance";

export const useDeleteBrand = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: number) => {
			await axiosInstance.delete(`/brand/${id}`);
		},

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["brands"] });
		},
	});
};
