import axiosInstance from "@/shared/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useGetCategory = () => {
	return useQuery({
		queryKey: ["category"],
		queryFn: async () => {
			const response = await axiosInstance.get("/category");
			return response.data;
		},
	});
};
