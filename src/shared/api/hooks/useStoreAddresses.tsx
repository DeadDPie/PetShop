import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";

// Тип для адреса магазина
export interface StoreAddress {
	store_adress_id: number;
	address: string;
}

// Функция для получения данных с сервера
const fetchStoreAddresses = async (): Promise<StoreAddress[]> => {
	const response = await axiosInstance.get<StoreAddress[]>("/store-address");
	return response.data; // Возвращаем только данные
};

// Хук для получения адресов магазинов
export const useStoreAddresses = () => {
	return useQuery<StoreAddress[], Error>({
		queryKey: ["storeAddresses"], // Уникальный ключ для кэширования
		queryFn: fetchStoreAddresses, // Функция для выполнения запроса
	});
};
