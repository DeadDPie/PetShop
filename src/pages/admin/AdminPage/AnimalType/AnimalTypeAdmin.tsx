import React, { useState } from "react";
import { useGetAnimalTypes } from "../../hooks/AnimalType/useGetAnimalTypes";
import { useCreateAnimalType } from "../../hooks/AnimalType/useCreateAnimalType";
import { useUpdateAnimalType } from "../../hooks/AnimalType/useUpdateAnimalType";
import { useDeleteAnimalType } from "../../hooks/AnimalType/useDeleteAnimalType";
import { Button } from "@/shared/ui";
import { Edit, Trash } from "tabler-icons-react";

export const AnimalTypeAdmin: React.FC = () => {
	const { data: AnimalTypes, isLoading, isError } = useGetAnimalTypes();
	const createAnimalType = useCreateAnimalType();
	const updateAnimalType = useUpdateAnimalType();
	const deleteAnimalType = useDeleteAnimalType();

	const [newAnimalTypeName, setNewAnimalTypeName] = useState("");
	const [editingAnimalType, setEditingAnimalType] = useState<{
		id: number;
		name: string;
	} | null>(null);

	const handleCreate = () => {
		if (newAnimalTypeName.trim()) {
			createAnimalType.mutate({ name: newAnimalTypeName });
			setNewAnimalTypeName("");
		}
	};

	const handleUpdate = (id: number) => {
		if (editingAnimalType) {
			updateAnimalType.mutate({
				id,
				updatedData: { name: editingAnimalType.name },
			});
			setEditingAnimalType(null);
		}
	};

	const handleDelete = (id: number) => {
		deleteAnimalType.mutate(id);
	};

	if (isLoading) return <p>Loading AnimalTypes...</p>;
	if (isError) return <p>Error loading AnimalTypes.</p>;

	return (
		<div className="border rounded m-2 p-4 max-w-md">
			<h1 className="text-2xl font-bold mb-4">Управление типами животных</h1>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					Добавить новый тип животного
				</h2>
				<input
					type="text"
					className="border rounded p-2 w-full mb-2"
					value={newAnimalTypeName}
					onChange={(e) => setNewAnimalTypeName(e.target.value)}
					placeholder="Введите тип животного"
				/>
				<Button onClick={handleCreate}>Добавить</Button>
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-2">Список типов животных</h2>
				{AnimalTypes && AnimalTypes.length > 0 ? (
					<ul className="space-y-4">
						{AnimalTypes.map(
							(AnimalType: { animal_type_id: number; name: string }) => (
								<li
									key={AnimalType.animal_type_id}
									className="border rounded p-4 flex justify-between items-center"
								>
									{editingAnimalType?.id === AnimalType.animal_type_id ? (
										<input
											type="text"
											value={editingAnimalType.name}
											onChange={(e) =>
												setEditingAnimalType({
													...editingAnimalType,
													name: e.target.value,
												})
											}
											className="border p-2 rounded"
										/>
									) : (
										<span>{AnimalType.name}</span>
									)}

									<div className="flex space-x-2">
										{editingAnimalType?.id === AnimalType.animal_type_id ? (
											<Button
												onClick={() => handleUpdate(AnimalType.animal_type_id)}
											>
												Сохранить
											</Button>
										) : (
											<Button
												onClick={() =>
													setEditingAnimalType({
														id: AnimalType.animal_type_id,
														name: AnimalType.name,
													})
												}
											>
												<Edit />
											</Button>
										)}
										<Button
											onClick={() => handleDelete(AnimalType.animal_type_id)}
											className="bg-red-400"
										>
											<Trash />
										</Button>
									</div>
								</li>
							)
						)}
					</ul>
				) : (
					<p>типы животноых не найдены.</p>
				)}
			</div>
		</div>
	);
};
