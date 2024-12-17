import axiosInstance from "@/shared/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useGetBrands = () => {
	return useQuery({
		queryKey: ["brands"],
		queryFn: async () => {
			const response = await axiosInstance.get("/brand");
			return response.data;
		},
	});
};
