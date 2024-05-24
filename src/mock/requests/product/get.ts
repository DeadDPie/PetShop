import { DATABASE } from "../../database";
import type { RestRequestConfig } from "mock-config-server";

export const getActivities: RestRequestConfig = {
  path: "/product",
  method: "get",
  routes: [
    {
      data: (request) => {
        let rows = DATABASE.PRODUCTS;

        return {
          pagination: {
            limit: request.query.limit ?? 10,
            current: request.query.current ?? 1,
            count: rows.length,
          },
          rows,
        };
      },
    },
  ],
};
