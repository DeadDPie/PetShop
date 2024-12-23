import React, { useState } from "react";
import { useStoreAddresses } from "@shared/api/hooks/useStoreAddresses";
import { Button } from "@/shared/ui";
import { Edit, Trash } from "tabler-icons-react";
import { useAddStoreAddress } from "../../hooks/StoreAddress/useAddStoreAddress";
import { useDeleteStoreAddress } from "../../hooks/StoreAddress/useDeleteStoreAddress";

export const StoreAddressesAdmin: React.FC = () => {
	const { data: storeAddresses, isLoading, isError } = useStoreAddresses();
	const addStoreAddress = useAddStoreAddress();
	const deleteStoreAddress = useDeleteStoreAddress();

	const [newAddress, setNewAddress] = useState("");

	const handleAdd = () => {
		if (newAddress.trim()) {
			addStoreAddress.mutate(
				{ address: newAddress },
				{
					onSuccess: () => {
						setNewAddress("");
						alert("Address added successfully!");
					},
					onError: () => {
						alert("Failed to add address.");
					},
				}
			);
		}
	};

	const handleDelete = (id: number) => {
		deleteStoreAddress.mutate(id, {
			onSuccess: () => {
				alert("Address deleted successfully!");
			},
			onError: () => {
				alert("Failed to delete address.");
			},
		});
	};

	if (isLoading) return <p>Loading addresses...</p>;
	if (isError) return <p>Error loading addresses.</p>;

	return (
		<div className=" border rounded p-4 m-2 max-w-xs">
			<h1 className="text-2xl font-bold mb-4">Управление адресами магазинов</h1>

			<div className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					Добавить новый адрес магазина
				</h2>
				<input
					type="text"
					className="border rounded p-2 w-full mb-2"
					value={newAddress}
					onChange={(e) => setNewAddress(e.target.value)}
					placeholder="Введите адрес магазина"
				/>
				<Button onClick={handleAdd}>Добавить адрес</Button>
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-2">Адреса магазинов</h2>
				{storeAddresses && storeAddresses.length > 0 ? (
					<ul className="space-y-4">
						{storeAddresses.map((address) => (
							<li
								key={address.store_adress_id}
								className="border rounded p-4 flex justify-between items-center"
							>
								<span>{address.address}</span>
								<Button>
									<Edit />
								</Button>
								<Button
									onClick={() => handleDelete(address.store_adress_id)}
									className="bg-red-400 mx-1"
								>
									<Trash />
								</Button>
							</li>
						))}
					</ul>
				) : (
					<p>Не найдены адреса магазинов.</p>
				)}
			</div>
		</div>
	);
};
