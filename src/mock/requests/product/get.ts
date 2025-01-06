import { DATABASE } from "../../database";
import type { RestRequestConfig } from "mock-config-server";

export const getActivities: RestRequestConfig = {
  path: "/product",
  method: "get",
  routes: [
    {
      data: (request) => {
        let rows = DATABASE.PRODUCTS;

        // Get limit and current from query parameters, with default values
        const limit = parseInt(request?.query?.limit as string, 10) || 10;
        const current = parseInt(request?.query?.current as string, 10) || 1;

        // Calculate start and end indices for the current page
        const startIndex = (current - 1) * limit;
        const endIndex = startIndex + limit;

        // Get the portion of the array for the current page
        const paginatedRows = rows.slice(startIndex, endIndex);

        return {
          pagination: {
            limit: limit,
            current: current,
            count: rows.length,
          },
          rows: paginatedRows,
        };
      },
    },
  ],
};
