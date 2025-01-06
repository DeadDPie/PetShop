import { ReviewProps } from "@/pages/product/Product/Product";
import { Rating } from "../Rating/Rating";

export const Review = ({ review }: { review: ReviewProps }) => {
  return (
    <div className="flex w-full flex-col max-w-[1091px] px-6 py-[11px] gap-[7px] border-2 border-greyDark rounded-[15px]">
      <div className="flex gap-[21px] items-center flex-wrap">
        <Rating rating={review.rating} />
        <p className="font-comfortaa text-sm">{review.name}</p>
      </div>
      <p className="text-base flex-wrap">{review.review}</p>
    </div>
  );
};
