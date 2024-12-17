import React, { useState } from "react";
import { useGetBrands } from "../../hooks/Brand/useGetBrands";
import { useCreateBrand } from "../../hooks/Brand/useCreateBrand";
import { useUpdateBrand } from "../../hooks/Brand/useUpdateBrand";
import { useDeleteBrand } from "../../hooks/Brand/useDeleteBrand";
import { Button } from "@/shared/ui";
import { Edit, Trash } from "tabler-icons-react";

export const BrandAdmin: React.FC = () => {
	const { data: brands, isLoading, isError } = useGetBrands();
	const createBrand = useCreateBrand();
	const updateBrand = useUpdateBrand();
	const deleteBrand = useDeleteBrand();

	const [newBrandName, setNewBrandName] = useState("");
	const [editingBrand, setEditingBrand] = useState<{
		id: number;
		name: string;
	} | null>(null);

	const handleCreate = () => {
		if (newBrandName.trim()) {
			createBrand.mutate({ name: newBrandName });
			setNewBrandName("");
		}
	};

	const handleUpdate = (id: number) => {
		if (editingBrand) {
			updateBrand.mutate({ id, updatedData: { name: editingBrand.name } });
			setEditingBrand(null);
		}
	};

	const handleDelete = (id: number) => {
		deleteBrand.mutate(id);
	};

	if (isLoading) return <p>Loading brands...</p>;
	if (isError) return <p>Error loading brands.</p>;

	return (
		<div className="border rounded m-2 p-4 max-w-md">
			<h1 className="text-2xl font-bold mb-4">Управление брендами</h1>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Добавить новый бренд</h2>
				<input
					type="text"
					className="border rounded p-2 w-full mb-2"
					value={newBrandName}
					onChange={(e) => setNewBrandName(e.target.value)}
					placeholder="Введите название бренда"
				/>
				<Button onClick={handleCreate}>Добавить</Button>
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-2">Список брендов</h2>
				{brands && brands.length > 0 ? (
					<ul className="space-y-4">
						{brands.map((brand: { brand_id: number; name: string }) => (
							<li
								key={brand.brand_id}
								className="border rounded p-4 flex justify-between items-center"
							>
								{editingBrand?.id === brand.brand_id ? (
									<input
										type="text"
										value={editingBrand.name}
										onChange={(e) =>
											setEditingBrand({ ...editingBrand, name: e.target.value })
										}
										className="border p-2 rounded"
									/>
								) : (
									<span>{brand.name}</span>
								)}

								<div className="flex space-x-2">
									{editingBrand?.id === brand.brand_id ? (
										<Button onClick={() => handleUpdate(brand.brand_id)}>
											Сохранить
										</Button>
									) : (
										<Button
											onClick={() =>
												setEditingBrand({
													id: brand.brand_id,
													name: brand.name,
												})
											}
										>
											<Edit />
										</Button>
									)}
									<Button
										onClick={() => handleDelete(brand.brand_id)}
										className="bg-red-400"
									>
										<Trash />
									</Button>
								</div>
							</li>
						))}
					</ul>
				) : (
					<p>Бренды не найдены.</p>
				)}
			</div>
		</div>
	);
};
