import { PRODUCTS } from "@/mock/database/database";
import { useGetProductsQuery } from "@/pages/admin/hooks/useGetProductsQuery";
import { useLiked } from "@/shared/contexts/liked";
import { ProductCard, Typography } from "@/shared/ui";
import { useState } from "react";

export const LikedPage = () => {
	const { liked } = useLiked();
	const [currentPage, setCurrentPage] = useState(1);
	const limit = 10;

	// Получаем данные о продуктах
	const { data, isSuccess, isLoading, isError } = useGetProductsQuery({
		params: {
			limit: limit.toString(),
			current: currentPage.toString(),
		},
	});
	return (
		<div className="w-full">
			<div className="relative flex flex-col items-center pt-[21px] xl:pt-[68px] px-6 pb-[3px] xl:gap-[25px] gap-[8px] mb-[55px]">
				<div className="flex flex-col gap-[18px] mt-4">
					<Typography
						variant="h4"
						className="flex justify-center mb-7 xl:text-[32px]"
					>
						Избранное
					</Typography>
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[35px] gap-y-6">
						{/* {PRODUCTS.filter((product) => liked.includes(product.id)).map(
              (animal) => (
                <ProductCard {...animal} />
              )
            )} */}
						{data?.rows
							.filter((product) => liked.includes(product.id))
							.map((animal) => (
								<ProductCard key={animal.id} tag={animal.tagId} {...animal} />
							))}
					</div>
				</div>
			</div>
		</div>
	);
};
