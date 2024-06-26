import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <div data-label="Home">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
