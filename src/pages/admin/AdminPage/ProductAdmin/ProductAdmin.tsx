import React, { useState } from "react";
import { Button } from "@/shared/ui";
import { Edit, Trash } from "tabler-icons-react";
import { useGetProductsQuery } from "../../hooks/useGetProductsQuery";
import { ProductCardManage } from "./ProductCardManage";

// Интерфейс для типов данных о продуктах
interface Product {
	id: number;
	title: string;
	description?: string;
	price: number;
	rating?: number;
	image?: string | null;
	tag: string | null;
}

export const ProductAdmin: React.FC = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const limit = 5;

	// Получаем данные о продуктах
	const { data, isSuccess, isLoading, isError } = useGetProductsQuery({
		params: {
			limit: limit.toString(),
			current: currentPage.toString(),
		},
	});

	// Обработчик переключения страниц
	const handlePageChange = (direction: "next" | "prev") => {
		setCurrentPage((prev) =>
			direction === "next" ? prev + 1 : Math.max(prev - 1, 1)
		);
	};
	data?.rows.map((product: any) => console.log(product));
	return (
		<div className="border rounded m-2 p-4">
			<h1 className="text-2xl font-bold mb-4">Управление товарами</h1>

			{/* Состояние загрузки и ошибки */}
			{isLoading && <p>Загрузка товаров...</p>}
			{isError && <p>Ошибка при загрузке товаров.</p>}

			{/* Отображение товаров */}
			{isSuccess && data && data.rows && data.rows.length > 0 ? (
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
					{/* {data.rows.map((product: Product) => (
						<div
							key={product.id}
							className="border rounded-lg p-4 flex flex-col justify-between"
						>
							<ProductCardManage
								id={product.id}
								title={product.title}
								description={product.description}
								price={product.price}
								rating={product.rating}
								tag={product.tag}
								image={product.image}
							/>
							<div className="flex justify-end mt-2 space-x-2">
								<Button variant="OUTLINE">
									<Edit size={18} />
								</Button>
								<Button variant="OUTLINE" color="red">
									<Trash size={18} />
								</Button>
							</div>
						</div>
					))} */}
					{data?.rows.map((product: any) => (
						<div key={product.id}>
							<ProductCardManage product={product} />
						</div>
					))}
				</div>
			) : (
				<p>Товары не найдены.</p>
			)}

			{/* Пагинация */}
			<div className="flex justify-center mt-4 space-x-4">
				<Button
					variant="OUTLINE"
					onClick={() => handlePageChange("prev")}
					disabled={currentPage === 1}
				>
					Назад
				</Button>
				<span>Страница: {currentPage}</span>
				{/* <Button
					variant="OUTLINE"
					onClick={() => handlePageChange("next")}
					disabled={data?.rows?.length < limit}
				>
					Вперед
				</Button> */}
			</div>
		</div>
	);
};
