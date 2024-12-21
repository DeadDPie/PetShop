import axiosInstance from "@/shared/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useGetReviews = () => {
	return useQuery({
		queryKey: ["review"],
		queryFn: async () => {
			const response = await axiosInstance.get("/review");
			console.log(response.data);
			return response.data;
		},
	});
};
