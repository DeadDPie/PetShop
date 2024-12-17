import React from "react";

import { StoreAddressesAdmin } from "./StoreAddresses/StoreAddressesAdmin";
import { BrandAdmin } from "./Brand/BrandAdmin";

const AdminPage: React.FC = () => {
	return (
		<div className="p-4 ">
			<BrandAdmin />
			<StoreAddressesAdmin />
		</div>
	);
};

export default AdminPage;
