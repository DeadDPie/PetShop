import { Button, Typography } from "@/shared/ui";

interface PartnerProps {
  setModalPartner: (props: boolean) => void;
}

export const Partner = ({ setModalPartner }: PartnerProps) => {
  return (
    <div className="bg-white px-8 rounded-[20px] max-w-[320px] border-white py-[30px] flex flex-col  justify-center xl:p-16 lg:min-w-[520px]">
      <Typography
        variant="h3"
        className="font-bold xl:text-[24px] flex justify-center xl:mb-4"
      >
        Подать на партнёрство
      </Typography>
      <form>
        <div className="mb-4 ">
          <Typography
            variant="h4"
            className="font-bold xl:text-[18px] flex justify-start mt-5"
          >
            Имя
          </Typography>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-beige bg-beige rounded-xl"
          />
        </div>
        <div className="mb-4 ">
          <Typography
            variant="h4"
            className="font-bold xl:text-[18px] flex justify-start mt-5"
          >
            Почта
          </Typography>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-beige bg-beige rounded-xl"
          />
        </div>
        <div className="mb-4 ">
          <Typography
            variant="h4"
            className="font-bold xl:text-[18px] flex justify-start mt-5"
          >
            ИНН
          </Typography>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-beige bg-beige rounded-xl"
          />
        </div>
        <div className="mb-5 xl:mb-10">
          <Typography
            variant="h4"
            className="font-bold xl:text-[18px] flex justify-start mt-5"
          >
            Кратко сообщите о вашем предложении
          </Typography>
          <input
            type="text"
            id="post"
            className="w-full p-2 py-10 border border-beige bg-beige rounded-xl"
          />
        </div>
        <div className="flex flex-row gap-5 justify-center xl:justify-around">
          <Button type="submit" className="px-2 py-1">
            Подать
          </Button>
          <Button
            variant="OUTLINE"
            className="px-2 py-1"
            onClick={() => setModalPartner(false)}
          >
            Отмена
          </Button>
        </div>
      </form>
    </div>
  );
};
