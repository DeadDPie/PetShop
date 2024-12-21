import axiosInstance from "@/shared/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () => {
	return useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const response = await axiosInstance.get("/users");
			return response.data;
		},
	});
};
