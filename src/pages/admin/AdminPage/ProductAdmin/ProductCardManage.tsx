import React from "react";

interface Product {
	product_id: number;
	title: string;
	description: string;
	price: number;
	rating: number;
	categoryId: number;
	brandId: number;
	animalTypeId: number;
	tagId: number;
	image: string | null;
}
const SERVER_URL = "http://localhost:3000"; //
export const ProductCardManage: React.FC<{ product: Product }> = ({
	product,
}) => {
	return (
		<div className="border border-gray-300 rounded-lg shadow-md m-4 p-4 transition-transform transform hover:scale-105">
			<h2 className="text-xl font-semibold mb-2">{product.title}</h2>
			{product.image ? (
				<img
					src={`${SERVER_URL}${product.image}`} // Добавляем URL сервера
					alt={product.title}
					className="w-full h-48 object-cover rounded-md mb-2"
				/>
			) : (
				<div className="h-48 flex items-center justify-center border border-dashed border-gray-400 rounded-md mb-2">
					<span className="text-gray-500">Image Not Available</span>
				</div>
			)}
			<p className="text-gray-700 mb-2">{product.description}</p>
			<p className="text-lg font-bold text-gray-900 mb-1">{product.price}₽</p>
			{/* <p className="text-sm text-gray-600">Рейтинг: {product.rating} ⭐️</p> */}
		</div>
	);
};
