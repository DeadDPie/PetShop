import { ProductProps } from "@/assets/constants/database";
import { api } from "@/shared/api/instance";

interface GetProductsResponse {
  pagination: {
    limit: string;
    current: string;
    count: number;
  };
  rows: ProductProps[];
}

export interface GetProductsParams {
  limit: string;
  current: string;
}

export type GetActivitiesRequestConfig = RequestConfig<GetProductsParams>;

export const getProducts = async ({
  params,
  config,
}: GetActivitiesRequestConfig) =>
  api.get<GetProductsResponse>("product", {
    ...config,
    params: { ...config?.params, ...params },
  });
