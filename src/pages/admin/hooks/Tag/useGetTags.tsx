import axiosInstance from "@/shared/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useGetTags = () => {
	return useQuery({
		queryKey: ["tags"],
		queryFn: async () => {
			const response = await axiosInstance.get("/tag");
			return response.data;
		},
	});
};
