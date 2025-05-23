import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../ui/Footer";
import dataFooter from "../../ui/Footer/data";
import Header from "../../ui/Header";

const MainLayout: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="relative">
      <Outlet />
    </main>
    <Footer {...dataFooter} className="mt-auto" />
  </div>
);

export default MainLayout;
