// import { Link } from "react-router-dom";
import { ProductProps } from "@/shared/api/types/types";
import { Modal } from "@/shared/ui";
import { Link } from "react-router-dom";
import { Review } from "./Review";
import { useState } from "react";

export const HistoryItem = (product: ProductProps) => {
  const [modalReview, setModalReview] = useState(false);
  return (
    <div className="flex flex-col items-center justify-between gap-[3px] w-[135px] h-[213px] md:h-[299px] md:w-[210px]">
      {product.image && (
        <div className="flex-grow w-full overflow-hidden relative cursor-pointer">
          <Link to={`/${product.id}`}>
            <img
              src={product.image}
              className="w-full h-full object-contain flex justify-end absolute bottom-0"
            />
          </Link>
        </div>
      )}
      <p className="text-sm text-center md:text-lg max-w-[168px]">
        {product.title}
      </p>
      <p className="text-xs md:text-base ">04.03.2024</p>

      <p className="text-sm px-[7px] font-medium md:px-[15px] md:text-base">
        {product.price}₽
      </p>
      <button
        className="bg-white border border-brown px-[8px] py-[1px] rounded-[12px] "
        onClick={() => setModalReview(true)}
      >
        Оставить отзыв
      </button>
      <Modal className={modalReview ? "w-full" : "hidden"}>
        <Review setModalReview={setModalReview} product={product} />
      </Modal>
    </div>
  );
};
