import { useSearchParams } from "react-router-dom";
import { AdjustmentsHorizontal } from "tabler-icons-react";

import { CATEGORIES } from "@/assets/constants/categories";
import {
	CategoryCard,
	Modal,
	Pagination,
	ProductCard,
	Typography,
} from "@/shared/ui";
import { Filter } from "@/shared/ui/Filter/Filter";
import { useState } from "react";
import { useGetProductsQuery } from "@/shared/api/hooks/useGetProductsQuery";
import { useGetCategory } from "@/pages/admin/hooks/Category/useGetCategory";

export const Category = () => {
	const [modal, setModal] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const selectedCategory = searchParams.get("category");
	const selectedTypes = searchParams.getAll("type");
	const selectedBrands = searchParams.getAll("brand");
	const selectedMinPrice = searchParams.get("minPrice");
	const selectedMaxPrice = searchParams.get("maxPrice");
	const selectedPage = searchParams.get("current");

	const { data, isSuccess, isFetching } = useGetProductsQuery({
		params: { limit: "12", current: selectedPage || "1" },
	});

	const handleCategoryClick = (category: string) => {
		setSearchParams({
			...Object.fromEntries(searchParams.entries()),
			category,
		});
	};

	const applyFilters = (
		types: string[],
		brands: string[],
		minPrice: string,
		maxPrice: string
	) => {
		const params: {
			minPrice: string;
			maxPrice: string;
			type: string[];
			brand: string[];
		} = {
			...Object.fromEntries(searchParams.entries()),
			type: types,
			brand: brands,
			minPrice: "",
			maxPrice: "",
		};
		if (minPrice !== "") params.minPrice = minPrice;
		if (maxPrice !== "") params.maxPrice = maxPrice;
		setSearchParams(params);
	};

	const filteredProducts = data?.rows.filter((product) => {
		const matchesCategory = selectedCategory
			? product.category === selectedCategory
			: true;
		const matchesTypes =
			selectedTypes.length > 0 ? selectedTypes.includes(product.animal) : true;
		const matchesBrands =
			selectedBrands.length > 0 ? selectedBrands.includes(product.brand) : true;
		const matchesMinPrice = selectedMinPrice
			? parseInt(product.price) >= Number(selectedMinPrice)
			: true;
		const matchesMaxPrice = selectedMaxPrice
			? parseInt(product.price) <= Number(selectedMaxPrice)
			: true;
		return (
			matchesCategory &&
			matchesTypes &&
			matchesBrands &&
			matchesMinPrice &&
			matchesMaxPrice
		);
	});

	const onPaginationClick = (current: number) =>
		setSearchParams({
			...Object.fromEntries(searchParams.entries()),
			current: current.toString(),
		});

	const { data: Category, isLoading, isError } = useGetCategory();

	return (
		<>
			<div className="relative flex flex-col items-center pt-[21px] xl:pt-[68px] px-6 pb-[3px] xl:gap-[25px] gap-[8px] mb-[55px] ">
				<Typography variant="h4" className="xl:text-[32px]">
					Категории
				</Typography>
				<div className="w-max ">
					{/* <div className="grid grid-cols-3 sm:grid-cols-5 xl:gap-x-7 gap-x-[8px] gap-y-6 ">
						{CATEGORIES.map((category) => (
							<CategoryCard
								key={category.title}
								{...category}
								onClick={() => handleCategoryClick(category.route)}
							/>
						))}
					</div> */}
					{Category && Category.length > 0 ? (
						<div className="flex row xl:gap-x-7 gap-x-[8px] gap-y-6 ">
							{Category.map((item: { category_id: number; name: string }) => (
								<div className=" cursor-pointer bg-secondary hover:bg-primary items-center box-border text-center xl:rounded-[22px]  p-3 rounded-[10px] ">
									<span>{item.name}</span>
								</div>
							))}
						</div>
					) : null}
					<div className="flex justify-between w-full xl:hidden  mt-4">
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
				{/* {isFetching && <div>Загрузка...</div>} */}
				{data && isSuccess && !isFetching && (
					<>
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
								<div className="flex flex-col w-full items-center ">
									<div className="xl:min-h-[650px] grid grid-cols-2 min-[450px]:grid-cols-3 lg:grid-cols-4 gap-x-[35px] gap-y-6 xl:min-w-[945px]">
										{filteredProducts?.map((animal) => (
											<ProductCard key={animal.id} {...animal} />
										))}
									</div>
									<Pagination
										count={data!.pagination.count}
										limit={data!.pagination.limit}
										current={parseInt(selectedPage ?? "1")}
										onClick={onPaginationClick}
										className="mt-[45px]"
									/>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};
