import { Star } from "tabler-icons-react";

export const Rating = ({ rating }: { rating: number }) => {
  const filledStars = Math.min(Math.max(rating, 0), 5); // Ensure rating is between 0 and 5

  return (
    <div className="relative flex items-center gap-[15px]">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Star key={`empty-${index}`} className="text-yellow" />
        ))}

      <div
        className="absolute left-0 top-0 flex items-center gap-[15px] overflow-hidden"
        style={{ width: `${(filledStars / 5) * 100}%` }}
      >
        {Array(filledStars)
          .fill(0)
          .map((_, index) => (
            <Star key={`filled-${index}`} className="fill-yellow text-yellow" />
          ))}
      </div>
    </div>
  );
};
