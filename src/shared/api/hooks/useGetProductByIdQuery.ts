import { useQuery } from "@tanstack/react-query";

import { getProductById } from "../requests";
import type { GetProductByIdParams } from "../requests/products/id/index";

export const useGetProductByIdQuery = (
  params: GetProductByIdParams,
  settings?: QuerySettings<typeof getProductById>
) =>
  useQuery({
    queryKey: ["getProductById", params.id],
    queryFn: () => getProductById({ params, config: settings?.config }),
    ...settings?.options,
  });
