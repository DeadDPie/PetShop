import { Addresses } from "./components/Addresses/Addresses";
import { Categories } from "./components/Categories/Categories";
import { Contacts } from "./components/Contacts/Contacts";

export const Footer = () => (
  <div className="w-full bg-secondary py-6 px-6 sm:px-[144px] ">
    <div className="flex flex-col sm:mx-auto max-w-[1178px] gap-6 xl:flex-row sm:justify-between">
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-[93px]">
        <Addresses />
        <Categories />
      </div>
      <Contacts />
    </div>
  </div>
);
