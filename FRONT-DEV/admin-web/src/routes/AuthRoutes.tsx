import { Routes } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import RoutesURL from '../modules/_shared/constants/RoutesURL.enum';
import Login from '../modules/auth/pages/Login';

const AuthRoutes = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route index path={RoutesURL.LOGIN} element={<Login />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default AuthRoutes;
