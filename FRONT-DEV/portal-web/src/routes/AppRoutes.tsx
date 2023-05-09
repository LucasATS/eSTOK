import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout';
import RoutesStore from '../modules/_shared/constants/RoutesStore.enum';
import { Home } from '../modules/home/pages';

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route index path={RoutesStore.HOME} element={<Home />} />
          <Route path={RoutesStore.PRODUCT} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default AppRoutes;
