import { UserData } from "./UserData";
import { PurchaseHystory } from "./PurchaseHistory";
import { Modal } from "@/shared/ui";
import { useState } from "react";
import { TrackOrder } from "./TrackOrder";


export const AccountPage = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className=" flex flex-col xl:flex-row gap-12 pt-[21px] xl:pt-[68px] px-6 pb-[3px] xl:gap-[100px] xl:justify-center mb-[55px]">
      <Modal className={modal ? "w-full" : "hidden"}>
        <TrackOrder setModal={setModal}/>
      </Modal>
      <UserData setModal={setModal}/>
      <PurchaseHystory />
    </div>
  );
};
