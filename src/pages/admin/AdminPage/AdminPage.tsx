import React from "react";

import { StoreAddressesAdmin } from "./StoreAddresses/StoreAddressesAdmin";
import { BrandAdmin } from "./Brand/BrandAdmin";
import { TagAdmin } from "./Tag/TagAdmin";
import { CategoryAdmin } from "./Category/CategoryAdmin";

const AdminPage: React.FC = () => {
	return (
		<div className="p-4 grid  grid-cols-3">
			<CategoryAdmin />
			<BrandAdmin />
			<TagAdmin />
			<StoreAddressesAdmin />
		</div>
	);
};

export default AdminPage;
