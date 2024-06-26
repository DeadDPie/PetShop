import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignIn, SignUp } from "@/pages/auth";
import { Layout } from "../Layout/Layout";

export const Router = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
