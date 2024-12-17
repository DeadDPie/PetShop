import React, { useState } from "react";
import { useGetTags } from "../../hooks/Tag/useGetTags";
import { useCreateTag } from "../../hooks/Tag/useCreateTag";
import { useUpdateTag } from "../../hooks/Tag/useUpdateTag";
import { useDeleteTag } from "../../hooks/Tag/useDeleteTag";
import { Button } from "@/shared/ui";
import { Edit, Trash } from "tabler-icons-react";

export const TagAdmin: React.FC = () => {
	const { data: Tags, isLoading, isError } = useGetTags();
	const createTag = useCreateTag();
	const updateTag = useUpdateTag();
	const deleteTag = useDeleteTag();

	const [newTagName, setNewTagName] = useState("");
	const [editingTag, setEditingTag] = useState<{
		id: number;
		name: string;
	} | null>(null);

	const handleCreate = () => {
		if (newTagName.trim()) {
			createTag.mutate({ name: newTagName });
			setNewTagName("");
		}
	};

	const handleUpdate = (id: number) => {
		if (editingTag) {
			updateTag.mutate({ id, updatedData: { name: editingTag.name } });
			setEditingTag(null);
		}
	};

	const handleDelete = (id: number) => {
		deleteTag.mutate(id);
	};

	if (isLoading) return <p>Loading Tags...</p>;
	if (isError) return <p>Error loading Tags.</p>;

	return (
		<div className="border rounded m-2 p-4 max-w-md">
			<h1 className="text-2xl font-bold mb-4">Управление тэгами</h1>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">Добавить новый тэг</h2>
				<input
					type="text"
					className="border rounded p-2 w-full mb-2"
					value={newTagName}
					onChange={(e) => setNewTagName(e.target.value)}
					placeholder="Введите название тэга"
				/>
				<Button onClick={handleCreate}>Добавить</Button>
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-2">Список тэгов</h2>
				{Tags && Tags.length > 0 ? (
					<ul className="space-y-4">
						{Tags.map((tag: { tag_id: number; name: string }) => (
							<li
								key={tag.tag_id}
								className="border rounded p-4 flex justify-between items-center"
							>
								{editingTag?.id === tag.tag_id ? (
									<input
										type="text"
										value={editingTag.name}
										onChange={(e) =>
											setEditingTag({ ...editingTag, name: e.target.value })
										}
										className="border p-2 rounded"
									/>
								) : (
									<span>{tag.name}</span>
								)}

								<div className="flex space-x-2">
									{editingTag?.id === tag.tag_id ? (
										<Button onClick={() => handleUpdate(tag.tag_id)}>
											Сохранить
										</Button>
									) : (
										<Button
											onClick={() =>
												setEditingTag({
													id: tag.tag_id,
													name: tag.name,
												})
											}
										>
											<Edit />
										</Button>
									)}
									<Button
										onClick={() => handleDelete(tag.tag_id)}
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
