import { api } from "@/shared/api/instance";

export interface GetProductByIdParams {
  id: string;
}

export type GetProductByIdRequestConfig = RequestConfig<GetProductByIdParams>;

export const getProductById = async ({
  params: { id, ...params },
  config,
}: GetProductByIdRequestConfig) =>
  api.get(`product/${id}`, {
    ...config,
    params: { ...config?.params, ...params },
  });
