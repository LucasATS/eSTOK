import React from 'react';
import { Routes } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import RoutesURL from '../modules/_shared/constants/RoutesURL.enum';
import ListProduct from '../modules/hello/pages/ListProduct';
import Home from '../modules/home';
import ListSale from '../modules/sale/pages';

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route index path={RoutesURL.HOME} Component={Home} />
          <Route path={RoutesURL.LIST_PRODUCT} Component={ListProduct} />
          <Route path={RoutesURL.LIST_SALE} Component={ListSale} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default AppRoutes;
