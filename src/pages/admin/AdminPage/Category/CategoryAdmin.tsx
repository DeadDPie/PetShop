import React, { useState } from "react";
import { useGetCategory } from "../../hooks/Category/useGetCategory";
import { useCreateCategory } from "../../hooks/Category/useCreateCategory";
import { useUpdateCategory } from "../../hooks/Category/useUpdateCategory";
import { useDeleteCategory } from "../../hooks/Category/useDeleteCategory";
import { Button } from "@/shared/ui";
import { Edit, Trash } from "tabler-icons-react";

export const CategoryAdmin: React.FC = () => {
	const { data: Category, isLoading, isError } = useGetCategory();
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
			updateCategory.mutate({
				id,
				updatedData: { name: editingCategory.name },
			});
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
			<h1 className="text-2xl font-bold mb-4">Управление категориями</h1>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Добавить новую категорию</h2>
				<input
					type="text"
					className="border rounded p-2 w-full mb-2"
					value={newCategoryName}
					onChange={(e) => setNewCategoryName(e.target.value)}
					placeholder="Введите название категории"
				/>
				<Button onClick={handleCreate}>Добавить</Button>
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-2">Список категорий</h2>
				{Category && Category.length > 0 ? (
					<ul className="space-y-4">
						{Category.map((Category: { category_id: number; name: string }) => (
							<li
								key={Category.category_id}
								className="border rounded p-4 flex justify-between items-center"
							>
								{editingCategory?.id === Category.category_id ? (
									<input
										type="text"
										value={editingCategory.name}
										onChange={(e) =>
											setEditingCategory({
												...editingCategory,
												name: e.target.value,
											})
										}
										className="border p-2 rounded"
									/>
								) : (
									<span>{Category.name}</span>
								)}

								<div className="flex space-x-2">
									{editingCategory?.id === Category.category_id ? (
										<Button onClick={() => handleUpdate(Category.category_id)}>
											Сохранить
										</Button>
									) : (
										<Button
											onClick={() =>
												setEditingCategory({
													id: Category.category_id,
													name: Category.name,
												})
											}
										>
											<Edit />
										</Button>
									)}
									<Button
										onClick={() => handleDelete(Category.category_id)}
										className="bg-red-400"
									>
										<Trash />
									</Button>
								</div>
							</li>
						))}
					</ul>
				) : (
					<p>категории не найдены.</p>
				)}
			</div>
		</div>
	);
};
