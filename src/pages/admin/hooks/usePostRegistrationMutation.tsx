import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../../shared/api/axiosInstance";

type RegistrationParams = {
	username: string;
	email: string;
	password: string;
};

type RegistrationResponse = {
	message: string;
	success: boolean;
};

export const usePostRegistrationMutation = () => {
	return useMutation<RegistrationResponse, Error, RegistrationParams>({
		mutationFn: async (params: RegistrationParams) => {
			const response = await axiosInstance.post("/auth/register", params);
			return response.data;
		},
	});
};
