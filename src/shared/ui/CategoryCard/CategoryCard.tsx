import { Typography } from "@/shared/ui";
import { Link } from "react-router-dom";

export const CategoryCard = ({
  image,
  title,
  route,
}: {
  image: string;
  route: string;
  title: string;
}) => (
  <Link
    to={route}
    className="bg-secondary hover:bg-primary items-center box-border text-center xl:rounded-[22px] xl:gap-4 h-[130px] xl:h-[250px] xl:w-[200px] px-[7px] rounded-[10px] w-[100px] flex flex-col justify-end pb-[14px]"
  >
    <div className="flex-grow w-full overflow-hidden relative">
      <img
        src={image}
        className="w-full h-full object-contain flex justify-end absolute bottom-0 max-h-[178px]"
      />
    </div>
    <Typography variant="h4" className="text-xs xl:text-base">
      {title}
    </Typography>
  </Link>
);
