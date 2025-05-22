import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import Services from "../pages/Services";

function UseRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default UseRoutes;
