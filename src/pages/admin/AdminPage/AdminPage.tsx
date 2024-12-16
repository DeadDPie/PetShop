import React, { useState } from "react";
import { useStoreAddresses } from "@shared/api/hooks/useStoreAddresses";
import { useAddStoreAddress } from "../hooks/useAddStoreAddress";
import { Button } from "@/shared/ui";

const AdminPage: React.FC = () => {
	const { data: storeAddresses, isLoading, isError } = useStoreAddresses();
	const addStoreAddress = useAddStoreAddress();

	const [newAddress, setNewAddress] = useState("");
	// const [editingAddress, setEditingAddress] = useState<{
	// 	id: number;
	// 	address: string;
	// } | null>(null);

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

	if (isLoading) return <p>Loading addresses...</p>;
	if (isError) return <p>Error loading addresses.</p>;

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Управление адресами магазинов</h1>

			{/* Add Address */}
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

			{/* Address List */}
			<div>
				<h2 className="text-xl font-semibold mb-2">Адреса магазинов</h2>
				{storeAddresses && storeAddresses.length > 0 ? (
					<ul className="space-y-4">
						{storeAddresses.map((address) => (
							<li
								key={address.store_adress_id}
								className="border rounded p-4 flex justify-between items-center"
							>
								{/* {editingAddress?.id === address.id ? (
                  <input
                    type="text"
                    className="border rounded p-2 w-full mr-4"
                    value={editingAddress.address}
                    onChange={(e) =>
                      setEditingAddress({ ...editingAddress, address: e.target.value })
                    }
                  />
                ) : (
                  <span>{address.address}</span>
                )} */}
								<span>{address.address}</span>
								<div className="flex space-x-2">
									{/* {editingAddress?.id === address.id ? (
                    <button
                      onClick={handleEdit}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => setEditingAddress({ id: address.id, address: address.address })}
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                  )} */}

									{/* <button
                    onClick={() => handleDelete(address.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button> */}
								</div>
							</li>
						))}
					</ul>
				) : (
					<p>No addresses found.</p>
				)}
			</div>
		</div>
	);
};

export default AdminPage;
