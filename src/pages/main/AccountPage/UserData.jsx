import React from "react";

import { Button, Typography } from "@/shared/ui";
import { Edit } from "tabler-icons-react";

export const UserData = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="bg-secondary p-4 rounded-[20px]  py-[30px] flex flex-col  justify-center max-w-[700px] ">
        <div className="flex flex-col  md:gap-[30px]  items-center max-w-[625px] gap-4">
          <div className="flex flex-row ">
            <Typography variant="h3">Данные пользователя</Typography>
            <Edit className="bg-white rounded ml-4" />
          </div>

          <div className="w-full text-sm md:text-xl px-3 py-2 bg-white rounded-[6px] mb-1 md:rounded-[15px] md:px-[54px] md:py-[25px]">
            <Typography variant="h4" className="pl-2">
              {"Екатерина"}
            </Typography>
          </div>

          <div className="w-full text-sm md:text-xl px-3 py-2 bg-white rounded-[6px] mb-1 md:rounded-[15px] md:px-[54px] md:py-[25px]">
            <Typography variant="h4" className="pl-2">
              {"Почта"}
            </Typography>
          </div>

          <div className="w-full text-sm md:text-xl px-3 py-2 bg-white rounded-[6px] mb-1 md:rounded-[15px] md:px-[54px] md:py-[25px]">
            <Typography variant="h4" className="pl-2">
              {" 8 912 897 12 45"}
            </Typography>
          </div>

          <button>
            <Typography variant="h4" className="p-2 underline decoration-1">
              Изменить пароль
            </Typography>
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          <Button className="inline-block text-white px-4 py-2 rounded-md">
            Отследить заказ
          </Button>
        </div>
      </div>
      <button className="bg-white border border-brown px-2 py-1 rounded-[10px] ">
        Подать на партнёрство
      </button>
    </div>
  );
};
