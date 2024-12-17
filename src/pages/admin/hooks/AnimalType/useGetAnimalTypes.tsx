import axiosInstance from "@/shared/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useGetAnimalTypes = () => {
	return useQuery({
		queryKey: ["animal-type"],
		queryFn: async () => {
			const response = await axiosInstance.get("/animal-type");
			return response.data;
		},
	});
};
