import { api } from "@/shared/api/instance";

export type GetActivitiesRequestConfig = RequestConfig | void;

export const getProducts = async (requestConfig?: GetActivitiesRequestConfig) =>
  api.get("product", requestConfig?.config);
