import { ProductProps } from "@/assets/constants/database";
import { api } from "@/shared/api/instance";

export interface GetProductByIdParams {
  id: string;
}

export type GetProductByIdRequestConfig = RequestConfig<GetProductByIdParams>;

export const getProductById = async ({
  params: { id, ...params },
  config,
}: GetProductByIdRequestConfig) =>
  api.get<ProductProps>(`product/${id}`, {
    ...config,
    params: { ...config?.params, ...params },
  });
