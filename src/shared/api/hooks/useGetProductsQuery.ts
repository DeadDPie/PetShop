import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../requests";
import type { GetProductsParams } from "../requests/products/index";

export type GetActivityRequestConfig = RequestConfig<GetProductsParams>;

export const useGetProductsQuery = ({
  params,
  config,
}: GetActivityRequestConfig) =>
  useQuery({
    queryKey: ["getProducts", params.current],
    queryFn: () => getProducts({ params, config }),
  });
