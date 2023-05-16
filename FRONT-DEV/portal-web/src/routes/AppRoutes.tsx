import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout';
import { Home } from '../modules/home/pages';

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default AppRoutes;
