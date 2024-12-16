import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignIn, SignUp } from "@/pages/auth";
import { Main } from "@/pages/main";

import { Layout } from "../Layout/Layout";
import { Product } from "@/pages/product/Product/Product";
import { Category } from "@/pages/main/CategoryPage/Category";
import { LikedPage } from "@/pages/main/LikedPage/LikedPage";
import { CartPage } from "@/pages/main/CartPage/CartPage";
import { AccountPage } from "@/pages/main/AccountPage/AccountPage";
import AdminPage from "@/pages/admin/AdminPage/AdminPage";

export const Router = () => (
	<BrowserRouter basename="/">
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="" element={<Main />} />
				<Route path=":id" element={<Product />} />
				<Route path="sign-in" element={<SignIn />} />
				<Route path="sign-up" element={<SignUp />} />
				<Route path="animal" element={<Category />} />
				<Route path="liked" element={<LikedPage />} />
				<Route path="cart" element={<CartPage />} />
				<Route path="account" element={<AccountPage />} />
				<Route path="admin" element={<AdminPage />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
