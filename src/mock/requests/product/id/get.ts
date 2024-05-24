import { DATABASE } from "../../../database";
import type { RestRequestConfig } from "mock-config-server";

export const getProductById: RestRequestConfig = {
  path: "/product/:id",
  method: "get",
  routes: [
    {
      data: (request) => {
        const { id } = request.params;
        return DATABASE.PRODUCTS.find((product) => product.id === parseInt(id));
      },
    },
  ],
};
