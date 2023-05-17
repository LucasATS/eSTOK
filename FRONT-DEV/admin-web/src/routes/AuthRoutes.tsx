import { Routes } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import RoutesURL from '../modules/_shared/constants/RoutesURL.enum';
import Login from '../modules/auth/pages/Login';

const AuthRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={RoutesURL.LOGIN} Component={Login} />
        <Route path="/" Component={Login} />
      </Routes>
    </HashRouter>
  );
};

export default AuthRoutes;
