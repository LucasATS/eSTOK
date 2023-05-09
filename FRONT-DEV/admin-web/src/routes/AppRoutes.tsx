import React from "react";
import { Routes } from "react-router";
import { HashRouter, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import RoutesURL from "../modules/_shared/constants/RoutesURL.enum";
import Home from "../modules/home";
import ListProduct from "../modules/produto/pages/ListProduct";

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route index path={RoutesURL.HOME} Component={Home} />
          <Route path={RoutesURL.LIST_PRODUCT} Component={ListProduct} />
        </Routes>
      </MainLayout>
    </HashRouter>
  ) as any;
};

export default AppRoutes;
