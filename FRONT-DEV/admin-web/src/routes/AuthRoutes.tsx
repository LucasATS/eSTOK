import { Navigate, Routes } from 'react-router';
import { Route } from 'react-router-dom';
import RoutesURL from '../modules/_shared/constants/RoutesURL.enum';
import Login from '../modules/auth/pages/Login';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={RoutesURL.LOGIN} element={<Login />} />
      <Route path="*" element={<Navigate to={RoutesURL.LOGIN} />} />
    </Routes>
  );
};

export default AuthRoutes;
