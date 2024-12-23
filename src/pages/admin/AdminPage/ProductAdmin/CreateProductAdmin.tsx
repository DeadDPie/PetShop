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

	const [fileData, setFileData] = useState<File | null>(null);

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

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setFileData(e.target.files[0]);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			// Отправка данных продукта
			const response = await axiosInstance.post("/product", formData);
			console.log("Продукт создан:", response.data);
			alert("Товар успешно создан!");

			if (fileData) {
				// Подготовка данных для загрузки файла
				const formData = new FormData();
				formData.append("image", fileData);

				// Отправка файла
				const imageResponse = await axiosInstance.patch(
					`/product/${response.data.product_id}/image`,
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
						},
					}
				);
				console.log("Файл загружен:", imageResponse.data);
			}
		} catch (error) {
			console.error("Ошибка при создании товара:", error);
		}
	};

	return (
		<div className=" border rounded m-2 p-4 max-w-md">
			<h1 className="text-2xl font-bold mb-4">Управление товарами</h1>
			<form onSubmit={handleSubmit}>
				<label className=" m-2">Название:</label>
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
					<label className=" m-2">Описание:</label>
					<br />
					<textarea
						className="border rounded  m-2"
						name="description"
						value={formData.description}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label className=" m-2">Цена:</label>
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
				{/* <div>
					<label className=" m-2">Оценка:</label>
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
				</div> */}
				<div>
					<label className=" m-2">категория ID:</label>
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
					<label className=" m-2">Бренд ID:</label>
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
					<label className=" m-2">Тип животного ID:</label>
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
					<label className=" m-2">Тэг ID:</label>
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

				<div>
					<label className=" m-2">Изображение:</label>
					<br />
					<input
						className="border rounded m-2"
						type="file"
						accept="image/*"
						onChange={handleFileChange}
					/>
				</div>

				<Button type="submit">Создать</Button>
			</form>
		</div>
	);
};
