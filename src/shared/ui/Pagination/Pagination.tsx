import React from "react";
import { Button } from "../Button/Button";
import { ArrowLeft, ArrowRight } from "tabler-icons-react";

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  current: number;
  count: number;
  limit: number;
  onClick: (props: any) => void;
}

export const getPageCount = (limit: number, count: number) =>
  Math.ceil(count / limit);

export const getPageIndex = (current: number) =>
  current < 10 ? `0${current}` : current;

export const getPaginationNumbers = ({
  current,
  count,
  limit,
}: {
  count: number;
  current: number;
  limit: number;
}): (number | "...")[] => {
  const maxButtons = 3;
  const pageCount = getPageCount(limit, count);
  const numbers: (number | "...")[] = [];
  if (pageCount <= maxButtons) {
    for (let i = 1; i <= pageCount; i++) {
      numbers.push(i);
    }
  } else {
    const leftOffset = Math.floor(maxButtons / 2);
    let start = current - leftOffset;
    let end = current + leftOffset;

    if (start < 1) {
      start = 1;
      end = maxButtons;
    } else if (end > pageCount) {
      end = pageCount;
      start = pageCount - maxButtons + 1;
    }

    if (start > 1) {
      numbers.push(1);
      if (start > 2) numbers.push("...");
    }

    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }

    if (end < pageCount) {
      if (end < pageCount - 1) numbers.push("...");
      numbers.push(pageCount);
    }
  }

  return numbers;
};

const setPaginationContext = (props: {
  count: number;
  current: number;
  limit: number;
}) =>
  React.createContext<{
    count: number;
    current: number;
    limit: number;
  }>(props as { count: number; current: number; limit: number });

export const Pagination = ({
  current,
  limit,
  count,
  onClick,
  ...props
}: PaginationProps) => {
  const paginationContext = React.useContext(
    setPaginationContext({ current, limit, count })
  );
  return (
    getPageCount(limit, count) > 0 && (
      <div>
        <div {...props}>
          <div className="flex gap-2 flex-wrap justify-center">
            <Button
              variant="OUTLINE"
              disabled={current <= 1}
              className="size-9 px-[2px] flex justify-center items-center py-[2px] rounded-[5px]"
              onClick={() => onClick(current - 1)}
            >
              <ArrowLeft className="size-5" />
            </Button>
            {getPaginationNumbers(paginationContext).map((page) => (
              <div key={page}>
                {page === "..." && "..."}
                {page !== "..." && (
                  <Button
                    key={page}
                    variant={current === page ? "FILL" : "OUTLINE"}
                    className={`size-9 font-xs flex justify-center items-center px-[2px] py-[2px] rounded-[5px] border font-normal ${
                      current === page ? "border-primary" : "border-grey"
                    }`}
                    onClick={() => onClick(page)}
                  >
                    {getPageIndex(page)}
                  </Button>
                )}
              </div>
            ))}

            <Button
              variant="OUTLINE"
              disabled={current + 1 >= getPageCount(limit, count)}
              className="size-9 px-[2px] flex justify-center items-center py-[2px] rounded-[5px]"
              onClick={() => onClick(current + 1)}
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    )
  );
};
