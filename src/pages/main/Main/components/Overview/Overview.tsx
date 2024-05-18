import { Button, Typography } from "@/shared/ui";

import background from "@/assets/images/overview/background.png";

export const Overview = () => (
  <div className="relative sm:h-[638px]">
    <div className="relative flex flex-col gap-[7px] my-2 items-center w-full sm:hidden">
      <Typography variant="h4">Всё для вашего питомца</Typography>
      <Typography variant="h4">Скидки до 60%</Typography>
    </div>
    <div className="relative hidden sm:flex justify-center">
      <div className="w-full relative flex justify-center h-[715px] max-w-[1440px]">
        <div className="flex-grow overflow-hidden sm:flex justify-center absolute flex z-10 -top-[80px] h-[715px]">
          <img src={background} className="w-full h-full object-cover" />
        </div>
        <div className="absolute left-[32px] lg:left-[141px] max-w-[393px] justify-end top-[190px] z-20 flex flex-col gap-[84px]">
          <p className="text-[46px] text-end font-semibold font-comfortaa text-brown">
            Всё для вашего питомца
          </p>
          <p className="text-[46px] text-end font-semibold font-comfortaa text-brown">
            Скидки до 60%
          </p>
        </div>
        <Button className="z-20 hidden sm:block absolute left-[200px] lg:left-[400px] bottom-[100px] shadow-lg">
          К покупкам
        </Button>
      </div>
    </div>
  </div>
);
