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
        <div className="relative h-full flex flex-col min-h-screen items-center pt-[50px] w-full">
          <div className="w-full float-right">
            <img src={paw} className="-rotate-140 float-right " />
          </div>
          <div className="flex flex-col px-6 md:px-0 items-center h-full w-full gap-4 mt-6">
            <Typography variant="h3" className="lg:text-[32px]">
              {title}
            </Typography>
            {children}
          </div>
          <div className="w-full float-left my-4">
            <img src={paw} className="rotate-15" />
          </div>
        </div>
      </div>
      <div className="hidden md:flex min-h-[797px] relative justify-center pt-[100px] h-fit px-3 lg:px-[90px] pb-[77px] gap-10 xl:gap-[80px]">
        <img src={pawDark} className="size-[100px] xl:size-[140px]" />
        <div className="h-fit min-h-[600px] bg-secondary w-[800px] rounded-[11px] py-[28px] px-[45px] xl:px-[95px]">
          <div className="flex flex-col h-full items-center gap-4">
            <Typography variant="h3" className="lg:text-[32px] mt-2">
              {title}
            </Typography>
            {children}
          </div>
        </div>
        <div className="min-w-[100px] xl:min-w-[144px] mt-8 flex items-end">
          <img
            src={pawDark}
            className="size-[100px] -rotate-120 xl:size-[140px]"
          />
        </div>
      </div>
    </>
  );
};
