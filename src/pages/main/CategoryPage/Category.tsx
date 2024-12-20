import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AdjustmentsHorizontal } from "tabler-icons-react";

import { useGetCategory } from "@/pages/admin/hooks/Category/useGetCategory";
import {
	CategoryCard,
	Modal,
	Pagination,
	ProductCard,
	Typography,
} from "@/shared/ui";
import { Filter } from "@/shared/ui/Filter/Filter";
import { useGetProductsQuery } from "@/pages/admin/hooks/useGetProductsQuery";

export const Category = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [modal, setModal] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
	const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
	const [selectedMinPrice, setSelectedMinPrice] = useState<string>("");
	const [selectedMaxPrice, setSelectedMaxPrice] = useState<string>("");
	const [currentPage, setCurrentPage] = useState(1);

	const limit = 10;

	const { data: categoryData } = useGetCategory();
	const { data, isSuccess, isLoading } = useGetProductsQuery({
		params: {
			limit: limit.toString(),
			current: currentPage.toString(),
		},
	});

	// Фильтрация продуктов
	const filteredProducts = data?.rows.filter((product) => {
		const matchesCategory = selectedCategory
			? product.categoryId === parseInt(selectedCategory, 10)
			: true;
		const matchesTypes = selectedTypes.length
			? selectedTypes.includes(String(product.animalTypeId))
			: true;
		const matchesBrands = selectedBrands.length
			? selectedBrands.includes(String(product.brandId))
			: true;
		const matchesMinPrice = selectedMinPrice
			? product.price >= parseInt(selectedMinPrice, 10)
			: true;
		const matchesMaxPrice = selectedMaxPrice
			? product.price <= parseInt(selectedMaxPrice, 10)
			: true;

		return (
			matchesCategory &&
			matchesTypes &&
			matchesBrands &&
			matchesMinPrice &&
			matchesMaxPrice
		);
	});

	// Обработка клика по категории
	const handleCategoryClick = (categoryId: string) => {
		setSearchParams({
			...Object.fromEntries(searchParams.entries()),
			category: categoryId,
		});
		setSelectedCategory(categoryId);
	};

	// Применение фильтров
	const applyFilters = (
		types: string[],
		brands: string[],
		minPrice: string,
		maxPrice: string
	) => {
		const params: Record<string, string | string[]> = {
			...Object.fromEntries(searchParams.entries()),
		};

		if (minPrice) params.minPrice = minPrice;
		if (maxPrice) params.maxPrice = maxPrice;
		if (types.length > 0) params.type = types;
		if (brands.length > 0) params.brand = brands;

		setSearchParams(params);
		setSelectedTypes(types);
		setSelectedBrands(brands);
		setSelectedMinPrice(minPrice);
		setSelectedMaxPrice(maxPrice);
	};

	// Обработка клика на пагинацию
	const onPaginationClick = (page: number) => {
		setSearchParams({
			...Object.fromEntries(searchParams.entries()),
			current: page.toString(),
		});
		setCurrentPage(page);
	};

	return (
		<div className="relative flex flex-col items-center pt-[21px] xl:pt-[68px] px-6 pb-[3px] xl:gap-[25px] gap-[8px] mb-[55px]">
			<Typography variant="h4" className="xl:text-[32px]">
				Категории
			</Typography>
			<div className="w-max">
				{categoryData && categoryData.length > 0 ? (
					<div className="flex flex-wrap xl:gap-x-7 gap-x-[8px] gap-y-6">
						{categoryData.map((category) => (
							<div
								key={category.category_id}
								className="cursor-pointer bg-secondary hover:bg-primary items-center box-border text-center xl:rounded-[22px] p-3 rounded-[10px]"
								onClick={() =>
									handleCategoryClick(category.category_id.toString())
								}
							>
								<span>{category.name}</span>
							</div>
						))}
					</div>
				) : null}
				<div className="flex justify-between w-full xl:hidden mt-4">
					<Typography variant="h4" className="xl:text-[32px]">
						Товары
					</Typography>
					<AdjustmentsHorizontal
						className="size-6 cursor-pointer"
						onClick={() => setModal(true)}
					/>
				</div>
			</div>
			{isLoading && <div>Загрузка...</div>}
			{isSuccess && !isLoading && data && (
				<div className="flex flex-col gap-[18px] mt-4">
					<div className="flex flex-row">
						<div className="hidden xl:block mx-10">
							<Filter
								setModal={setModal}
								onApplyFilters={applyFilters}
								initialSelectedTypes={selectedTypes}
								initialSelectedBrands={selectedBrands}
								initialMinPrice={selectedMinPrice}
								initialMaxPrice={selectedMaxPrice}
							/>
						</div>
						<Modal className={modal ? "w-full" : "hidden"}>
							<Filter
								setModal={setModal}
								onApplyFilters={applyFilters}
								initialSelectedTypes={selectedTypes}
								initialSelectedBrands={selectedBrands}
								initialMinPrice={selectedMinPrice}
								initialMaxPrice={selectedMaxPrice}
							/>
						</Modal>
						<div className="flex flex-col w-full items-center">
							<div className="xl:min-h-[650px] grid grid-cols-2 min-[450px]:grid-cols-3 lg:grid-cols-4 gap-x-[35px] gap-y-6 xl:min-w-[945px]">
								{filteredProducts?.map((product) => (
									<ProductCard key={product.id} {...product} />
								))}
							</div>
							<Pagination
								count={data.total}
								limit={limit}
								current={currentPage}
								onClick={onPaginationClick}
								className="mt-[45px]"
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

//<ProductCardManage product={product} />
