// import React from "react";
import { Typography } from "@/shared/ui";
import { PRODUCTS } from "../../../mock/database/database";
import { HistoryItem } from "./HistoryItem";
export const PurchaseHystory = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center ">
        <div className="flex flex-col gap-[18px] mt-4">
          <Typography variant="h3" className="text-center mb-4 ">
            История покупок
          </Typography>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-[35px] gap-y-6">
            {PRODUCTS.map((product) => (
              <HistoryItem {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
