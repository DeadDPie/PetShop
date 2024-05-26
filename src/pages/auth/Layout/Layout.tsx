import paw from "@/assets/paw.png";
import pawDark from "@/assets/paw-dark.png";

import { Typography } from "@/shared/ui";

export const Layout = ({
  children,
  title,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="min-h-screen h-fit bg-secondary relative md:hidden overflow-hidden">
        <img src={paw} className="-rotate-140 absolute right-0 mt-[62px]" />
        <div className="relative h-full flex flex-col justify-center min-h-screen pt-[222px] pb-[219px] items-center w-full">
          <div className="flex flex-col h-full gap-4">
            <Typography variant="h3" className="lg:text-[32px]">
              {title}
            </Typography>
            {children}
          </div>
        </div>
        <img src={paw} className="rotate-15 absolute bottom-[10%]" />
      </div>
      <div className="hidden md:flex max-h-[797px] relative justify-center pt-[120px] h-fit px-3 lg:px-[90px] pb-[77px] gap-10 xl:gap-[80px]">
        <img src={pawDark} className="size-[100px] xl:size-[140px]" />
        <div className="h-[600px] bg-secondary w-[800px] rounded-[11px] py-[28px] px-[45px] xl:px-[95px]">
          <div className="flex flex-col h-full items-center gap-4">
            <Typography variant="h3" className="lg:text-[32px]">
              {title}
            </Typography>
            {children}
          </div>
        </div>
        <div className="min-w-[100px] xl:min-w-[144px] flex items-end">
          <img
            src={pawDark}
            className="size-[100px] -rotate-120 xl:size-[140px]"
          />
        </div>
      </div>
    </>
  );
};
