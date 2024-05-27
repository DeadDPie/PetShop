import React from "react";
import { UserData } from "./UserData";
import { PurchaseHystory } from "./PurchaseHystory";

export const AccountPage = () => {
  return (
    <div className="relative flex flex-col xl:flex-row gap-12 pt-[21px] xl:pt-[68px] px-6 pb-[3px] xl:gap-[100px] xl:justify-center mb-[55px]">
      <UserData />
      <PurchaseHystory />
    </div>
  );
};
