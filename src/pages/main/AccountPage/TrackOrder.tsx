import { X } from "tabler-icons-react";
import { TrackItem } from "./TrackItem";
import { Typography } from "@/shared/ui";
import { TRACKED_PRODUCTS } from "@/assets/constants/database";

interface TrackOrderProps {
  setModal: (props: boolean) => void;
}
export const TrackOrder = ({ setModal }: TrackOrderProps) => {
  return (
    <div className="bg-white p-8 rounded-[20px] border-white py-[30px] flex flex-col  justify-center ">
      <button className="flex mr-[1px] ml-auto" onClick={() => setModal(false)}>
        <X />
      </button>
      <Typography
        variant="h4"
        className="font-bold xl:text-[30px] flex justify-center"
      >
        Отследить заказ
      </Typography>
      {TRACKED_PRODUCTS.slice(0, 4).map((product) => (
        <TrackItem {...product} />
      ))}
    </div>
  );
};
