import { Route, Routes } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../pages/ProductPage";

function UseRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/produto/:code" element={<ProductPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default UseRoutes;
