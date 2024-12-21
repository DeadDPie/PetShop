import axiosInstance from "@/shared/api/axiosInstance";
import { useMutation } from "@tanstack/react-query";

interface LoginParams {
	email: string;
	password: string;
}

const postLogin = async (params: LoginParams) => {
	const response = await axiosInstance.post("/auth/login", params);
	return response.data;
};

export const usePostLoginMutation = () => {
	return useMutation({
		mutationFn: async (params: LoginParams) => {
			const response = await axiosInstance.post("/auth/login", params);
			return response.data;
		},
		onSuccess: (data) => {
			// Действия после успешной авторизации (например, сохранение токена, редирект)
			console.log("Авторизация успешна", data);
		},
		onError: (error: any) => {
			// Действия при ошибке авторизации (например, отображение сообщения об ошибке)
			console.error("Ошибка авторизации", error);
		},
	});
};
