import { ANIMALS } from "@/assets/constants/animals";
import { CATEGORIES } from "@/assets/constants/categories";
import { useGetAnimalTypes } from "@/pages/admin/hooks/AnimalType/useGetAnimalTypes";
import { useGetCategory } from "@/pages/admin/hooks/Category/useGetCategory";
// import { CATEGORIES } from "@/assets/constants/categories";
import { Link } from "react-router-dom";

export const Categories = () => {
	const { data: Category, isLoading, isError } = useGetCategory();
	const { data: AnimalTypes } = useGetAnimalTypes();
	return (
		<div>
			<div className="flex flex-col gap-3">
				<div className="text-xl">Категории товаров</div>
				<div className="flex flex-col sm:flex-row gap-3 sm:gap-[77px]">
					<div className="flex flex-col gap-3 text-base">
						{/* {CATEGORIES.map((category) => (
            <Link
              to={`animal?category=${category.route}`}
              key={category.route}
              className="hover:font-bold"
            >
              {category.title}
            </Link>
          ))} */}
						{Category && Category.length > 0 ? (
							<div className="flex flex-col gap-3 text-base">
								{Category.map((item: { category_id: number; name: string }) => (
									<span>{item.name}</span>
								))}
							</div>
						) : null}
					</div>
					<div className="flex flex-col gap-3 text-base">
						{/* {ANIMALS.map((animal) => (
							<Link
								to={`animal?type=${animal.route}`}
								key={animal.route}
								className="hover:font-bold"
							>
								{animal.title}
							</Link>
						))} */}
						{AnimalTypes && AnimalTypes.length > 0
							? AnimalTypes.map(
									(item: { category_id: number; name: string }) => (
										<span>{item.name}</span>
									)
							  )
							: null}
					</div>
				</div>
			</div>
		</div>
	);
};

/*{/* to={animal.route}
              key={animal.title} */
