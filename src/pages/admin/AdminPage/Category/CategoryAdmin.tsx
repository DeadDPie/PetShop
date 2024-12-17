import React, { useState } from "react";
import { useGetCategorys } from "../../hooks/Category/useGetCategorys";
import { useCreateCategory } from "../../hooks/Category/useCreateCategory";
import { useUpdateCategory } from "../../hooks/Category/useUpdateCategory";
import { useDeleteCategory } from "../../hooks/Category/useDeleteCategory";
import { Button } from "@/shared/ui";
import { Edit, Trash } from "tabler-icons-react";

export const CategoryAdmin: React.FC = () => {
	const { data: Categorys, isLoading, isError } = useGetCategorys();
	const createCategory = useCreateCategory();
	const updateCategory = useUpdateCategory();
	const deleteCategory = useDeleteCategory();

	const [newCategoryName, setNewCategoryName] = useState("");
	const [editingCategory, setEditingCategory] = useState<{
		id: number;
		name: string;
	} | null>(null);

	const handleCreate = () => {
		if (newCategoryName.trim()) {
			createCategory.mutate({ name: newCategoryName });
			setNewCategoryName("");
		}
	};

	const handleUpdate = (id: number) => {
		if (editingCategory) {
			updateCategory.mutate({ id, updatedData: { name: editingCategory.name } });
			setEditingCategory(null);
		}
	};

	const handleDelete = (id: number) => {
		deleteCategory.mutate(id);
	};

	if (isLoading) return <p>Loading Categorys...</p>;
	if (isError) return <p>Error loading Categorys.</p>;

	return (
		<div className="border rounded m-2 p-4 max-w-md">
			<h1 className="text-2xl font-bold mb-4">Управление тэгами</h1>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Добавить новый тэг</h2>
				<input
					type="text"
					className="border rounded p-2 w-full mb-2"
					value={newCategoryName}
					onChange={(e) => setNewCategoryName(e.target.value)}
					placeholder="Введите название бренда"
				/>
				<Button onClick={handleCreate}>Добавить</Button>
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-2">Список тэгов</h2>
				{Categorys && Categorys.length > 0 ? (
					<ul className="space-y-4">
						{Categorys.map((Category: { Category_id: number; name: string }) => (
							<li
								key={Category.Category_id}
								className="border rounded p-4 flex justify-between items-center"
							>
								{editingCategory?.id === Category.Category_id ? (
									<input
										type="text"
										value={editingCategory.name}
										onChange={(e) =>
											setEditingCategory({ ...editingCategory, name: e.target.value })
										}
										className="border p-2 rounded"
									/>
								) : (
									<span>{Category.name}</span>
								)}

								<div className="flex space-x-2">
									{editingCategory?.id === Category.Category_id ? (
										<Button onClick={() => handleUpdate(Category.Category_id)}>
											Сохранить
										</Button>
									) : (
										<Button
											onClick={() =>
												setEditingCategory({
													id: Category.Category_id,
													name: Category.name,
												})
											}
										>
											<Edit />
										</Button>
									)}
									<Button
										onClick={() => handleDelete(Category.Category_id)}
										className="bg-red-400"
									>
										<Trash />
									</Button>
								</div>
							</li>
						))}
					</ul>
				) : (
					<p>тэги не найдены.</p>
				)}
			</div>
		</div>
	);
};
