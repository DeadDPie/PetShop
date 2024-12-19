import React from "react";

import { StoreAddressesAdmin } from "./StoreAddresses/StoreAddressesAdmin";
import { BrandAdmin } from "./Brand/BrandAdmin";
import { TagAdmin } from "./Tag/TagAdmin";
import { CategoryAdmin } from "./Category/CategoryAdmin";
import { AnimalTypeAdmin } from "./AnimalType/AnimalTypeAdmin";
import { ProductAdmin } from "./ProductAdmin/ProductAdmin";
import { CreateProductAdmin } from "./ProductAdmin/CreateProductAdmin";

const AdminPage: React.FC = () => {
	return (
		<div>
			<ProductAdmin />
			<CreateProductAdmin />
			<div className="p-4 grid  grid-cols-3">
				<AnimalTypeAdmin />
				<CategoryAdmin />
				<BrandAdmin />
				<TagAdmin />
				<StoreAddressesAdmin />
			</div>
		</div>
	);
};

export default AdminPage;
