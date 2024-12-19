import React, { useState } from "react";

import axiosInstance from "@/shared/api/axiosInstance";
import { Button } from "@/shared/ui";

interface ProductFormData {
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

export const CreateProductAdmin: React.FC = () => {
	const [formData, setFormData] = useState<ProductFormData>({
		title: "",
		description: "",
		price: 0,
		rating: 0,
		categoryId: 0,
		brandId: 0,
		animalTypeId: 0,
		tagId: 0,
		image: null,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]:
				name === "price" || name === "rating" || name.includes("Id")
					? Number(value)
					: value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await axiosInstance.post("/product", formData);
			// Обработка успешного ответа
			console.log(response.data);
		} catch (error) {
			console.error("Ошибка при создании товара:", error);
		}
	};

	return (
		<div className="border rounded m-2 p-4 max-w-md">
			<h1 className="text-2xl font-bold mb-4">Управление категориями</h1>
			<form onSubmit={handleSubmit}>
				<label className=" m-2">Title:</label>
				<br />
				<input
					className="border rounded m-2"
					type="text"
					name="title"
					value={formData.title}
					onChange={handleChange}
					required
				/>

				<div>
					<label className=" m-2">Description:</label>
					<br />
					<textarea
						className="border rounded "
						name="description"
						value={formData.description}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label className=" m-2">Price:</label>
					<br />
					<input
						className="border rounded m-2"
						type="number"
						name="price"
						value={formData.price}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label className=" m-2">Rating:</label>
					<br />
					<input
						className="border rounded m-2"
						type="number"
						step="0.1"
						name="rating"
						value={formData.rating}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label className=" m-2">Category ID:</label>
					<br />
					<input
						className="border rounded m-2"
						type="number"
						name="categoryId"
						value={formData.categoryId}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label className=" m-2">Brand ID:</label>
					<br />
					<input
						className="border rounded m-2"
						type="number"
						name="brandId"
						value={formData.brandId}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label className=" m-2">Animal Type ID:</label>
					<br />
					<input
						className="border rounded m-2"
						type="number"
						name="animalTypeId"
						value={formData.animalTypeId}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label className=" m-2">Tag ID:</label>
					<br />
					<input
						className="border rounded m-2"
						type="number"
						name="tagId"
						value={formData.tagId}
						onChange={handleChange}
						required
					/>
				</div>

				<Button type="submit">Создать</Button>
			</form>
		</div>
	);
};