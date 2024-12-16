import {
	StoreAddress,
	useStoreAddresses,
} from "@/shared/api/hooks/useStoreAddresses";

export const Addresses = () => {
	const { data, isLoading, error } = useStoreAddresses();

	if (isLoading) return <p>Загрузка адресов...</p>;
	if (error) return <p>Ошибка при загрузке: {error.message}</p>;
	console.log(data);
	return (
		<div className="flex flex-col gap-3">
			<div className="text-xl">Адреса магазинов</div>
			<div className="flex flex-col gap-3 text-base">
				{data?.map((address: StoreAddress) => (
					<p key={address.store_adress_id}>{address.address}</p>
				))}
			</div>
		</div>
	);
};
