import React from 'react';
import { Routes } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import RoutesURL from '../modules/_shared/constants/RoutesURL.enum';
import Home from '../modules/home';
import ListProduct from '../modules/product/pages';
import ListReport from '../modules/report/pages';
import ListSale from '../modules/sale/pages';
import { ListStock } from '../modules/stock/pages';

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route index path={RoutesURL.HOME} Component={Home} />
          <Route path={RoutesURL.LIST_PRODUCT} Component={ListProduct} />
          <Route path={RoutesURL.LIST_SALE} Component={ListSale} />
          <Route path={RoutesURL.LIST_STOCK} Component={ListStock} />
          <Route path={RoutesURL.LIST_REPORT} Component={ListReport} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default AppRoutes;
