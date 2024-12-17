import React from "react";

import { StoreAddressesAdmin } from "./StoreAddresses/StoreAddressesAdmin";
import { BrandAdmin } from "./Brand/BrandAdmin";
import { TagAdmin } from "./Tag/TagAdmin";

const AdminPage: React.FC = () => {
	return (
		<div className="p-4 ">
			<BrandAdmin />
			<TagAdmin />
			<StoreAddressesAdmin />
		</div>
	);
};

export default AdminPage;
