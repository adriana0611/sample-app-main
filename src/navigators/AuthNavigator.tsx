import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { Module1Page } from "../pages/Module1Page";
import { Module2Page } from "../pages/Module2Page";
import { Module3Page } from "../pages/Module3Page";
import { CommonModule1Page } from "../pages/CommonModule1Page";
import { CommonModule2Page } from "../pages/CommonModule2Page";
import { DashboardLayout } from "../layouts/dashboard";

// -----------------------------------------------------------------

export const AuthNavigator = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/product-1/module-1" element={<Module1Page />} />

        <Route path="/product-1/module-2" element={<Module2Page />} />

        <Route path="/product-2/module-3" element={<Module3Page />} />

        <Route path="/common-module-1" element={<CommonModule1Page />} />

        <Route path="/common-module-2" element={<CommonModule2Page />} />
      </Route>
    </Routes>
  );
};
