import { Navigate, Routes } from 'react-router';
import { Route } from 'react-router-dom';
import RoutesEnum from '../modules/_shared/constants/Routes.enum';
import Login from '../modules/auth/pages/Login';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.LOGIN} element={<Login />} />
      <Route path="*" element={<Navigate to={RoutesEnum.LOGIN} />} />
    </Routes>
  );
};

export default AuthRoutes;
