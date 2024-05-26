import { ADDRESSES } from "@/assets/constants/addresses";

export const Addresses = () => (
  <div className="flex flex-col gap-3">
    <div className="text-xl">Адреса магазинов</div>
    <div className="flex flex-col gap-3 text-base">
      {ADDRESSES.map((address) => (
        <p key={address}>{address}</p>
      ))}
    </div>
  </div>
);
