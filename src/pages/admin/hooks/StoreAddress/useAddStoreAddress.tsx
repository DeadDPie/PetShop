import axiosInstance from "@/shared/api/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Определите тип входных данных для создания нового адреса
type StoreAddressCreateInput = {
	address: string;
};

// Хук для добавления нового адреса магазина
export const useAddStoreAddress = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (newAddress: StoreAddressCreateInput) => {
			const response = await axiosInstance.post("/store-address", newAddress);
			return response.data;
		},
		onSuccess: () => {
			// Используйте объект с ключом queryKey для инвалидации кэша
			queryClient.invalidateQueries({ queryKey: ["storeAddresses"] });
		},
		onError: (error: Error) => {
			console.error("Error adding store address:", error.message);
		},
	});
};
