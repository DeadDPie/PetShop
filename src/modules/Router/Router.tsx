import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignIn, SignUp } from "@/pages/auth";
import { Main } from "@/pages/main";

import { Layout } from "../Layout/Layout";
import { Product } from "@/pages/product/Product/Product";

export const Router = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Main />} />
        <Route path=":id" element={<Product />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
