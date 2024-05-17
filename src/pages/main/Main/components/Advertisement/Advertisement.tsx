import square_add from "@/assets/images/advertisement/square.png";
import big_add from "@/assets/images/advertisement/big.png";

export const Advertisement = () => (
  <div className="w-full h-[360px] sm:mt-7 sm:mb-[163px] sm:px-[65px] lg:px-[144px] ">
    <div className="flex sm:gap-[30px] max-w-[1178px] mx-auto justify-center">
      <img src={square_add} className="sm:size-[240px] lg:size-auto" />
      <div className="flex-grow overflow-hidden hidden sm:block sm:max-h-[240px] lg:max-h-none">
        <img src={big_add} className="w-full h-full object-left object-cover" />
      </div>
    </div>
  </div>
);
