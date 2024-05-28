// import React from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination, Typography } from "@/shared/ui";

import { HistoryItem } from "./HistoryItem";
import { useGetProductsQuery } from "@/shared/api/hooks/useGetProductsQuery";

export const PurchaseHystory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedPage = searchParams.get("current");

  const { data, isSuccess, isFetching } = useGetProductsQuery({
    params: { limit: "6", current: selectedPage || "1" },
  });

  const onPaginationClick = (current: number) =>
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      current: current.toString(),
    });

  return (
    <div>
      <div className="relative flex flex-col items-center min-w-[310px] lg:min-w-[700px] ">
        <div className="flex flex-col gap-[18px]">
          <Typography variant="h3" className="text-center mb-4 ">
            История покупок
          </Typography>
        </div>
      </div>
      {isFetching && <div>Загрузка...</div>}
      {data && isSuccess && !isFetching && (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-[35px] gap-y-6 mb-6">
            {data.rows.map((product) => (
              <HistoryItem {...product} />
            ))}
          </div>
          <Pagination
            count={data!.pagination.count}
            limit={data!.pagination.limit}
            current={parseInt(selectedPage ?? "1")}
            onClick={onPaginationClick}
            className="mt-[45px]"
          />
        </>
      )}
    </div>
  );
};
