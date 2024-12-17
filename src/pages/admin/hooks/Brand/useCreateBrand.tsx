import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/shared/api/axiosInstance";

export const useCreateBrand = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (newBrand: { name: string }) => {
			const response = await axiosInstance.post("/brand", newBrand);
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["brands"] });
		},
	});
};
