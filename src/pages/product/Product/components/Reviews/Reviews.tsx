import { ReviewProps } from "@/assets/constants/database";
import { Review, Typography } from "@/shared/ui";

export const Reviews = ({ reviews }: { reviews: ReviewProps[] }) => {
  return (
    <div className="flex flex-col gap-[11px] mt-[14px] mb-[34px] xl:gap-[19px] xl:mt-[69px] xl:mb-[26px] items-center px-[17px]">
      <Typography variant="h4" className="xl:text-[32px]">
        Отзывы
      </Typography>

      {reviews && (
        <div className="flex flex-col gap-5 w-full items-center">
          {reviews.map((review) => (
            <Review review={review} />
          ))}
        </div>
      )}
    </div>
  );
};
