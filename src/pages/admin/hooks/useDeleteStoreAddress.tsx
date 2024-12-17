import axiosInstance from "@/shared/api/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Хук для удаления адреса магазина
export const useDeleteStoreAddress = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: number) => {
			await axiosInstance.delete(`/store-address/${id}`);
		},
		onSuccess: () => {
			// Инвалидируем запросы для обновления списка адресов
			queryClient.invalidateQueries({ queryKey: ["storeAddresses"] });
		},
		onError: (error: Error) => {
			console.error("Error deleting store address:", error.message);
		},
	});
};
